module.exports = (filePath, options) => {
  var _opts = options || {}
  var fileName = _opts.templit || 'default'

  return require(`${filePath}/../templits/${fileName}.js`)
}
