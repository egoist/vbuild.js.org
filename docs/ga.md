# Google Analytics

You can set `ga` option to your Google Analytics track ID to enable this feature:

```js
// vue.config.js
export default {
  ga: 'UA-5384829-10'
}
```

Since you're most likely building a Single Page App, check out  [Single Page Application Tracking](https://developers.google.com/analytics/devguides/collection/analyticsjs/single-page-applications) for using Google Analytics with SPA.

In short words, just send `pageview` event after route changes:

```js
// for example you're using vue-router
router.afterEach(to => {
  ga('set', 'page', to.fullPath)
  ga('send', 'pageview')
})
```
