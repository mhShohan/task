import multer from 'multer'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, process.cwd() + '/uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);

    if (file.mimetype === 'video/mp4') {
      cb(null, file.originalname + '-' + uniqueSuffix + '.mp4');
    } else {
      cb(new Error('File type is not supported'), '');
    }
  },
});

const upload = multer({ storage: storage });

export default upload;
