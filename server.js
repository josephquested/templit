var app = require('express')()
var templit = require('./index')

app.engine('js', templit)
app.set('views', `${__dirname}/views`)
app.set('view engine', 'js')

app.get('/', (req, res) => {
  var data = { title: 'TEMPLIT', body: 'template literals' }
  res.render('home', data)
})

app.get('/profile', (req, res) => {
  var data = { templit: 'profile', title: 'PROFILE', friends: ['zoe', 'ashley', 'ben'] }
  res.render('profile', data)
})

app.listen(3000, () => {
  console.log('templit rendering on port 3000')
})
