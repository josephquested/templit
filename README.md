# TEMPLIT

> a modern server-side rendering engine powered by template literal strings and express.js

The NPM community features some very powerful tempting engines. Unfortunately, most of them were created prior to the release of ECMAScript 6, and are not utilizing the best that JavaScript now has to offer.

Templit provides the same functionality as the templating modules you know and love, without any of the library specific syntax you know and hate.

**All templit documents are `.js` files, and require no library specific syntax.**

## Quick Setup

render engine setup:

```js
// app.js //

var app = require('express')()
var templit = require('templit')

app.engine('js', templit)
app.set('view engine', 'js')

// important: the path to your 'views' directory
app.set('views', `${__dirname}/views`)

app.get('/', (req, res) => {
  res.render('home', { tite: 'templit template' })
})

app.listen(3000, () => {
  console.log('templit rendering on port 3000')
})
```


## File Tree
```
.
├─ app.js
|
├─ package.json
|
├── views
|   |
|   ├─ home.js
|   |
|   templits
|      ├── footer.html
|      └── header.html
```

With [npm](https://npmjs.org/) installed, run

```
$ npm install templit
```

## Acknowledgments

templit was inspired by..

## See Also

- [`noffle/common-readme`](https://github.com/noffle/common-readme)
- ...

## License

ISC
