module.exports = (filePath, options, callback) => {
  var templit = require('./lib/get-templit')(filePath, options)
  var data = require('./lib/extract-data')(options)
  var body = require(filePath)(data)
  var html = templit(body)
  return callback(null, html)
}
