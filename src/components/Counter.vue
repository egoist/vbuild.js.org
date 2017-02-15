<template>
  <div class="counter" @click="count++">
    {{ count || 'Just Click Me!' }}
  </div>
</template>

<script>
  export default {
    data() {
      return {
        count: 0
      }
    }
  }
</script>

<style>
  .counter {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 1px solid #e2e2e2;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    cursor: pointer;
    user-select: none;
  }
</style>
