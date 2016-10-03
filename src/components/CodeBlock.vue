<template>
  <pre><code v-html="highlightedCode"></code></pre>
</template>

<script>
  import hljs from 'highlight.js/lib/highlight'

  hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'))

  export default {
    props: {
      code: String
    },
    computed: {
      highlightedCode() {
        return hljs.highlightAuto(this.code).value
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