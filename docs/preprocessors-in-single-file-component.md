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
