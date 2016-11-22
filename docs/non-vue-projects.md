# Non-Vue Projects

`vbuild` can be gracefully used to prototype a non-Vue project, simply disable `vendor` option:

```bash
vbuild --no-vendor
```

or in config file:

```js
module.exports = {
  vendor: false
}
```

Thus there won't be a `vendor` chunk which bundles `vue` into dist folder.

## React Projects

If you're using React JSX syntax, you would like to update babel plugins for this, see [babel options](/config.html#babel-options).

If you want to enable hot reloading for React components, check out the [merge webpack config](/config.html#merge-webpack-config) part.