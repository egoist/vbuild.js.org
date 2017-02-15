<template>
  <pre><code v-html="highlightedCode"></code></pre>
</template>

<script>
  import hljs from 'highlight.js/lib/highlight'

  hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'))
  hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'))

  export default {
    props: {
      code: String
    },
    computed: {
      highlightedCode() {
        const code = this.code || this.$slots.default[0].text
        return hljs.highlightAuto(code).value
      }
    }
  }
</script>

<style>
  pre {
    overflow: auto;
    & >code {
      word-break: normal;
      white-space: pre;
    }
  }
</style>
