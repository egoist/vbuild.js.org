# Addons

Addons are some features you may need for larger projects, like `eslint` `test` and `gzip` et al.

<!-- toc -->

## ESLint

You can use option `eslint` to run eslint during compilation, it defaults to use [eslint-config-rem](https://github.com/egoist/eslint-config-rem) which based on [eslint-config-xo](https://github.com/sindresorhus/eslint-config-xo) but customized for Vue apps.

Most likely you only need eslint while building for production, since it might kill the process in development mode.

```js
{
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

## Gzip

Prepare compressed versions of assets to serve them with Content-Encoding. See [Usage](https://github.com/webpack/compression-webpack-plugin#usage).

```js
module.exports = {
  production: {
    gzip: true,
    // or with options
    // gzip: {}
  }
}
```

## Test

Coming feature...

