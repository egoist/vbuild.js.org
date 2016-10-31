# Entry

The default entry looks like:

```js
{
  client: './src/index.js',
  // and in hot reloading mode, it also adds:
  hmr: '/path/to/webpack-hot-middleware/client',
  // in production mode
  // there will also be vendor entry if vendor options is not false
  vendor: ['vue']
}
```

When you provide a custom entry in `string` type, it will update `entry.client`, it's very handy for single entry application, since all you need is the `client` entry.

But you can also add multi entry, just set the entry to an object:

```js
// vue.config.js
{
  entry: {
    client: './your/main/entry.js',
    other: './another/entry.js'
  }
}
```

Don't worry about `hmr` and `vendor` entry, we'll automatically add them for you.
