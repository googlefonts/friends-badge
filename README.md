# Friends of Google Fonts badge

The “Made by Friends of Google Fonts” badge is intended only for placement on sites hosted on googlefonts.github.io/something

The badge was designed by Yuin Chien (@yuinchien) and developed by Kenneth Ormandy (@kennethormandy)

## Getting started

A compiled version of the badge in script form is available in `/dist/googlefontsbadge.js`.
To add it to your project, add something like this script tag to your project:

```html
<script src="https://googlefonts.github.io/project/googlefontsbadge.js" async defer onload="gfBadge()"></script>
```

This will asynchronously load the badge and initialise it once it’s ready.

Alternatively, if you are using a build tool like Browserify, Webpack, etc. you can install the badge as a dependency and initialise it yourself. First, you’ll want to install it as a dependency using npm:

```sh
npm install --save https://github.com/googlefonts/friends-badge
```

Then, require it in your project:

```js
var gfBadge = require('@googlefonts/badge')

// Initialise the badge when you are ready
gfBadge()
```

## Contributing

To run the project locally, run the following commands in your terminal:

```
git clone https://github.com/googlefonts/badge googlefonts-badge
cd googlefonts-badge
npm install
```

Now you can build the distributed version of the file by running:

```
npm run build
```

…which uses Browserify to build a stand-alone minified version of the file.
