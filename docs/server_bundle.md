# Server bundle

You are recommended to use [bundleRenderer](https://www.npmjs.com/package/vue-server-renderer#why-use-bundlerenderer) to bundle app for server-side use, in brief, you need to:

- Set webpack target to `node`, format to `cjs`
- Exclude dependencies from the bundle file

```js
export default {
  target: 'node',
  cjs: true,
  externals: Object.keys(require('./package.json').dependencies)
}
```

And don't forget to update your server entry:

```js
// server-entry.js 
import Vue from 'vue'
import App from './App.vue'
 
const app = new Vue(App)
 
// the default export should be a function 
// which will receive the context of the render call 
export default context => {
  // data pre-fetching 
  return app.fetchServerData(context.url).then(() => {
    return app
  })
}
```

For complete usage for vue server-side rendering, please refer to the [docs](https://www.npmjs.com/package/vue-server-renderer).
