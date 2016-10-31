module.exports = (html) => {
  var templit =
  `
    <html>
      <head>
        <title>TEMPLIT</title>
      </head>
      <body>
        ${html}
      </body>
    </html>
  `
  return templit
}
