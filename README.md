# ${ TEMPLIT }
## a simple, literal templating engine for express.js
---

### ${ quick start }

#### starting a templit project from scratch:
getting a new templit project up and running is extremely easy. follow the instructions below, or clone down the example project from [josephquested/templit-example](http://github.com/josephquested/templi-example) and work from there.

#### configuring an existing repo for templit:

1. save the templit library into your project via npm: `npm install templit --save`

1. you need to plug in templit as the rendering engine for your express app. the minimal server code looks like this:
 ```javascript
 var app = require('express')()
 var templit = require('templit')

 app.engine('js', templit)
 app.set('view engine', 'js')

 // the path to your 'views' directory
 app.set('views', `${__dirname}/views`)

 app.get('/', (req, res) => {
   res.render('home', { tite: 'templit template' })
 })

 app.listen(3000, () => {
   console.log('templit rendering on port 3000')
 })
```
1. aishd
