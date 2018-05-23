# Tabata Timer
https://github.com/jjhampton/tabata-timer

Exercise is work. It’s one thing to put aside time to do it, it’s another to put aside time to plan ahead.

This mobile app tells you exactly what to do and how long, so you don’t have to think about what you’re doing next while you are deprived of oxygen. 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

## Local Development

### Pre-install Dependencies
You will need the following tools properly installed on your computer:
* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/)
* [NPM](https://npmjs.org/)

### Installation:
* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`

### Development Web Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Cordova Android App

Prerequisites:
* Cordova
* Android SDK 
* Android Virtual Device (AVD) configured on your machine
* Java
* Gradle
* See detailed installation instructions at Cordova site: https://cordova.apache.org/docs/en/latest/guide/cli/index.html

Run:
1. `cordova create mobile`
1. `ng build --prod --base-href . --output-path mobile/www`
1. `cd mobile`
1. `cordova platform add android`
1. `cordova run android`

The app should load in your configured AVD emulator.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
