<template>
  <div class="page">
    <slide-indicator :active="home.active" :total="home.total"></slide-indicator>

    <section class="slide" id="slide0">
      <h1 class="site-name">
        <span class="title"><strong>vbuild:</strong> Install once, Build everywhere</span><br>
        <span class="description">for Vue.js but not only Vue.js</span>
      </h1>

      <div class="actions">
        <a class="btn" style="margin-right: 10px;" href="https://github.com/egoist/vbuild"><svg id="i-github" viewBox="0 0 64 64" width="32" height="32">
    <path stroke-width="0" fill="currentColor" d="M32 0 C14 0 0 14 0 32 0 53 19 62 22 62 24 62 24 61 24 60 L24 55 C17 57 14 53 13 50 13 50 13 49 11 47 10 46 6 44 10 44 13 44 15 48 15 48 18 52 22 51 24 50 24 48 26 46 26 46 18 45 12 42 12 31 12 27 13 24 15 22 15 22 13 18 15 13 15 13 20 13 24 17 27 15 37 15 40 17 44 13 49 13 49 13 51 20 49 22 49 22 51 24 52 27 52 31 52 42 45 45 38 46 39 47 40 49 40 52 L40 60 C40 61 40 62 42 62 45 62 64 53 64 32 64 14 50 0 32 0 Z" />
</svg>Start me on GitHub</a>
      <router-link to="guide/options" class="btn"><svg id="i-book" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.25%">
        <path d="M16 7 C16 7 9 1 2 6 L2 28 C9 23 16 28 16 28 16 28 23 23 30 28 L30 6 C23 1 16 7 16 7 Z M16 7 L16 28" />
        </svg> Read the Guide</router-link>
      </div>
      
      <jump to="#slide1"></jump>
    </section>

    <section class="slide" id="slide1">
      <h1>
        Start by writing your app directly<br>
        <span class="description">time is money!</span>
      </h1>
      <window title="~/my-project/src/index.js">
        <code-block :code="exampleCode"></code-block>
      </window>
      <jump to="#slide2"></jump>
    </section>

    <section class="slide" id="slide2">
      <h1>Run a single command to develop it<br>
      <span class="description">with hot reloading or live reloading</span>
      </h1>
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
      <h1>Optionally, config file, the easy way</h1>
      <window title="~/my-project/vue.config.json">
        <code-block :code="configExampleCode"></code-block>
      </window>
      <jump to="#slide5"></jump>
    </section>

    <section class="slide" id="slide5">
      <h1>Almost There!</h1>
      <router-link to="guide/options" class="btn"><svg id="i-book" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.25%">
    <path d="M16 7 C16 7 9 1 2 6 L2 28 C9 23 16 28 16 28 16 28 23 23 30 28 L30 6 C23 1 16 7 16 7 Z M16 7 L16 28" />
</svg> Read the Guide</router-link>
    </section>
  </div>
</template>

<script>
  import {mapState} from 'eva.js'
  import inView from 'in-view'

  import Window from 'components/Window.vue'
  import CodeBlock from 'components/CodeBlock.vue'
  import Jump from 'components/Jump.vue'
  import Counter from 'components/Counter'
  import SlideIndicator from 'components/SlideIndicator.vue'

  export default {
    name: 'home',
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
$ ~/my-project vbuild --dev

> vbuild app is running at http://localhost:4000`,
        configExampleCode: `// In fact, there're few things you need to config!
{
  "title": "My Awesome Project",
  "dist": "./public",
  "postcss": {
    "use": ["postcss-mixins", "postcss-simple-vars"],
    "autoprefixer": {
      "browsers": ["ie > 10"]
    }
  }
  // ...
}`
      }
    },
    computed: {
      ...mapState(['home'])
    },
    created() {
      document.title = '>vbuild: Install once, Build everywhere'
    },
    mounted() {
      for (let i = 0; i < this.home.total; i++) {
        inView(`#slide${i} h1`).on('enter', () => {
          if (!this.home.jumping) {
            this.$store.commit('NAVIGATE_TO', i)
          }
        })
      }
    },
    components: {
      CodeBlock,
      Jump,
      Window,
      Counter,
      SlideIndicator
    }
  }
</script>

<style src="highlight.js/styles/github.css"></style>
<style scoped> 
  .page {
    text-align: center;
  }
  h1 {
    font-weight: 300;
    margin: 0;
    margin-bottom: 50px;
    font-size: 40px;
    & .title {
      & strong {
        font-weight: 300;
        color: #4fc08d;
        font-style: italic;
      }
    }
    & .description {
      font-size: 24px;
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