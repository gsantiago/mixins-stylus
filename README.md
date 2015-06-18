# Mixins for Stylus

[![Build Status](https://travis-ci.org/gsantiago/mixins-stylus.svg)](https://travis-ci.org/gsantiago/mixins-stylus)
[![npm version](https://badge.fury.io/js/mixins-stylus.svg)](http://badge.fury.io/js/mixins-stylus)

A simple collection of mixins for Stylus that I use in my work.

It's made to use with Jeet and Nib which means that I avoid to include mixins that Jeet or Nib already have.

## Installation

You can just copy the `index.styl` file and import directly.

But if you already use NPM and tools like Grunt or Gulp, then it's better install it using NPM itself.

`npm install mixins-stylus --save-dev`

```stylus
@import 'mixins-stylus'
```

## Tests

Be sure to have all dev dependencies installed:

`npm install`

You also need Mocha installed globally:

`npm install mocha -g`

Then just run:

`npm test`

## Mixins

### image-url and font-url

Define the `$IMAGE-PATH` and `$FONT-PATH` to use these mixins.

Example:

```stylus
// Define the paths
$IMG-PATH = '../img/'
$FONT-PATH = '../fonts/'

// Now you can use the function image-url
.element
  background-image image-url('logo.png')

// And the font-url
@font-face
  font-family 'MyCustomFont'
  src: font-url('my-font.ttf')
```

OBS: The function `font-url` is also used by the `font-face` mixin. See below.

### font-face

`Arguments: $name, $src, $weight = false, $style = false`

Nib doesn't have a mixin for @font-face, so I included my own mixin to do such work.

It uses the `font-url` function to define the font's path.

Example:

```stylus

// Define where the fonts are placed in
$FONT-PATH = 'assets/fonts/'

// Now, just import the fonts without worry about the path
font-face('MyCustomFont', 'mycustomfontfilename')
```
