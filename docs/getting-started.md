# Getting started

vbuild requires no configuration for your project, if you place your entry file at `./src/index.js`:

```bash
$ ~/my-project vbuild
```

This command will find `./src/index.js` and everything will be bundled into `./dist` directory.

If you put the entry elsewhere, you can change it to:

```bash
$ ~/my-project vbuild ./src/my-entry.js
```

There are many more options could be passed from command line, but we'd like to introduce `vue.config.json` for you, which would be more convenient than using cli options.

For example, if you don't want to type entry every time you bundle you project, you can have:

```js
// vue.config.json
{
  "entry": "./src/my-entry.js"
}
```

You may wonder why we're using `json` instead of `js` file, in fact both are ok, if you need the power of javascript, use `vue.config.js` file instead, otherwise, json looks more clean to my eye.

See next section for available options in configuratio file.