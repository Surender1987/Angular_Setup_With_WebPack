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
