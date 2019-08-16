const App = getApp()
Component({
  // externalClasses: ['my-class'], ///组件希望接受外部传入的样式类
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持(一般只支持一个)多个slot，以不同的 name 来区分。
  },
  /**
   * 组件的属性列表
   */
  properties: {
    name:{
      type:String,
      vlaue:''
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    type:'组件',
    alreadyLogin: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // sayHello(e) {
    //   console.log(e, 'hello')
    // }
    bindGetUserInfo(e){
      // 获取用户信息
      wx.getSetting({
        success: res => {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
            wx.getUserInfo({
              success: res => {
                // 可以将 res 发送给后台解码出 unionId
                App.globalData.userInfo = res.userInfo
                wx.setStorageSync('userInfo', res.userInfo)

              
              }
            })
          }
        }
      })
    }
    
  }
})
