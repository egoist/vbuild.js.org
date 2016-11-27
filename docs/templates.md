# Templates

By default, we add a html-template-plugin for you to generate HTML output for all chunks:

```js
// the default plugin for generating html output
new HtmlWebpackPlugin({
  title: options.title || 'vbuild app',
  template: options.template ? _.cwd(options.template) : _.dir('lib/template.html'),
  inject: false,
  minify: {
    removeComments: true,
    collapseWhitespace: true,
    removeAttributeQuotes: true,
    minifyJS: true,
    minifyCSS: true
  },
  ga: options.ga || options.analytics || options.googleAnalytics
})
```

And you can use `title` `template` options to adjust it.

- `title`: The content of `<title>` in html output
- `template`: THe path to your custom HTML template

Check out the default [template.html](https://github.com/egoist/vbuild/blob/master/lib/template.html) we use, it supports the [ejs](http://ejs.co/) syntax and the [html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin) options.

The `template` could also be an object which represents the html-webpack-plugin options.

You may also want to generate other HTML files to exclude or include some chunks, then you can use `templates` option, it's simply an array of options for html-webpack-plugin, we use it to insert multiple html-webpack-plugin into the webpack config's plugins property, and sure it inherits from the default html-webpack-plugin option we mentioned above:

```js
// vue.config.js
export default {
  title: 'default title',
  templates: [
    {
      // this inherits default title
      chunks: ['some chunk names']
    },
    {
      // the html output has different title
      title: 'app',
      chunks: ['client', 'vendor']
    }
  ]
}
```

## Google Analytics

[Checkout the recipe about this.](/ga.md)
