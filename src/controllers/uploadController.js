const cloudinary = require('../config/cloudinary');
const { isValidFileType, isValidFileSize } = require('../utils/validateFile');

exports.uploadFile = async (req, res, next) => {
  try {
    if (!req.file) throw new Error('No file uploaded');

    const allowedTypes = ['image/jpeg', 'image/png'];
    const maxSize = 2; // MB

    if (!isValidFileType(req.file, allowedTypes)) {
      throw new Error('Invalid file type. Only JPEG and PNG are allowed.');
    }

    if (!isValidFileSize(req.file, maxSize)) {
      throw new Error('File too large. Max size is 2MB.');
    }

    const result = await cloudinary.uploader.upload(req.file.path);
    res.status(200).json({ message: 'File uploaded successfully', data: result });

  } catch (err) {
    next(err);
  }
};
