# Config

Config can be passed in from command-line or your configuration file, vbuild will automatically load `vue.config.json` or `vue.config.js` if they exist, alternatively you can use `--config` to specific a custom path to your config file.

<!-- toc -->

## Shared options

name|default|description
---|---|---
dev|`false`|Run in development mode
entry|`./src/index.js`|Entry point of your app
dist|`./dist`|Dist folder of bundled files
template|(built-in)|Path to the template for index.js
title|`vbuild app`|Title in the index.html (only available in build-in tmeplate)
cjs|`false`|Bundle in `CommonJS` format
umd|`false`|Bundle in `umd` format and set a moduleName
cssModules|`false`|Use css-modules to load css files
filename|`client`|Name of bundled files, without extension
notify|`true`|Notify when compilation is done
electron|`false`|Run in electron mode
alias|undefined|Add resolve alias
resolve|undefined|Resolve dependencies in ./src path or a custom path
target|webpack target|eg: node
vendor|['vue']|Split modules or files in a single vendor thunk, for better caching
config|`./vue.config.js(on)`|Path to config file, set to `false` to disable it

## Production options

Prudction mode indicates no `--dev` `--watch`

name|default|description
---|---|---
devtool|`source-map`|Devtool
compress|`true`|Compress bundled files
clean|`true`|Remove dist folder before bundling

## Development options

Development indicates one of `--dev` and `--watch`

name|default|description
---|---|---
devtool|`eval-source-map`|Devtool
live|`false`|Live reloading instead hot reloading (dev mode only)

## PostCSS options

name|default|description
---|---|---
postcss.autoprefixer|undefined|Autoprefixer options
postcss.use|['autoprefixer', 'postcss-nested']|PostCSS plugins
postcss.append|true|Append your plugins to built-in plugins

There are two ways of define postcss options:

```js
// vue.config.js
// this way is available in .json file too
module.exports = {
  postcss: {
    use: ['postcss-cssnext'],
    'postcss-cssnext': {}, // options for that plugin
    append: false
  }
}
// or use postcss api directly
// only available in .js file
module.exports = {
  postcss(webpack) {
    return [] // plugins
  }
}
```

## Babel options

name|default|description
---|---|---
babel|See below|Babel options

```js
{
  "presets: [["es2015", {"modules": false}], "stage-2"],
  "plugins": ["transform-runtime", "transform-vue-jsx"]
}
```

If you wanna override this you need to `require.resolve` in your config file:

```js
module.exports = {
  babel: {
    presets: [
      [require.resolve('babel-preset-es2015'), {modules: false}],
      require.resolve('babel-preset-stage-0')
    ]
  }
}
```

## Merge Webpack config

For advanced usage, you can merge your webpack config into the default one vbuild uses, simply use `--merge-config ./my.webpack.config.js` option.

You can also use an object as its value:

```js
module.exports = {
  mergeConfig: {
    // following options will be merged
    module: {loaders: [/*...*/]},
    plugins: [myPlugin()]
  }
}

// or an array for merging multiple webpack config
module.exports = {
  mergeConfig: [
    a, b, c //...
  ]
}
```
