// pages/index/detail.js
const app = getApp()
var ext = require('indexExt.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type:1,//时租:1；日租:2；月租:3；
    indicatorDots: true,
    autoplay: true,
    interval: 4000,
    duration: 1000,
    imgUrls: [
      '../../images/car/1672151639.jpg',
      '../../images/car/1672151641.jpg',
      '../../images/car/1672151659.jpg'
    ],
    pickerViewConfig1: {
      show: false,
      value: [0, 0],
      year: [],
      time: []
    },
    //还车
    pickerViewConfig2: {
      show: false,
      value: [0, 0],
      year: [],
      time: []
    },
    //天数
    day: 1,
    //预约默认最少多少天
    defaultDay: 2,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var myDate = new Date();
    //取车日期，(当前日期+1)+60天
    var dates = ext.getDateAndWeek(myDate);
    var times = ext.getTimes();

    this.setData({
      "pickerViewConfig1.year": dates,
      "pickerViewConfig1.time": times,
      "pickerViewConfig2.year": dates,
      "pickerViewConfig2.time": times,
      'pickerViewConfig2.value': [this.data.defaultDay, 0],
      day: this.data.defaultDay
    });
    //取车时间 缓存
    wx.setStorageSync("getDate", dates[0].FullDate);

  },
  handleDateFieldClick: function (e) {

    this.setData({
      'pickerViewConfig1.show': true
    });
    //app.aldstat.sendEvent('取车时间点击');
  },
  hideDatePopup() {
    this.setData({
      'pickerViewConfig1.show': false
    });
  },
  //取车时间取消
  cancel1: function () {
    this.hideDatePopup();
  },
  //取车时间确定
  ok1: function () {
    this.hideDatePopup();
    //取车时间
    var date1 = wx.getStorageSync("getDate");
    var date2 = this.data.pickerViewConfig2.year[this.data.pickerViewConfig2.value[0]].FullDate
    var day = (new Date(date2)).getTime() - (new Date(date1)).getTime();
    day = parseInt(day / (1000 * 60 * 60 * 24));
    console.log("day:" + day);
    this.setData({
      "day": day
    });

  },
  //把值存到缓存
  handlePopupDateChange(e) {
    console.log(e);
    var date = this.data.pickerViewConfig1.year[e.detail.value[0]].FullDate
    console.log(date);
    //取车时间 缓存
    wx.setStorageSync("getDate", date)
    //还车时间列表重新生成
    var dates = ext.getDateAndWeek(date);
    this.setData({
      'pickerViewConfig1.value': e.detail.value,
      'pickerViewConfig2.year': dates,
      'pickerViewConfig2.value': [this.data.defaultDay - 1, 0],
      day: this.data.defaultDay
    });
  },
  toHome:function(){
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
  toReservation: function(){
    wx.navigateTo({
      url: '/pages/reservation/index',
    })

  },
  call: function(){
    wx.makePhoneCall({
      phoneNumber: '1340000' // 仅为示例，并非真实的电话号码
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