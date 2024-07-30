import fs from 'fs'
import ffmpeg from 'fluent-ffmpeg'


// let inputPath = 'upload/001.mp4';
// let outputPath = 'transcoded/001.mpd';

const scaleOptions = [
  'scale=1920:1080',
  'scale=1280:720',
  'scale=854:480',
  'scale=640:360',
];

const videoCodec = 'libx264';
const x264Options = 'keyint=24:min-keyint=24:scenecut=40';
const videoBitrates = ['500k', '1000k', '2000k', '4000k'];
const audioBitrates = ['128k', '192k', '256k', '320k'];

const transcodeVideo = (filename: string, filepath: string) => {

  const dir = `./transcoded/${filename}`;

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  return new Promise((resolve, reject) => {
    ffmpeg()
      .input(filepath)
      .audioCodec('aac')
      .videoFilters(scaleOptions)
      .videoCodec(videoCodec)
      .videoBitrate(videoBitrates[0])
      .outputOptions('-b:v', videoBitrates[0])
      .addOption('-x264opts', x264Options)
      .format('dash')
      .output(`${dir}/video.mpd`)
      .on("progress", function (progress) {
        console.log("Processing: " + parseInt(progress.percent) + "% done");
      })
      .on('end', () => {
        fs.unlink(filepath, (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log('File is deleted.');
          }
        });
        resolve(`${filename}/video.mpd`);
      })
      .on('error', (err) => {
        reject(err);
      })
      .run();
  });
};

export default transcodeVideo;


// const transcode = (filename, filepath) => {
//   return new Promise((resolve, reject) => {
//     ffmpeg(filepath)
//       .videoCodec('libx264')
//       .audioCodec('libmp3lame')
//       .size('720x?')
//       .on('error', (err) => {
//         reject(err);
//       })
//       .on('end', () => {
//         ffmpeg(filepath)
//           .screenshots({
//             timestamps: ['10%'],
//             filename: `${filename}-thumbnail.png`,
//             size: '720x?',
//             folder: './transcoded',
//           })
//           .on('end', () => {
//             resolve();
//           })
//           .on('error', (err) => {
//             reject(err);
//           });
//       })
//       .save(`./transcoded/${filename}.mp4`);

//   });
// };