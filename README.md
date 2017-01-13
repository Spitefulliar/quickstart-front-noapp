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

## App ##
By default app is included into bundle and is located at dist/js/app.  
App uses config from /dist/js/helper_config: 
- It's prefix
- Modules postfix
- Directives postfix
- Controllers postfix
- Service postfix  
App includes all modules, located in dist/js/app/modules folder. Every module is required by name of the folder in combination with app prefix and module postfix.
Every name (module,service, etc) looks looks like this:
    [app-prefix][name][corresponding postfix]
Small default rouing provided in /httpdocs/dist/js/app/providers/routeProvider.js  
Angular material is excluded from app by default, but it is included in package.json

## SVG Sprite ##
SVG files are included in index.js
Source folder is /httpdocs/dist/img/sprite
For correct using you'll have to use combined shapes and remove all fills or strockes from source files. And replace them by css filling. If source colouring suits you well, you can leave it.





