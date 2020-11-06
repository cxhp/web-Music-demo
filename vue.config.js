const { resolve } = require("core-js/fn/promise");

module.exports = {
  publicPath: '/',    //基本路径
  outputDir: 'dist',   // 构建时输出目录
  assetsDir: 'static',  // 放置生成的静态资源的目录。
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap:false, // 不需要生成的sourcemap，加速产生环境构建
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    // before: require('./mock/mock-server.js')
  },

  // webpack 相关配置
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        "@":resolve('src')
      }
    }
  }


}




