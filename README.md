# Webpack bundled Angular based app #

## Package manager ##
Yarn (or npm, but less preferable)
For node modules installation run 
    Yarn

## Building ##
For building run
    webpack
Webpack.config is tuned for develop mode - faster builds withought source maps or auto

## Entries ##

### Vendor ###
Contains all vendor libs, accept those, needed for angular app

### Bundle ###
Contains:
- styles, located at dist/css/;
- scripts, included in index.js (aka app, sprite generator). Located at dist/js/;

### Template engine ###
Twig. Layouts located  at /local/templates/.default/layouts/

## SVG Sprite ##
SVG files are included in index.js
Source folder is /httpdocs/dist/img/sprite
For correct using you'll have to use combined shapes and remove all fills or strockes from source files. And replace them by css filling. If source colouring suits you well, you can leave it.





