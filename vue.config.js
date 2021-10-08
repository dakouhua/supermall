module.exports = {
  configureWebpack: {
    resolve: {  //配置路径相关的问题
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'network': '@/network',
        'common': '@/common',
        'assets': '@/assets',
      }
    }
  }
}