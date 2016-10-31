module.exports = (data) => {
  var html =
  `
    <h1>${data.title}</h1>
    <h2>${data.body}</h2>
    <h2>${data.friends}</h2>
  `
  return html
}
