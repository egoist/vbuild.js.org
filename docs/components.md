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
  // do not add a vendor thunk
  "vendor": false,
  // all dependencies will be included in bundled file
  // to exclude them:
  "externals": ["object-assign"],
  // no source-map, please
  "devtool": false
}
```