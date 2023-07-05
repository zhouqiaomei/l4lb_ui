// vue.config.js 配置说明
//官方vue.config.js 参考文档 https://cli.vuejs.org/zh/config/#css-loaderoptions
// 这里只列一部分，具体配置参考文档

module.exports = {
  lintOnSave: false,
  devServer: {
    //   proxy: {
    //     '/api': {
    //       target: "http://172.18.89.130:19999",
    //       ws: true,
    //       changeOrigin: false,
    //       pathRewrite: { '^/api': '' }
    //     }
    //   }
    proxy: 'http://172.18.156.102:19999' //配置代理服务器（域名为本地，端口为响应方的端口号）
  }
}
