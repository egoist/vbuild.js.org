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
    removeAttributeQuotes: true
  }
})
```

And you can use `title` `template` options to adjust it.

Check out the default [template.html](https://github.com/egoist/vbuild/blob/master/lib/template.html) we use, it supports the [ejs](http://ejs.co/) syntax and the [html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin) options.

However, you may also want to generate other HTML files to exclude or include some chunks, then you can use `templates` option, it's simply an array of options for html-webpack-plugin, we use it to insert multiple html-webpack-plugin into the webpack config's plugins property.

```js
// vue.config.js
export default {
  templates: [
    {
      title: 'child homepage'
      chunks: ['some chunk names']
    },
    {
      title: 'app',
      chunks: ['client', 'vendor']
    }
  ]
}
```

`title` `template` options do not work if you are using `templates` option.
