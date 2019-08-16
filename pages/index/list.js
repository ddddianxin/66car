// pages/index/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type:1,//1:时租；2:日租；3:月租
    height: '',
    list:[
      {
        id:'01',
        img:'../../images/car/1672151654.jpg',
        name:'法拉利地方的范德萨范德萨发多福多寿',
        sign:['自动化','4座','1.7','三厢'],
        price:'￥654/天'
      },
      {
        id: '01',
        img: '../../images/car/1672151659.jpg',
        name: '法拉利地方的范德萨范德萨发多福多寿',
        sign: ['自动化', '4座', '1.7', '三厢'],
        price: '￥654/天'
      },
      {
        id: '01',
        img: '../../images/car/1672151692.jpg',
        name: '法拉利地方的范德萨范德萨发多福多寿',
        sign: ['自动化', '4座', '1.7', '三厢'],
        price: '￥654/天'
      },
      {
        id: '01',
        img: '../../images/car/1672151677.jpg',
        name: '法拉利地方的范德萨范德萨发多福多寿',
        sign: ['自动化', '4座', '1.7', '三厢'],
        price: '￥654/天'
      },
      {
        id: '01',
        img: '../../images/car/1672151654.jpg',
        name: '法拉利地方的范德萨范德萨发多福多寿',
        sign: ['自动化', '4座', '1.7', '三厢'],
        price: '￥654/天'
      },
      {
        id: '01',
        img: '../../images/car/1672151654.jpg',
        name: '法拉利地方的范德萨范德萨发多福多寿',
        sign: ['自动化', '4座', '1.7', '三厢'],
        price: '￥654/天'
      },
      {
        id: '01',
        img: '../../images/car/1672151654.jpg',
        name: '法拉利地方的范德萨范德萨发多福多寿',
        sign: ['自动化', '4座', '1.7', '三厢'],
        price: '￥654/天'
      },
      {
        id: '01',
        img: '../../images/car/1672151654.jpg',
        name: '法拉利地方的范德萨范德萨发多福多寿',
        sign: ['自动化', '4座', '1.7', '三厢'],
        price: '￥654/天'
      },
      {
        id: '01',
        img: '../../images/car/1672151654.jpg',
        name: '法拉利地方的范德萨范德萨发多福多寿',
        sign: ['自动化', '4座', '1.7', '三厢'],
        price: '￥654/天'
      }
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    console.log(options)
    var type = options.type;
    that.setData({
      type: type,
    })

  },
  toDetail: function(e){
    var id = e.currentTarget.dataset.specid;
    wx.navigateTo({
      url: '/pages/index/detail?id=' + id
    })
  },
  toList: function(e){
    var that = this
    var type = e.currentTarget.dataset.type;
    console.log('fdfdf')
    console.log(type)
    that.setData({
      type:type
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})