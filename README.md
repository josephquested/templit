# TEMPLIT

> a modern server-side rendering engine powered by template literal strings and express.js

The NPM community features some very powerful tempting engines. Unfortunately, most of them were created prior to the release of ECMAScript 6, and are not utilizing the best that JavaScript now has to offer.

Templit provides the same functionality as the templating modules you know and love, without any of the library specific syntax you know and hate.

**All templit documents are `.js` files, and require no library specific syntax.**

## SETUP
### *quick* setup using the templit generator
If you're starting a new Templit project from scratch, consider using the **slush-templit** generator. It scaffolds out the basic structure of an express/templit app for you.

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
  res.render('home', { tite: 'templit app' })
})

app.listen(3000, () => {
  console.log('templit app rendering on port 3000')
})
```

Templit (like most rendering engines) requires a fairly specific file tree -- pictured below. The following commands will build out that tree for you. They should be executed from the top level directory of your project:

1. `mkdir views`
1. `mkdir views/templits`
1. `touch views/home.js`
1. `touch views/templits/index.js`


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
|      ├── index.js
|
```

### views and templits
There are two different kinds of files we're dealing with here: **Templits** and **Views**. `templits`, found in the `views/templits` directory, are the HTML shells _into which_ `views` are rendered. In other templating frameworks these are commonly called _"layouts"_.

Update `views/templits/index.js` with the following code:
```js
// views/templits/index.js

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

Now update `views/index.js` with the following code:
```js
// views/index.js

function render (data) {
  return `
    <h1>templit app</h1>
  `
}

module.exports = render
```

Woohoo! Your templit app is now ready to go. Run `node app.js` and visit `localhost:3000` in your browser.

## user guide
### understanding res.render()
res.render()

## acknowledgments

templit was inspired by an aversion to *{{{this}}}*.

## See Also

- [`noffle/common-readme`](https://github.com/noffle/common-readme)
- ...

## License

ISC
