//index.js

Page({
 //data属性为和页面绑定的数据
  data: {
    text: "提交",    //提交按钮上显示的文字
    input: "",     //input输入框的值，用于更新记录成功后清空输入框的值
    record: ""     //用于显示从云数据库读出来的值
  },
  
  //read函数，点击读取按钮触发此函数
  read() {
    //检查基础库版本
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

    //保存this变量
    var _this = this;
    //调用云函数
    wx.cloud.callFunction({
      // 云函数名称
      name: 'query',
      // 传给云函数的参数
      data: {
        tag: 1
      },
      //success函数为调用成功后的回调函数
      success: function (res) {
        console.log(res.result)
        _this.setData({
          record: res.result.data[0].content      //设置record值，显示在页面上。setData函数会触发页面的重新渲染
        })
      },
      //fail函数为调用失败后的回调函数
      fail: console.error
   })
  },
 
  //表单提交触发此函
  formSubmit(e) {
    //检查基础库版本
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }
    //保存this变量
     var _this = this;
    //调用云函数
    wx.cloud.callFunction({
      // 云函数名称
      name: 'search',
      // 传给云函数的参数
      data: {
        content: e.detail.value.input_content,     //要更新的值为输入框里的值
        tag: 1
      },
      success: function (res) {
        console.log(res.result)
        //更新成功后清空输入框的值
        _this.setData({
          input: "",
        })
      },

      fail: console.error
    })
  },
})