# Entry

The default entry looks like:

```js
{
  client: ['./src/index.js'],
  // in hot reloading mode, the client entry is:
  // client: ['./src/index.js', '/path/to/webpack-hot-middleware/client'],
  // in production mode
  // you can also use `vendor` option to bundle common dependencies in a single chunk called `vendor` other than `client` chunk
  vendor: undefined
  // eg: set vendor: ['vue', 'vue-router', 'vuex'] in config file
}
```

When you provide a custom entry in `string` type, it will update `entry.client`, it's very handy for single entry application, since all you need is the `client` entry.

But you can also add multiple entries, just set the entry to an object:

```js
// vue.config.js
export default {
  entry: {
    client: './your/main/entry.js',
    other: './another/entry.js'
  }
}
```

Don't worry about `vendor` entry, we'll automatically add it for you.

Also, by default, only the `client` entry will enable hot-reloading, you can use the `hot` option to select the entries which need hot-reloading.

```js
// vue.config.js
export default {
  hot: ['client', 'another-chunk']
}
```


