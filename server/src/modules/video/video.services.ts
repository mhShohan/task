import PrismaConnect from "../../lib/PrismaConnect";
import transcodeVideo from "../../lib/transcodeVideo";

class Services extends PrismaConnect {

  async upload({ filePath, title }: { filePath: string, title: string }) {

    const videoTitle = title.split(' ').join('-') + '-' + Date.now();

    const videoRes = await transcodeVideo(videoTitle, filePath);

    return this.prisma.video.create({
      data: {
        title,
        path: videoRes as string
      }
    })
  }
}

const videoServices = new Services();
export default videoServices;