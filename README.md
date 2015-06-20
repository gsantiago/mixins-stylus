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

### placeholder

Nib has a mixin for placeholder. But it doesn't work fine. I've created a better mixin to do the job.

You can pass a `color` as an argument, or just pass a block.

Example:

```stylus
.my-element
  placeholder(#666)

.input
  +placeholder()
    font-family Roboto, sans-serif
    font-weight bold
    color #000
```

### triangle

Simple mixin for generating triangles. Based on [Stylus Triangle mixin](https://github.com/juice49/stylus-triangle).

`triangle($width, $height, $direction, $color)`

Example:

```stylus
.my-blue-triangle
  triangle(50px, 50px, top, blue)
```

It supports all directions from [CSS Triangle Generator](http://apps.eky.hk/css-triangle-generator/):

`top` `top-right` `right` `bottom-right` `bottom` `bottom-left` `left` `top-left`


### absolute-center

Centers an element using absolute positioning. All you need to pass is the element's dimensions, and optionally its direction, `horizontal` or `vertical`. The default is `both`.

`absolute-center($width, $height: $width, $direction: both)`

Example:

```stylus
// Both directions
.box
  absolute-center(120px, 30px)

// Only vertical
.logo
  absolute-center(50px, 30px, vertical)
```

### after

Utility to generate the pseudo-element `after`.

`after($content = " ")`

Example:

```stylus
.element
  after('Content value')

.box
  +after('value for content property')
    position absolute
    top 0
    left 0

// Uses the default value for content property
.another-element
  +after()
    margin 10px auto
    background-color hotpink
```

### before

It works just like the previous mixin, but for the pseudo-element `before`.

`before($content = " ")`

### pseudo

A shortcut to use both pseudo-elements mixins, `after` and `before`.

`pseudo($content = " ")`
