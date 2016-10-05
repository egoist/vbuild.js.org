<template>
  <section class="main">
    <div class="container">
      <h2 class="page-title">Guide</h2>

      <div class="block">
        <h3>Install</h3>
        <code-block># recommend node.js 6+ and npm 3+
$ npm install -g vbuild
</code-block>
      </div>

      <div class="block">
        <h3>Options</h3>
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>default</th>
              <th>description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>entry</td>
              <td>'./src/index.js'</td>
              <td>Path to app entry.</td>
            </tr>
            <tr>
              <td>dist</td>
              <td>'./dist'</td>
              <td>Path to dist directory.</td>
            </tr>
            <tr>
              <td>dev</td>
              <td>false</td>
              <td>Run in development mode, hot reloading by default</td>
            </tr>
            <tr>
              <td>live</td>
              <td>false</td>
              <td>Enable live reloading in dev mode.</td>
            </tr>
            <tr>
              <td>port</td>
              <td>4000</td>
              <td>Dev server port.</td>
            </tr>
            <tr>
              <td>title</td>
              <td>'vbuild app'</td>
              <td>The title in bundled index.html</td>
            </tr>
            <tr>
              <td>template</td>
              <td>(built-in)</td>
              <td>Path to template file for index.html</td>
            </tr>
            <tr>
              <td>cssModules</td>
              <td>false</td>
              <td>Use css-modules for .css files</td>
            </tr>
            <tr>
              <td>cjs</td>
              <td>false</td>
              <td>Bundle in commonjs format</td>
            </tr>
            <tr>
              <td>umd</td>
              <td>false</td>
              <td>Bundle in umd format</td>
            </tr>
            <tr>
              <td>compress</td>
              <td>true</td>
              <td>Compress in production mode</td>
            </tr>
            <tr>
              <td>gzip</td>
              <td>false</td>
              <td>Gzip in production mode</td>
            </tr>
            <tr>
              <td>filename</td>
              <td>'client'</td>
              <td>Filename of bundled file</td>
            </tr>
            <tr>
              <td>notify</td>
              <td>true</td>
              <td>Desktop notifier when compiling goes valid or invalid</td>
            </tr>
            <tr>
              <td>electron</td>
              <td>false</td>
              <td>Run in Electron mode</td>
            </tr>
            <tr>
              <td>lint</td>
              <td>false</td>
              <td>Run ESLint while building the project</td>
            </tr>
            <tr>
              <td>devtool</td>
              <td>eval-source-map(dev)<br>source-map(prod)</td>
              <td>Source mapping, use `false` to disable</td>
            </tr>
            <tr>
              <td>development</td>
              <td>undefined</td>
              <td>Specific options only for development mode</td>
            </tr>
            <tr>
              <td>production</td>
              <td>undefined</td>
              <td>Specific options only for production mode</td>
            </tr>
            <tr>
              <td>config</td>
              <td>'./vue.config.(js|json)'</td>
              <td>Path to config file, set to false to disable it</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="block">
        <h3>Vendor thunk</h3>
        <p>
          By default in production mode vbuild will only split `vue` into a standalone vendor thunk, for better caching. You can modify it though:
        </p>
        <code-block>{
  "vendor": ["vue", "vue-router"]
  // set to false to disable it
}</code-block>
      </div>

      <div class="block">
        <h3>Gzip output</h3>
        <p>Prepare compressed versions of assets to serve them with Content-Encoding,  a typical vue+vue-router+vuex app will be only about 30kb large after being gzipped. Off by default.</p>
        <code-block>{
  "gzip": true,
  // or use options:
  // "gzip": {}
  // https://github.com/webpack/compression-webpack-plugin
}</code-block>
      </div>

      <div class="block">
        <h3>Externals</h3>
        <p>
          Exclude packages or files from being bundled in your app.
        </p>
        <code-block>{
  "externals": ["./exclude/this.js", "mysql"]  
}</code-block>
      </div>

    </div>
  </section>
</template>

<script>
  import CodeBlock from 'components/CodeBlock'

  export default {
    created() {
      document.title = 'Guide'
    },
    mounted() {
      window.scrollTo(0, 0)
    },
    components: {
      CodeBlock
    }
  }
</script>