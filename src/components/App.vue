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
    margin: 0;
    /*https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-268438.jpg*/
    background-image: url(https://ooo.0o0.ooo/2017/02/15/58a42f52168c0.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    text-shadow: -1px 0 #fff, 0 1px #fff, 1px 0 #fff, 0 -1px #fff;
    font-size: 16px;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  h1, h2, h3, h4, h5 {
    font-weight: 300;
    margin: 0;
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
    svg {
      margin-right: 10px;
    }
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1.75rem 0;
    color: #778087;
    td,
    th {
      vertical-align: top;
      border: 1px solid #ccc;
      line-height: 15px;
      padding: 10px;
    }
    thead th {
      font-size: 10px;
    }
    tbody td:first-child {
      font-weight: 700;
      color: #333;
    }
  }
</style>
