const path = require('path')
const OfflinePlugin = require('offline-plugin')

module.exports = options => ({
  entry: 'src/index.js',
  html: {
    title: 'vbuild: Install once, Build everywhere',
    template: './index.html'
  },
  postcss: [
    require('postcss-nested')
  ],
  webpack(config) {
    if (!options.dev) {
      config.plugins.push(new OfflinePlugin({
        ServiceWorker: {
          events: true
        }
      }))
    }
    config.resolve.modules.push(path.resolve('src'))
    return config
  }
})
