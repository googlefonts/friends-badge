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
yarn add https://github.com/googlefonts/friends-badge
```

<!--

```sh
npm install --save @googlefonts/badge
```

-->

Then, require it in your project:

```js
import gfBadge from '@googlefonts/badge'

const element = document.getElementById("column")

// Initialise the badge when you are ready
gfBadge(element)
```

This registers an event listener on the specified DOM element, multiple instances are also supported.
If no element is specified the scroll listener is set on `document`

## Contributing

To run the project locally, run the following commands in your terminal:

```
git clone https://github.com/googlefonts/friends-badge
cd friends-badge
yarn
```

Start the development server:

```
yarn start
```

To build for production:

```
yarn run build
```

…which uses Webpack to build a stand-alone minified version of the file.
