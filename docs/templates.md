# Templates

By default, we add a html-template-plugin for you to generate HTML output for all chunks:

```js
new HtmlWebpackPlugin({
  filename: _.cwd(`${options.dist}/index.html`),
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

However, you may also want to generate other HTML files to exclude or include some chunks, this way you can use `templates` option, it's simply an array of options for html-webpack-plugin, we use it to insert multiple html-webpack-plugin into the webpack config.

```js
// vue.config.js
{
  templates: [
    {
      title: 'child homepage'
      chunks: ['some chunk names']
    },
    {
      title: 'app',
      chunks: ['client', vendor]
    }
  ]
}
```

`title` `template` options do not work in `templates` option.
