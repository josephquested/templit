var path = require('path')

module.exports = (filePath, options, callback) => {
  var data = {title: options.title, body: options.body}
  var templit = require(filePath)(data)

  var html =
  `
    <html>
      <body>
        ${templit}
      </body>
    </html>
  `

  return callback(null, html)
}
