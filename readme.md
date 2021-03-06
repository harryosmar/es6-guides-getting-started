# Getting Started - Guide

## 1. npm init

```
npm init
```

it will create [package.json](https://github.com/harryosmar/es6-guides-getting-started/blob/master/package.json) file.
This file used to configure :
- all package dependencies(dev and prod), version
- script command, we want to run : `npm run SCRIPT-COMMAND`

## 2. install webpack

link : https://webpack.js.org/guides/getting-started

```
npm install webpack --save-dev
npm install webpack-cli --save-dev
```

- new `devDependencies` added to [package.json](https://github.com/harryosmar/es6-guides-getting-started/blob/master/package.json) file.
```json
"devDependencies": {
    "webpack": "^4.31.0",
    "webpack-cli": "^3.3.2"
  }
```
- and [package-lock.json](https://github.com/harryosmar/es6-guides-getting-started/blob/master/package-lock.json) file created.
- folder [node_modules](https://github.com/harryosmar/es6-guides-getting-started/tree/master/node_modules) created, contained all package-dependencies.
- add folder [node_modules](https://github.com/harryosmar/es6-guides-getting-started/blob/master/node_modules) path to [.gitignore](https://github.com/harryosmar/es6-guides-getting-started/blob/master/.gitignore) file.


## 3. create the app dir structure

```
src/
	app.js
dist/
	index.html
	bundle.js
```

- [app.js](https://github.com/harryosmar/es6-guides-getting-started/blob/master/src/app.js), has dependency to `lodash` an external libraries.
	- run `npm install --save lodash`
- [bundle.js](https://github.com/harryosmar/es6-guides-getting-started/blob/master/dist/build.js) is autogenerated on the build process. [app.js](https://github.com/harryosmar/es6-guides-getting-started/blob/master/src/app.js) file will be transpiled the output will become this [bundle.js](https://github.com/harryosmar/es6-guides-getting-started/blob/master/dist/build.js).

## 4. Configure the webpack - add entrypoint and output

links :
- [webpack entry](https://webpack.js.org/concepts#entry)
- [webpack output](https://webpack.js.org/concepts#output)

Add [webpack.config.js](https://github.com/harryosmar/es6-guides-getting-started/blob/master/webpack.config.js) file.

- Set the `entrypoint` to [app.js](https://github.com/harryosmar/es6-guides-getting-started/blob/master/src/app.js).
- and the ouput to [bundle.js](https://github.com/harryosmar/es6-guides-getting-started/blob/master/dist/build.js)

```js
entry: './src/app.js',
output: {
	filename: 'bundle.js',
	path: path.resolve(__dirname, 'dist')
}
```

## 5. Configure the webpack - setting dev env

links :
- [webpack development env guide](https://webpack.js.org/guides/development/)
	- [webpack-dev-server](https://webpack.js.org/guides/development/#using-webpack-dev-server)
	- [dev-server configuration](https://webpack.js.org/configuration/dev-server)
- [devtool](https://webpack.js.org/configuration/devtool), to setup the source map

Install [webpack-dev-server](https://webpack.js.org/guides/development/#using-webpack-dev-server)

```
npm install --save-dev webpack-dev-server
```


Update [webpack.config.js](https://github.com/harryosmar/es6-guides-getting-started/blob/master/webpack.config.js) file, add [dev-server configuration](https://webpack.js.org/configuration/dev-server)

```js
devServer: {
	contentBase: path.join(__dirname, 'dist'),
	compress: true,
	port: 9000
},
devtool: 'inline-source-map'
```

This server can be accessed from [http://localhost:9000](http://localhost:9000)

## 6. Add babel

[babel](https://babeljs.io/) [ES2015 features](http://es6-features.org/#Constants) transpiler.

Installation

```
npm install --save-dev babel-loader @babel/core
```

Update [webpack.config.js](https://github.com/harryosmar/es6-guides-getting-started/blob/master/webpack.config.js) file, add [babel](https://babeljs.io/) module

```js
module: {
  rules: [
    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
  ]
}
```

Create [.babelrc](https://github.com/harryosmar/es6-guides-getting-started/blob/master/.babelrc) configuration file.

To start, you can use the env [preset](https://babeljs.io/docs/en/babel-preset-env), which enables transforms for ES2015+.

```
npm install @babel/preset-env --save-dev
```

Then add this configuration to [.babelrc](https://github.com/harryosmar/es6-guides-getting-started/blob/master/.babelrc)

```json
{
  "presets": ["@babel/preset-env"]
}
```

## 7. Add npm script

Update [package.json](https://github.com/harryosmar/es6-guides-getting-started/blob/master/package.json), add scripts :

```json
"build": "webpack --config webpack.config.js --mode=development",
"watch": "webpack --watch",
"start": "webpack-dev-server --open"
```

## 8. build then start

```
npm run build
```
will create `dist/bundle.js` file, add this file to [.gitignore](https://github.com/harryosmar/es6-guides-getting-started/blob/master/.gitignore)


```
npm run start
```
will open browser with this url [http://localhost:9000](http://localhost:9000)

> Every time you do the changes to [app.js](https://github.com/harryosmar/es6-guides-getting-started/blob/master/src/app.js) file, the build process will run then refresh the browser automatically.

