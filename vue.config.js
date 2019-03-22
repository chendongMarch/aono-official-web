const CompressionWebpackPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const isProduction = process.env.NODE_ENV === 'production';
const cdn = {
  css: ['/static/cdn/iview.css'],
  js: ['/static/cdn/vue.min.js',
       '/static/cdn/iview.min.js',
      '/static/cdn/vue-router.min.js',
    '/static/cdn/axios.min.js',]
}

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',

  outputDir: 'dist',

  assetsDir: 'static',

  filenameHashing: true,

  // 构建多页面应用
  // When building in multi-pages mode, the webpack config will contain different plugins
  // (there will be multiple instances of html-webpack-plugin and preload-webpack-plugin).
  // Make sure to run vue inspect if you are trying to modify the options for those plugins.
  // pages: {
  //   index: {
  //     // entry for the pages
  //     entry: 'src/pages/index/index.js',
  //     // the source template
  //     template: 'src/pages/index/index.html',
  //     // output as dist/index.html
  //     filename: 'index.html',
  //     // when using title option,
  //     // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
  //     title: '首页',
  //     // chunks to include on this pages, by default includes
  //     // extracted common chunks and vendor chunks.
  //     chunks: ['chunk-vendors', 'chunk-common', 'index']
  //   }
  // when using the entry-only string format,
  // template is inferred to be `public/subpage.html`
  // and falls back to `public/index.html` if not found.
  // Output filename is inferred to be `subpage.html`.
  // subpage: ''
  // },

  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,

  // 是否使用包含运行时编译器的Vue核心的构建
  runtimeCompiler: false,

  // 默认情况下 babel-loader 忽略其中的所有文件 node_modules
  transpileDependencies: [],

  // 生产环境 sourceMap
  productionSourceMap: false,

  // cors 相关 https://jakearchibald.com/2017/es-modules-in-browsers/#always-cors
  // corsUseCredentials: false,
  // webpack 配置，键值对象时会合并配置，为方法时会改写配置
  // https://cli.vuejs.org/guide/webpack.html#simple-configuration
  // configureWebpack: (config) => {

  // },

  configureWebpack: (config) => {
    if (isProduction) {
      config.externals = {
        'vue': 'Vue',
        'vue-router': 'VueRouter',
        'axios': 'axios',
        'iview': 'iview',
      }
    }
    config.plugins.push(
      new CompressionWebpackPlugin({ //gzip 压缩
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp(
            '\\.(js|css)$'    //压缩 js 与 css
        ),
        threshold: 10240,
        minRatio: 0.8 }),
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        parallel: true,
        sourceMap: true,
        cache: true,
        extractComments: true,
        terserOptions: {
          output: {
            comments: /^\**!|@preserve|@license|@cc_on/i
          },
          compress: {
            arrows: true,
            collapse_vars: true,
            comparisons: true,
            computed_props: true,
            hoist_funs: true,
            hoist_props: true,
            hoist_vars: true,
            inline: true,
            loops: true,
            negate_iife: true,
            properties: true,
            reduce_funcs: true,
            reduce_vars: true,
            switches: true,
            toplevel: true,
            typeofs: true,
            booleans: true,
            if_return: true,
            sequences: true,
            unused: true,
            conditionals: true,
            dead_code: true,
            evaluate: true
          },
        //   mangle: {
        //     safari10: true,
        //     properties: true
          // }
        },
      }));
    // config.plugins.push(
    //   new BundleAnalyzerPlugin({
    //     analyzerMode: 'server',
    //     analyzerHost: '127.0.0.1',
    //     analyzerPort: 8889,
    //     reportFilename: 'report.html',
    //     defaultSizes: 'parsed',
    //     openAnalyzer: true,
    //     generateStatsFile: false,
    //     statsFilename: 'stats.json',
    //     statsOptions: null,
    //     logLevel: 'info'}));
  },

  // webpack 链接 API，用于生成和修改 webapck 配置
  // https://github.com/mozilla-neutrino/webpack-chain
  chainWebpack: (config) => {
    if (isProduction) {
      config.plugin('html')
      .tap(args => {
          args[0].cdn = cdn;
        return args;
      })
    }
    // 因为是多页面，所以取消 chunks，每个页面只对应一个单独的 JS / CSS
    config.optimization
      .splitChunks({
        cacheGroups: {}
      });

    // 'src/lib' 目录下为外部库文件，不参与 eslint 检测
    config.module
      .rule('eslint')
      .exclude
      .add('/Users/maybexia/Downloads/FE/community_built-in/src/lib')
      .end()
  },

  // 配置高于chainWebpack中关于 css loader 的配置
  css: {
    // 是否开启支持 foo.module.css 样式
    modules: false,

    // 是否使用 css 分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用 <style> 方式内联至 html 文件中
    extract: true,

    // 是否构建样式地图，false 将提高构建速度
    sourceMap: true,

    // css预设器配置项
    loaderOptions: {
      css: {
        // options here will be passed to css-loader
      },

      postcss: {
        // options here will be passed to postcss-loader
      }
    }
  },

  // All options for webpack-dev-server are supported
  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: true,
    hot: true,
    compress: true,

    open: true,

    port: 3000,

    https: false,

    hotOnly: true,

    // proxy: {
    //   '/api': {
    //     target: 'http://aonokj.com/',
    //     secure: false,
    //     changeOrigin: true, // 跨域接口支持
    //     pathRewrite: {
    //     }
    //   }
    // },

    before: (app) => {
    }
  },
  // 构建时开启多进程处理 babel 编译
  parallel: require('os').cpus().length > 1,

  // https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},

  // 第三方插件配置
  pluginOptions: {}
};