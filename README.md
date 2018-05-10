# Angular_Setup_With_WebPack
#https://medium.com/developing-an-angular-4-web-app/setting-up-our-angular-4-project-from-scratch-bdbc616f92f2

This is about how to setup an angular application with web pack on windows. There are following steps to setup an angular application

1) Open CMD and move to folder where you want to keep updated code with help of CD command
2) Initialize the folder with package.json file using following command

    npm init
    
    Answer few questions prompted by this command

3) Install minimum required packages for starting with angular aaplication with command as

    npm install --save @angular/core @angular/common @angular/compiler @angular/platform-browser @angular/platform-browser-dynamic
    
    npm install --save rxjs zone.js core-js
    
4) Install typescript, tslint and other typescript related packages with command

    npm install --save-dev typescript tslint @types/node
    
5) Install Webpack, Webpack-dev-server and web pack loaders and plugins like html-webpack-plugin extract-text-webpack-plugin raw-loader
   css-loader style-loader sass-loader node-sass url-loader file-loader awesome-typescript-loader angular2-template-loader   

    npm install --save-dev webpack webpack-dev-server html-webpack-plugin extract-text-webpack-plugin raw-loader css-loader style-loader
    sass-loader node-sass url-loader file-loader awesome-typescript-loader angular2-template-loader
    
6) Create tsconfig file for our project using below command

    tsc --init
    
 7) The above command would create tsconfog.json file under the project’s root folder.open the project folder and upadte tsconfig.jsom as
 
     {
          "compileOnSave": false,
          "compilerOptions": {
              "module": "commonjs",
              "target": "es5",
              "noImplicitAny": false,
              "sourceMap": true,
              "baseUrl": "src",
              "outDir": "./dist",
              "declaration": false,
              "emitDecoratorMetadata": true,
              "experimentalDecorators": true,
              "typeRoots": [
                  "node_modules/@types"
              ],
              "lib": [
                  "es2016",
                  "dom"
              ],
              "types": [
                  "node"
              ]
          },
          "awesomeTypeScriptLoaderOptions": {
              "useWebpackText": true
          }
      }

8) Create app.component.ts as 

        import { Component } from '@angular/core';

        @Component({
            selector: 'app-component',
            template: `
                <h1>This is first component in angular application with web pack</h1>
                <h2>{{name}}</h2>
            `
        })
        export class AppComponent {
            public name: string = 'Surender'
        }
        
9) Create app.module.ts with code as given below

        import { BrowserModule } from '@angular/platform-browser';
        import { NgModule } from '@angular/core';
        import { AppComponent } from './app.component';

        @NgModule({
            declarations:[AppComponent],
            imports:[BrowserModule],
            bootstrap:[AppComponent]
        })
        export class AppModule {

        }

10) Create polyfills.js file, you can copy the below code 


        /**
         * This file includes polyfills needed by Angular and is loaded before the app.
         * You can add your own extra polyfills to this file.
         *
         * This file is divided into 2 sections:
         *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
         *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
         *      file.
         *
         * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
         * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
         * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
         *
         * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
         */

        /***************************************************************************************************
         * BROWSER POLYFILLS
         */

        /** IE9, IE10 and IE11 requires all of the following polyfills. **/
        // import 'core-js/es6/symbol';
        // import 'core-js/es6/object';
        // import 'core-js/es6/function';
        // import 'core-js/es6/parse-int';
        // import 'core-js/es6/parse-float';
        // import 'core-js/es6/number';
        // import 'core-js/es6/math';
        // import 'core-js/es6/string';
        // import 'core-js/es6/date';
        // import 'core-js/es6/array';
        // import 'core-js/es6/regexp';
        // import 'core-js/es6/map';
        // import 'core-js/es6/set';
        /** IE10 and IE11 requires the following for NgClass support on SVG elements */
        // import 'classlist.js';  // Run `npm install --save classlist.js`.
        /** IE10 and IE11 requires the following to support `@angular/animation`. */
        // import 'web-animations-js';  // Run `npm install --save web-animations-js`.

        /** Evergreen browsers require these. **/
        import 'core-js/es6/reflect';
        import 'core-js/es7/reflect';


        /** ALL Firefox browsers require the following to support `@angular/animation`. **/
        // import 'web-animations-js';  // Run `npm install --save web-animations-js`.


        /***************************************************************************************************
         * Zone JS is required by Angular itself.
         */
        import 'zone.js/dist/zone';  // Included with Angular CLI.


        /***************************************************************************************************
         * APPLICATION IMPORTS
         */

        /**
         * Date, currency, decimal and percent pipes.
         * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
         */
        // import 'intl';  // Run `npm install --save intl`.
        /**
         * Need to import at least one locale-data with intl.
         */
        // import 'intl/locale-data/jsonp/en';
        view rawpolyfills.ts hosted with ❤ by GitHub

11) Create main.ts file with code given below

        import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
        import '.polyfills';
        import { AppModule } from './app.module';

        platformBrowserDynamic().bootstrapModule(AppModule);
        
12) Create index.html in selected folder

        <!doctype html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>Momentz4ever</title>
          <base href="/">

          <meta name="viewport" content="width=device-width, initial-scale=1">
          <link rel="icon" type="image/x-icon" href="favicon.ico">
        </head>
        <body>
          <app-component>Loading...</app-component>
        </body>
        </html>
        
        
13) Create webpack.config.js file with following code 

        const path = require('path');
        const HtmlWebpackPlugin = require('html-webpack-plugin');
        const { ContextReplacementPlugin } = require('webpack');

        module.exports = {
            entry: {
                main: 'main.ts'
            },
            output: {
                path: path.join(__dirname, "./dist/"),
                filename: "[name].bundle.js",
            },
            resolve: {
                extensions: ['.js', '.ts', '.html']
            },
            devServer: {
                contentBase: path.join(__dirname, "./dist/"),
                port: 9000
            },
            devtool: 'inline-source-map',
            module: {
                loaders: [
                    { test: /.ts$/, use: ['awesome-typescript-loader', 'angular2-template-loader'] },
                    { test: /.html$/, use: 'raw-loader' }
                ]
            },
            plugins: [
                new HtmlWebpackPlugin({
                    template: "./index.html",
                    filename: "index.html",
                    showErrors: true,
                    title: "Webpack App",
                    path: path.join(__dirname, "./dist/"),
                    hash: true
                }),
                new ContextReplacementPlugin(
                    /angular(\\|\/)core(\\|\/)@angular/,
                    path.resolve(__dirname, './')
                )
            ]

        }
        
        
14) In package.json, add build command to run webpack-dev-server as

        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1",
            "build": "webpack-dev-server --config webpack/webpack.config.js"
          },
          
15) Now run build command defined in above step as

        npm run build 
        
    it will run webpack-dev-server and run application in your default browser
          
