module.exports = (data) => {
  var friendsHTML = ``
  data.friends.forEach((friend) => {
    friendsHTML += `<li>friend: ${friend}</li>`
  })

  var html =
  `
    <h1>${data.title}</h1>
    <ul>${friendsHTML}</ul>
  `
  return html
}
