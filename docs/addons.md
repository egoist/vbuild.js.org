# Addons

Addons are some features you may need for larger projects, like `eslint` `test` and `gzip` et al.

<!-- toc -->

## ESLint

You can use option `eslint` to run eslint during compilation, it defaults to use [eslint-config-vue](https://github.com/vuejs/eslint-config-vue).

Most likely you only need eslint while building for production, since it might kill the process in development mode.

```js
export default {
  // add as `production` speicifed options
  // or you can use different config files for different builds
  production: {
    // simply use default config
    // eslint: true
    // __or__
    eslint: {
      // use a desired config
      configFile: require.resolve('eslint-config-airbnb')
    }
  }
}
```

You can pass all [eslint options](http://eslint.org/docs/developer-guide/nodejs-api#cliengine) here.

## Gzip

Prepare compressed versions of assets to serve them with Content-Encoding. See [Usage](https://github.com/webpack/compression-webpack-plugin#usage).

```js
export default {
  production: {
    gzip: true,
    // or with options
    // gzip: {}
  }
}
```

## Test

Coming feature...

