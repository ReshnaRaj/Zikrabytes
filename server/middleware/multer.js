const multer = require("multer");

const FILE_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const isValid = FILE_TYPE_MAP[file.mimetype];
    console.log(isValid, "hey how are you...");
    let uploadError = new Error("invalid image type");
    // console.log(uploadError, "iam fine");
    if (isValid) {
      // console.log(uploadError, "pppp");
      uploadError = null;
      console.log(uploadError, "become null");
    } else {
      return (error = "invalid file");
    }
    cb(uploadError, "./public/uploads");
  },
  filename: function (req, file, cb) {
    console.log(file);
    const extension = FILE_TYPE_MAP[file.mimetype];
    console.log(extension, "ext....");
    cb(null, `${Date.now()}.${extension}`);
  },
});

const uploadImage = multer({ storage: storage });
// console.log(uploadImage, "lololol");
module.exports = { uploadImage };
