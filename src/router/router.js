module.exports = [{
    path: 'pages/index/index',
    name: 'index',
    config: {
      navigationBarTitleText: 'mpvue中使用第三方UI组件',
      enablePullDownRefresh: false,
      usingComponents: {
        'i-button': '../../iView/button/index'
      }
    }
  }];