# Webpack 2 bundled project #

## Package manager ##
Yarn (or npm, but less preferable)
For node modules installation run
    Yarn

##  Scripts:

+   `npm run init`: pull master, install composer modules , install yarn packages, build in production mode
+   `npm run build`: build in develop mode
+   `npm run buildprod`: build in production mode
+   `npm run watch`: buid with watcher on
+   `npm run pull`: pull from master, install yarn packages, build in production mode

## Entries ##

### Vendor ###
Contains all vendor libs, accept those, needed for angular app

### Bundle ###
Contains:
- styles, located at [root directory]/css/;
- scripts, included in index.js (aka app, sprite generator). Located at [root directory]/js/;

### Template engine ###
Twig. Layouts located  at [root directory]/.default/layouts/
To view certain layout get parametr `?layout=[your_layout]`

## SVG Sprite ##
SVG files are included in index.js
Source folder is [root directory]/img/sprite
For correct using you'll have to use combined shapes and remove all fills or strockes from source files. And replace them by css filling. If source colouring suits you well, you can leave it.





