# Components

Bundle components should be easy, and it is. Here we don't need js, so just using json-format file is ok.

```js
{
  // umd format
  "umd": "moduleName",
  // cjs format
  // "cjs": true,
  // name of bundled file
  "filename": "my-module",
  // do compress, you can turn it off though
  "compress": true,
  // all dependencies will be included in bundled file
  // to exclude them:
  "externals": ["object-assign"],
  // no source-map, please
  "devtool": false
}
```

**Note**: in `umd` and `cjs` format, the vendor thunk is always removed, since you are bundling a library, not an app.
