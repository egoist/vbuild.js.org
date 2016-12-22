# Split vendor and app code

By providing `vendor` option, you can use it to split vendor and app code.

```js
export default {
  vendor: ['vue', 'vuex', 'vue-router']
}
```

Or if it's considered safe, you can:

```js
export default {
  vendor: Object.keys(require('./package.json').dependencies)
}
```
