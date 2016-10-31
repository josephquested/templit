module.exports = (filePath, options, callback) => {
  var data = require('./lib/extract-data')(options)
  var body = require(filePath)(data)
  var html =
  `
    <html>
      <body>
        ${body}
      </body>
    </html>
  `
  return callback(null, html)
}
