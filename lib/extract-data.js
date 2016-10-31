module.exports = (data) => {
  delete data.settings
  delete data._locals
  delete data.cache
  return data
}
