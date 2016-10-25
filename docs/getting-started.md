# Getting started

<!-- toc -->

## Create a new project

```bash
vbuild init my-project
```

This command will create a new folder called `my-project` inside current folder. Inside that directory, it will generate the initial project structure and you can run `npm install` to install app dependencies like `vue`:

```bash
.
├── node_modules
├── package.json
├── src
└── vue.config.js
```

No configuration and build tools like webpack and babel need to be installed in your project.

## `npm run dev`

This command is a shorthand for `vbuild --dev`, basically it runs your app in a dev server with hot reloading support, after running this command you will be automatically navigated to http://localhost:4000

## `npm run build`

This command is a shorthand for `vbuild`, it builds the app into `./dist` folder. (will remove `./dist` before building)

It correctly bundles Vue.js in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes, and even `vue` is spilted into the `vendor` thunk for better caching.

Your app is ready to be deployed!

## Modes

There's are 3 modes in vbuild, and 2 of them you will use often:

- production mode - `vbuild`: build for production use
- dev mode - `vbuild --dev`: run a dev server with hot reloading support, optionally you can switch to `live` reloading

The other one is:

- watch mode - `vbuild --watch` like production mode but output files are not minified and it will rebuild due to file changes

## Customize

However the defaults are good enough for most people, you may still have desired build setup, like updating html title and custom postcss plugins. Luckily, you can achieve this easily with [a few configurations](/config.html).
