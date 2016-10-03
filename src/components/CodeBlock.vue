<template>
  <pre><code v-html="highlightedCode"></code></pre>
</template>

<script>
  import highlight from 'highlight.js'

  export default {
    props: {
      code: String
    },
    computed: {
      highlightedCode() {
        return highlight.highlightAuto(this.code).value
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