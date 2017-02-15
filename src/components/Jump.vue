<template>
  <div class="jump" @click="jumpTo">
    <svg id="i-chevron-bottom" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.25%">
      <path d="M30 12 L16 24 2 12" />
    </svg>
  </div>
</template>

<script>
  import jump from 'jump.js'

  export default {
    props: {
      to: String
    },
    methods: {
      jumpTo() {
        jump(this.to)
      }
    }
  }
</script>

<style>
  .jump {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
  }
</style>
