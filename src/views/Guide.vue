<template>
  <div class="page page-guide">
    <header class="site-header">
      <div class="container">
        <h1 class="site-name">
          <router-link to="/">vbuild</router-link>
        </h1>
        <ul class="nav">
          <li>
            <router-link to="/guide/home">Guide</router-link>
          </li>
          <li>
            <router-link to="/guide/babel">Babel</router-link>
          </li>
          <li>
            <router-link to="/guide/postcss">PostCSS</router-link>
          </li>
          <li>
            <router-link to="/guide/components">Components</router-link>
          </li>
        </ul>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<style>
  .page-guide {
    padding-top: 60px;
    .site-header {
      height: 60px;
      border-bottom: 1px solid #e2e2e2;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background-color: white;
      .container {
        display: flex;
        align-items: center;
        height: 100%;
      }
    }

    .container {
      max-width: 740px;
      margin: 0 auto;
    }

    h1.site-name {
      font-style: italic;
      a {
        color: #4fc08d;
      }
    }

    .nav {
      list-style-type: none;
      display: flex;
      li {
        margin-right: 20px;
        a {
          color: #4fc08d;
          border-bottom: 1px solid transparent;
          height: 60px;
          line-height: 60px;
          display: inline-block;
          &:hover, &.router-link-active {
            border-bottom-color: #4fc08d;
          }
        }
      }
    }
  }

  .main {
    padding: 30px 0;
    h3 {
      margin-bottom: 20px;
    }
    .block:not(:last-child) {
      margin-bottom: 30px;
      padding-bottom: 20px;
      border-bottom: 1px solid #e2e2e2;
    }
    p {
      margin-bottom: 20px;
    }
  }

  h2.page-title {
    margin-bottom: 30px;
    color: #4fc08d;
  }

  .warning {
    background-color: #feefb3;
    padding: 5px;
    border-radius: 4px;
    border: 1px solid #e0cb79;
    text-transform: uppercase;
    font-size: 12px;
    margin-bottom: 3px;
    vertical-align: top;
  }
</style>