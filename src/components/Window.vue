<template>
  <div class="window" :class="{browser: browser}">
    <div class="header">
      <div class="bullets">
        <span class="bullet bullet-red"></span>
        <span class="bullet bullet-yellow"></span>
        <span class="bullet bullet-green"></span>
      </div>
      <span class="title">{{ title }}</span>
    </div>
    <div class="body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      browser: Boolean
    }
  }
</script>

<style>
  .window {
    border: 1px solid rgb(195, 195, 195);
    width: 500px;
    border-radius: 4px;
    box-shadow: 0px 2px 3px 0px rgba(50, 50, 50, 0.11);
    text-align: left;
    vertical-align: top;
    margin: 0 20px;
    display: inline-block;

    &.browser {
      & .header {
        background: #E8E8E8;
        & .title {
          background: #fff;
          display: inline-block;
          width: 320px;
          border-radius: 4px;
          padding: 6px 14px 4px;
          margin-left: 10px;
          vertical-align: middle;
        }
      }
    }

    & .header {
      padding: 10px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      & .title {
        display: inline-block;
        width: 362px;
        text-align: center;
        font-size: 12px;
        color: #766F79;
      }
    }

    & .body {
      padding: 10px;
      position: relative;
      min-height: 300px;
    }

    & .bullets {
      font-size: 0;
      position: absolute;
      left: 10px;
    }

    & .bullet {
      height: 11px;
      width: 11px;
      display: inline-block;
      background: #ccc;
      border-radius: 100%;
      vertical-align: middle;
      margin-right: 5px;

      &.bullet-red {
        background: #DF7065;
      }
      &.bullet-yellow {
        background: #E6BB46;
      }
      &.bullet-green {
        background: #5BCC8B;
      }
    }
  }
</style>
