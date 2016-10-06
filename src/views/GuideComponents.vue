<template>
  <section class="main">
    <div class="container">
      <h2 class="page-title">Components</h2>

      <div class="block">
        <p>How to bundle my Vue components in UMD or CommonJS format?</p>

        <p>Well, it's not hard at all !!</p>
      </div>

      <div class="block">
        <h3>Example: build a tab component</h3>
        <code-block>{
  // available as window.Tab
  "umd": "Tab",
  "dist": "dist/compressed"
}</code-block>
        <p>
          This way, you will get:
        </p>
        <code-block>          Asset       Size  Chunks             Chunk Names
      vendor.js    49.2 kB    0, 2  [emitted]  vendor
      client.js  374 bytes    1, 2  [emitted]  client
    manifest.js    1.41 kB       2  [emitted]  manifest
     client.css   38 bytes    1, 2  [emitted]  client
  vendor.js.map     378 kB    0, 2  [emitted]  vendor
  client.js.map    2.16 kB    1, 2  [emitted]  client
 client.css.map   87 bytes    1, 2  [emitted]  client
manifest.js.map    13.4 kB       2  [emitted]  manifest</code-block>
      </div>

      <div class="block">
        <h3>Problems</h3>
        <p>
          Damn, hey, I don't want to split vendor thunk since it's a component (do I event have that?) And so for manifest.js. Besides, client.js? I want a cooler name for my component!
        </p>

        <p>So here you go:</p>

        <code-block>{
  "umd": "Tab",
  "vendor": false,
  "filename": "tab"
}</code-block>

        <p>Wow, you finally get there:</p>
        <code-block>      Asset       Size  Chunks             Chunk Names
     tab.js  830 bytes       0  [emitted]  tab
    tab.css   35 bytes       0  [emitted]  tab
 tab.js.map    7.67 kB       0  [emitted]  tab
tab.css.map   84 bytes       0  [emitted]  tab</code-block>
      </div>

      <div class="block">
        <h3>Uncompressed version</h3>
        <p>
          You always want both compressed and uncompressed version for your component, this way you need two build scripts. The first one could be the same as the example above, which is the compressed version.
        </p>
        <p>
          For the uncompressed version you can set `compress` to `false` and disable devtool, it will be bundled into `dist` directory by default, eg:
        </p>
        <code-block>{
  "filename": "tab",
  "umd": "Tab",
  "vendor": false,
  "compress": false,
  // disable source-map
  "devtool": false
}</code-block>

      <div class="block">

        <h3>The commands:</h3>

        <code-block># uncompressed version
vbuild --config vue.config.uncompressed.json
# compressed version
vbuild --config vue.config.compressed.json</code-block>
      </div>

        <div class="warning">warning</div>
        <p>
          If you have these two scripts, which bundle compressed version into `./dist/compressed` and uncompressed version into `./dist`, remember to bundle uncompressed version before compressed version, since the former will delete `./dist` directory before bundling.
        </p>

        <a href="https://github.com/egoist/vue-windows">Real World Example: vue-windows</a>

      </div>

    </div>

  </section>
</template>

<script>
  import CodeBlock from 'components/CodeBlock'

  export default {
    created() {
      document.title = 'Components'
    },
    mounted() {
      window.scrollTo(0, 0)
    },
    components: {
      CodeBlock
    }
  }
</script>
