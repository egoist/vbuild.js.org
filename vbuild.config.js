const path = require('path')

module.exports = (options, req) => ({
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
    }
  },
  eslintConfig: {
    globals: ['ga']
  }
})
