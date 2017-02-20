const path = require('path')
const OfflinePlugin = require('offline-plugin')

module.exports = {
  entry: 'src/index.js',
  html: {
    title: 'vbuild: Install once, Build everywhere',
    template: './index.html'
  },
  postcss: [
    require('postcss-nested')
  ],
  webpack: {
    resolve: {
      modules: [path.resolve('src')]
    },
    plugins: [
      new OfflinePlugin({
        ServiceWorker: {
          events: true
        }
      })
    ]
  }
}
