function getFileType(filePath, settings) {
  for (const setting of settings) {
    if (filePath.startsWith(setting.pattern.replace('/**', ''))) {
      return setting.type;
    }
  }
  return null;
}

module.exports = {
  getFileType,
};
