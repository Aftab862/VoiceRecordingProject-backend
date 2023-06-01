const multer = require('multer');

const storage = multer.diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
            cb(null, file.fieldname + '-' + Date.now() + ".WAV");
      }
});
const upload = multer({ storage });

module.exports = upload;