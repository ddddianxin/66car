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
        img: 'http://www.benson-car.com/upload/images/20160310/98948690.JPG',
        name: '劳斯莱斯 曜影',
        price: '￥1008'
      },
      {
        id: '02',img:'http://www.benson-car.com/upload/images/20190604/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_2019060414313329534721.jpg',
        name: '迈凯伦 720S',
        price: '￥18000'
      },
      {
        id: '03',
        img: 'http://www.benson-car.com/upload/images/20190725/IMG_00175162078.jpg',
        name: '法拉利 488',
        price: '￥20000'
      },
      {
        id: '04',
        img: 'http://www.benson-car.com/upload/images/20190725/15799947.jpg',
        name: '劳斯莱斯 魅影',
        price: '￥21000'
      },
      {
        id: '05',
        img: 'http://www.benson-car.com/upload/images/20190711/IMG_0006_polarr_17807667.jpg',
        name: '兰博基尼Urus',
        price: '￥15000'
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