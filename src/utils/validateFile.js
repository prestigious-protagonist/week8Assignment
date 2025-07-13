exports.isValidFileType = (file, allowedTypes) => {
  return allowedTypes.includes(file.mimetype);
};

exports.isValidFileSize = (file, maxSizeMB) => {
  return file.size <= maxSizeMB * 1024 * 1024;
};
