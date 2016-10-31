module.exports = (options) => {
  delete options.settings
  delete options._locals
  delete options.cache
  return options
}
