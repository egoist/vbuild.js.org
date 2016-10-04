<template>
  <section class="main">
    <div class="container">
      <h2 class="page-title">Babel</h2>
      
      <div class="block">
        <h3>Default Babel options:</h3>
        <code-block>{
  "presets": [["es2015", {modules: false}], "stage-2"],
  "plugins": ["transform-runtime", "transform-vue-jsx"]
}</code-block>
      </div>

      <div class="block">
        <h3>
          You can override the default options with:
        </h3>
        <code-block>// vue.config.json
{
  "babel": {
    "presets": //...
  }
}</code-block>
      </div>

    </div>
  </section>
</template>

<script>
  import CodeBlock from 'components/CodeBlock'

  export default {
    created() {
      document.title = 'Babel'
    },
    mounted() {
      window.scrollTo(0, 0)
    },
    components: {
      CodeBlock
    }
  }
</script>