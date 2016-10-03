<template>
  <div class="indicators">
    <span
      v-for="(n, index) in total"
      @click="navigateTo(index)"
      class="indicator"
      :class="{active: active === index}">
    </span>
  </div>
</template>

<script>
  import jump from 'jump.js'

  export default {
    props: {
      active: Number,
      total: Number
    },
    methods: {
      navigateTo(index) {
        this.$store.commit('JUMP_START')
        jump(`#slide${index}`, {
          callback: () => {
            this.$store.commit('NAVIGATE_TO', index)
            this.$store.commit('JUMP_END')
          }
        })
      }
    }
  }
</script>

<style>
  .indicators {
    position: fixed;
    width: 16px;
    left: 20px;
    top: 50%;
    height: 100px;
    transform: translateX(-50%) translateY(-50%);
    z-index: 9999;
  }

  .indicator {
    display: inline-flex;
    width: 12px;
    height: 12px;
    background-color: #f0f0f0;
    border-radius: 50%;
    cursor: pointer;
    &.active {
      cursor: default;
      background-color: #ddd;
    }
    &:hover {
      background-color: #ddd;
    }
  }
</style>