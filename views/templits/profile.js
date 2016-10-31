module.exports = (html) => {
  var templit =
  `
    <html>
      <head>
        <title>PROFILE</title>
      </head>
      <body>
        ${html}
      </body>
    </html>
  `
  return templit
}
