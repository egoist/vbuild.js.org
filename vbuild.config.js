const path = require('path')

module.exports = (options, req) => ({
  entry: 'src/index.js',
  html: {
    title: 'vbuild: Install once, Build everywhere',
    template: './index.html'
  },
  vendor: [
    'vue',
    'vuex',
    'vue-router',
    'in-view',
    'jump.js'
  ],
  postcss: [
    req('autoprefixer')({
      browsers: ['last 4 versions', 'ie > 8']
    }),
    require('postcss-nested')
  ],
  webpack(cfg) {
    cfg.resolve.modules.push(path.resolve('src'))
    return cfg
  }
})
