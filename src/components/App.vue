<template>
  <div id="app">
    <github-corner></github-corner>

    <section class="slide" id="slide1">
      <h1 class="site-name">
        <span class="title">vbuild &gt; Install once, Build everywhere</span><br>
        <span class="description">for Vue.js but not only Vue.js</span>
      </h1>
      <window title="./my-project/src/index.js">
        <code-block :code="exampleCode"></code-block>
      </window>
      <jump to="#slide2"></jump>
    </section>

    <section class="slide" id="slide2">
      <h1>Just run a single command</h1>
      <window title="Terminal">
        <code-block :code="exampleCommand"></code-block>
      </window>
      <jump to="#slide3"></jump>
    </section>

    <section class="slide" id="slide3">
      <h1>And Boom!!!</h1>
      <window title="http://localhost:4000" browser>
        <counter></counter>
      </window>
      <jump to="#slide4"></jump>
    </section>

    <section class="slide" id="slide4">
      <h1>And yep, config file, the easy one</h1>
      <window title="./my-project/vue.config.json">
        <code-block :code="configExampleCode"></code-block>
      </window>
    </section>
  </div>
</template>

<script>
  import Window from './Window.vue'
  import CodeBlock from './CodeBlock.vue'
  import Jump from './Jump.vue'
  import Counter from './Counter'
  import GitHubCorner from './GitHubCorner.vue'

  export default {
    data() {
      return {
        exampleCode: `// My App Entry
import Vue from 'vue'
import Counter from './components/Counter.vue'

new Vue({
  el: '#app',
  render: h => h(Counter)
})`,
        exampleCommand: `$ npm install -g vbuild
$ vbuild --dev

> vbuild app is running at http://localhost:4000`,
        configExampleCode: `// In fact, there're few things you need to config!
{
  "title": "My Awesome Project",
  "dist": "./public",
  // ...
}`
      }
    },
    components: {
      CodeBlock,
      Jump,
      Window,
      Counter,
      'github-corner': GitHubCorner
    }
  }
</script>

<style src="../css/tomorrow-night-bright.css"></style>
<style>
  html, body, #app {
    height: 100%;
  }
  body {
    text-align: center;
    margin: 0;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  }
  * {
    box-sizing: border-box;
  }
  h1 {
    font-weight: 300;
    margin: 0;
    margin-bottom: 50px;
    font-size: 40px;
  }
  .site-name {
    & .description {
      font-size: 14px;
      color: #999;
    }
  }
  .slide {
    height: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    position: relative;
  }
</style>