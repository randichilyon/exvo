const path = require('path')
var config = require('./config')
const noMock = process.env.NODE_ENV === 'development' && process.env.NOMOCK === 'true'
const prod = process.env.NODE_ENV === 'production'

var WebpackRuntimePublicPathPlugin = require('webpack-runtime-public-path-plugin')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js',
        '@': resolve('src'),
        '@api-mock': noMock || prod
          ? resolve('src/empty')
          : resolve('src/api-mock'),
        'axios-mock-adapter': noMock || prod
          ? resolve('src/empty.js')
          : 'axios-mock-adapter/dist/axios-mock-adapter.min.js',
        assets: resolve('src/assets'),
        '@vue-mock': (prod
          ? resolve('src/empty.js')
          : resolve('src/api-mock/'))
      }
    },
    output: {
      jsonpFunction: 'fsMainWebpackJsonp'
    },
    externals: {
    },
    plugins: [
      new WebpackRuntimePublicPathPlugin({
        runtimePublicPath: 'window._main_staticPublicPath()'
      })
    ]
  },
  devServer: {
    disableHostCheck: true,
    host: 'localhost',
    port: 10027,
    public: 'http://localhost:10001',
    publicPath: '/',
    sockPath: '/main-sockjs/',
    injectClient: true
  },
  chainWebpack: config => {
    config.optimization.delete('splitChunks')
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 2048 }))
    config.plugins.delete('prefetch-index')
    config.plugins.delete('preload-index')
  },
  assetsDir: 'static',
  css: {
    extract: false,
    loaderOptions: {
      scss: {
        prependData: `
          @import '@blibli/blue-tokens/dist/blue-tokens.scss';
          @import '@blibli/blue-supports/dist/blue-supports.scss';
        `
      }
    }
  },
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      // the source template
      template: __dirname + '/index.ejs',
      // output as dist/index.html
      filename: process.env.NODE_ENV === 'testing'
        ? 'index.html'
        : config.build.index,
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Blibli.com',
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
      env: {
        NODE_ENV: 'production'
      },
      publicPath: process.env.NODE_ENV === 'production'
        ? 'window[\'_main_staticPublicPath\']()'
        : '/'
    }
  }
}
