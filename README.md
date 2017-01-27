# Friends of Google Fonts badge

The “Made by Friends of Google Fonts” badge.

<!--
- Designed by Yuin Chien
- Developed by Kenneth Ormandy
- 10/14kb is the SVG, which is not great but is better than an extra HTTP request
-->

## Getting started

A hosted version of this script is available. To add it to your project, add this script tag to your project:

```html
<script src="https://rawgit.com/googlefonts/friends-badge/master/dist/googlefontsbadge.js" async defer onload="gfBadge()"></script>
```

This will asynchronously load the badge and initialise it once it’s ready.

### Browserify & Webpack

Alternatively, if you are using a build tool like Browserify, Webpack, etc. you can install the badge as a dependency and initialise it yourself. First, you’ll want to install it as a dependency using npm:

```sh
npm install --save https://github.com/googlefonts/friends-badge
```

<!--

```sh
npm install --save @googlefonts/badge
```

-->

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
