# Pre-processors

It's exactly the same way as that in regular Vue project, check out the [vue-loader](http://vue-loader.vuejs.org/en/configurations/pre-processors.html) doc for this, for example:

A Sass project:

```bash
npm install sass-loader node-sass -D
```

```html
<style lang="sass">
  $color: red;
  body {color: $color;}
</style>
```

And you're all set!

## Autoprefix

No matter what CSS pre-processors you're using, the compiled css (in single file component) will be passed to `postcss-loader.`

So simply set `autoprefixer` option in `postcss` property:

```js
// vue.config.js
export default {
  postcss: {
    autoprefixer: {
      browsers: ['ie > 9', 'chrome > 42']
    }
  }
}
```
