# Webpack 5 Getting Started

## Dependencies

[webpack](https://www.npmjs.com/package/webpack), [webpack-cli](https://www.npmjs.com/package/webpack-cli)

```bash
npm i -D webpack webpack-cli
```

Create `webpack.config.js` file under root directory ([Configuration](https://webpack.js.org/configuration/))

```js
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    app: path.resolve(__dirname, "src/app.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.js",
  },
};
```

Add `build` script into package.json (default config)

```diff
- "main": "index.js",
"scripts": {
-    "test": "echo \"Error: no test specified\" && exit 1",
+    "build": "webpack"
}
```

`npm run build`

Output file name options

```diff
const path = require('path')

module.exports = {
    ...
    output: {
      ...
-			filename: 'app.js',
+			filename: '[name].[contenthash].js',
		}
}
```

Clear previous builds

```diff
const path = require('path')

module.exports = {
    ...
    output: {
      ...
+			clean: true,
		}
}
```

## Plugins

```diff
const path = require('path')

module.exports = {
    ...
+   plugins: []
}
```

[html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin)

```bash
npm i -D html-webpack-plugin
```

## Loaders

```diff
const path = require('path')

module.exports = {
    ...
+   module: {
+     rules: []
+   }
}
```

[style-loader](https://www.npmjs.com/package/style-loader), [css-loader](https://www.npmjs.com/package/css-loader)

```bash
npm i -D style-loader css-loader
```

## Devtool

```bash
devtool: 'inline-source-map',
```

[webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server)

```bash
npm i -D webpack-dev-server
```

```diff
const path = require('path')

module.exports = {
    ...
+    devServer: {
+     contentBase: path.resolve(__dirname, 'dist'),
+			open: true,
+			hot: true,
+     watchContentBase: true,
		}
}
```

Add `dev` script

```diff
"scripts": {
     ...
+    "dev": "webpack serve"
}
```
