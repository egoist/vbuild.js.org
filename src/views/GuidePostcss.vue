<template>
  <section class="main">
    <div class="container">
      <h2 class="page-title">PostCSS</h2>
      
      <div class="block">
        <h3>Default PostCSS options:</h3>
        <code-block>{
  plugins: ['autoprefixer', 'postcss-nested']
}</code-block>
      </div>

      <div class="block">
        <h3>
          You can add new plugins:
        </h3>
        <code-block>// vue.config.json
{
  "postcss": {
    "use": ["postcss-mixins"],
    // if there's option for that plugin, it goes here:
    "postcss-mixin": {},
    // override the default plugins
    "append": false
  }
}</code-block>
      </div>

      <div class="block">
        <h3>
          User JavaScript config file if you need:
        </h3>
        <code-block>// vue.config.js
// because you really need the power of js
module.exports = {
  postcss: {
    parser: require('sugarss')
  }
}</code-block>
      </div>
      
      <div class="block">
        <h3>
          The option could also be a function, this way it will be totally controlled by you:
        </h3>
        <code-block>module.exports = {
  postcss(webpack) {
    return [
      require('postcss-import')({
        addDependencyTo: webpack
      })
    ]
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
      document.title = 'PostCSS'
    },
    mounted() {
      window.scrollTo(0, 0)
    },
    components: {
      CodeBlock
    }
  }
</script>