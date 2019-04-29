
takePhoto() {
  const ctx = wx.createCameraContext()
  ctx.takePhoto({
    quality: 'high',
    success: (res) => {
      // console.log(res);
      // this.setData({
      //   src: res.tempImagePath
      // })
      wx.showLoading({
        title: '正在核验身份...',
      })
      this.setData({ logindisabled: true });
      wx.uploadFile({
        url: '', //仅为示例，非真实的接口地址
        filePath: res.tempImagePath,
        name: 'file',
        formData: {
          'user': 'test'
        },
        success: (res) => {
          console.log(res.data);
          wx.hideLoading();
          this.setData({ logindisabled: false });
          var data = res.data;
          console.log(data);
          wx.showModal({
            title: '提示',
            content: data,
            showCance: false
          })
        }
      })
    }
  })
},