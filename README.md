# TEMPLIT

> a modern server-side rendering engine powered by template literal strings and [express.js](https://www.npmjs.com/package/express)

The NPM community features some very powerful tempting engines. Unfortunately, most of them were created prior to the release of ECMAScript 6, and are not utilizing the best that JavaScript now has to offer.

Templit provides the same functionality as the templating modules you know and love, without any of the library specific syntax you know and hate.

**All templit documents are `.js` files, and require no library specific syntax.**

## ------- SETUP -------
### [*quick* setup using the templit generator](https://www.npmjs.com/package/slush-templit)
If you're starting a new Templit project from scratch, consider using [the templit generator](https://www.npmjs.com/package/slush-templit). It scaffolds out the basic structure of an express/templit app for you.

## -----------------------

### manual setup
It's also easy to set up a templit project yourself, these commands will get you started:

1. `mkdir templit-app`
1. `cd templit-app`
1. `npm init`
1. `npm install express templit --save`
1. `touch app.js`


**inside app.js:**

```js
// app.js //

var app = require('express')()
var templit = require('templit')

app.engine('js', templit)
app.set('view engine', 'js')

// important: the path to your 'views' directory
app.set('views', `${__dirname}/views`)

app.get('/', (req, res) => {
  res.render('home', { title: 'templit app' })
})

app.listen(3000, () => {
  console.log('templit app rendering on port 3000')
})
```

Templit (like most rendering engines) requires a fairly **specific file tree** -- *pictured below.* The following commands will build out that tree for you. They should be executed from the top level directory of your project:

1. `mkdir views`
1. `mkdir views/templits`
1. `touch views/home.js`
1. `touch views/templits/default.js`


### File Tree
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
|      |
|      ├── default.js
|
```
* note: your templits directory *must* contain a **default.js** file.

### views and templits
There are two different kinds of files we're dealing with here: **Templits** and **Views**. `templits`, found in the `views/templits` directory, are the HTML shells _into which_ `views` are rendered. In other templating frameworks these are commonly called _"layouts"_.

**inside views/templits/default.js:**
```js
// views/templits/default.js

module.exports = (body) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>templit app</title>
      </head>
      <body>
        ${body}
      </body>
    </html>
  `
}
```
This HTML will be the default templit for your app. The view that you wish to render (ie: `views/home.js`) will be passed as the `(body)` argument to this function, and then rendered inside the `<body>${body}</body>` element.

**inside views/home.js:**
```js
// views/home.js

module.exports = (data) => {
  return `
    <h1>${data.title}</h1>
  `
}
```

#### Woohoo!
 Your templit app is now ready to go. Run `node app.js` and visit `localhost:3000` in your browser.

## ------- user guide -------
### understanding res.render()
```JS
app.get('/', (req, res) => {
  res.render('home', { tite: 'templit app' })
})
```
`res.render('view', [data])` is an express function that takes two arguments.

1. A string that represents the view to be loaded, IE: `'home'`. This string points to a file that lives in the *views* folder, IE: `/views/home.js`.

1. An optional object that passes data along to the view being rendered, IE: `{title: "templit app"}`

### passing non-default templits
What if I don't want to use the default templit? Never fear. Custom templits are stored in the `views/templits` directory, IE: `views/templits/login.js`.

You specify their use in the `res.render()` function, by passing a special `templit: 'string'` key-value pair into the optional second argument. IE:
```js
app.get('/login', (req, res) => {
  res.render('login', { templit: 'login' })
})
```



## ------- acknowledgments -------

templit was inspired by an aversion to *`{{{this}}}`* and `h('p', 'this')`

## see also

- [`further reading on template literals`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals)
- [`templit example app`](https://example.com)
- [`templit generator`](https://example.com)
- [`express.js npm`](https://www.npmjs.com/package/express)
- [`handlebars npm`](https://www.npmjs.com/package/handlebars)
- [`hyperscript npm`](https://www.npmjs.com/package/hyperscript)

## License

ISC

_xoxo joseph quested_
