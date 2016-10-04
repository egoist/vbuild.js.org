<template>
  <section class="main">
    <div class="container">
      <h2 class="page-title">Full Options</h2>

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
            <td>./src/index.js</td>
            <td>Path to app entry.</td>
          </tr>
          <tr>
            <td>dist</td>
            <td>./dist</td>
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
            <td>vbuild app</td>
            <td>The title in bundled index.html</td>
          </tr>
          <tr>
            <td>template</td>
            <td>(built-in)</td>
            <td>Path to template file for index.html</td>
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
            <td>./vue.config.(js|json)</td>
            <td>Path to config file, set to false to disable it</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
  export default {
    created() {
      document.title = 'Options'
    },
    mounted() {
      window.scrollTo(0, 0)
    }
  }
</script>