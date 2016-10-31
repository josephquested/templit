module.exports = (filePath, options) => {
  if (options.templit) {
    return require(`${filePath}/../templits/${options.templit}.js`)
  } else {
    return require(`${filePath}/../templits/index.js`)
  }
}
