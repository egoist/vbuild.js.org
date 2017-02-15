const path = require('path')

module.exports = (options, req) => ({
  entry: 'src/index.js',
  html: {
    title: 'vbuild: Install once, Build everywhere',
    template: './index.html'
  },
  postcss: [
    req('autoprefixer')({
      browsers: ['last 4 versions', 'ie > 8']
    }),
    require('postcss-nested')
  ],
  webpack: {
    resolve: {
      alias: {
        vue$: 'vue/dist/vue'
      },
      modules: [path.resolve('src')]
    }
  },
  eslintConfig: {
    globals: ['ga']
  }
})
