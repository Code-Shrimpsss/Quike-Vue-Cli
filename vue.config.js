module.exports = {
  configureWebpack: {
    // 配置webpack
    resolve: {
      alias: {
        'components': '@/components',
        'content': 'components/content',
        'common': 'components/common',
        'assets': '@/assets',
        'services': '@/services',
        'pages': '@/pages',
      }
    }
  }
}
