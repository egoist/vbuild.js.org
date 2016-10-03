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
    border: 1px solid #f0f0f0;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    &.active {
      cursor: default;
      background-color: white;
      border-color: #8e8e8e;
      &:after {
        content: '';
        height: 4px;
        width: 4px;
        border-radius: 50%;
        background-color: #8e8e8e;
        top: 50%;
        left: 50%;
        margin-left: -2px;
        margin-top: -2px;
        display: inline-block;
        position: absolute;
      }
    }
    &:not(.active):hover {
      background-color: #ddd;
    }
  }
</style>