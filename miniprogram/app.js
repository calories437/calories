//app.js
// 整个项目的启动文件，如注释写的onlaunch方法有三大功能，浏览器缓存进行存和取数据；用登陆成功的回调；获取用户信息。

// globalData是定义整个项目的全局变量或者常量。
App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

    this.globalData = {}
  }
})
