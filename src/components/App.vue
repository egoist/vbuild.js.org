<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>
  html, body, #app, .page {
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
  .btn {
    border: 1px solid #4fc08d;
    border-radius: 33px;
    padding: 8px 16px;
    font-size: 16px;
    display: inline-flex;
    text-decoration: none;
    color: #4fc08d;
    justify-content: center;
    align-items: center;
    & svg {
      margin-right: 10px;
    }
  }
</style>