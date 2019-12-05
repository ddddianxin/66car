// pages/order/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: '',
    list: [
      {
        id: '01',
        img: '../../images/car/1672151654.jpg',
        name: '法拉利地方的范德萨范德萨发多福多寿',
        price: '￥654'
      },
      {
        id: '01',
        img: '../../images/car/1672151659.jpg',
        name: '法拉利地方的范德萨范德萨发多福多寿',
        price: '￥5858'
      },
      {
        id: '01',
        img: '../../images/car/1672151692.jpg',
        name: '法拉利地方的范德萨范德萨发多福多寿',
        price: '￥698'
      },
      {
        id: '01',
        img: '../../images/car/1672151677.jpg',
        name: '法拉利地方的范德萨范德萨发多福多寿',
        price: '￥88'
      },
      {
        id: '01',
        img: '../../images/car/1672151654.jpg',
        name: '法拉利地方的范德萨范德萨发多福多寿',
        price: '￥677'
      },
      {
        id: '01',
        img: '../../images/car/1672151654.jpg',
        name: '法拉利地方的范德萨范德萨发多福多寿',
        price: '￥3858'
      },
      {
        id: '01',
        img: '../../images/car/1672151654.jpg',
        name: '法拉利地方的范德萨范德萨发多福多寿',
        price: '￥6736'
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
  toDetail: function (e) {
    var id = e.currentTarget.dataset.specid;
    wx.navigateTo({
      url: '/pages/index/detail?id=' + id
    })
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