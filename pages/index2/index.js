//index.js
//获取应用实例
const app = getApp()
var ext = require('indexExt.js')
Page({
  data: {
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
    phoneNumber: 13692950061,
  },
  onLoad: function () {
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
  //左边时间选择
  handleDateFieldClick: function (e) {

    this.setData({
      'pickerViewConfig1.show': true
    });
    //app.aldstat.sendEvent('取车时间点击');
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
    this.handleDateFieldClick2();
  },
  //右边时间选择
  handleDateFieldClick2: function (e) {
    this.setData({
      'pickerViewConfig2.show': true
    });
  },
  handlePopupDateChange2(e) {
    console.log(e.detail);
    var date2 = this.data.pickerViewConfig2.year[e.detail.value[0]].FullDate
    console.log(date2);
    //取车时间
    var date1 = wx.getStorageSync("getDate");
    var day = (new Date(date2)).getTime() - (new Date(date1)).getTime();
    day = parseInt(day / (1000 * 60 * 60 * 24));
    console.log("day:" + day);
    this.setData({
      'pickerViewConfig2.value': e.detail.value,
      "day": day
    });
  },
  hideDatePopup2() {
    this.setData({
      'pickerViewConfig2.show': false
    });
  },
  //还车时间取消
  cancel2: function () {
    this.hideDatePopup2();
  },
  //还车时间确定
  ok2: function () {
    this.hideDatePopup2();
  },
  //去选车
  click_go: function (e) {
    var that = this;
    var formId = e.detail.formId;
    app.commitFormId(formId);
    //取车对象
    var pickerDateObj = that.data.pickerViewConfig1.year[that.data.pickerViewConfig1.value[0]];
    var pickerTimeObj = that.data.pickerViewConfig1.time[that.data.pickerViewConfig1.value[1]];

    //还车对象
    var returDateObj = that.data.pickerViewConfig2.year[that.data.pickerViewConfig2.value[0]];
    var returTimeObj = that.data.pickerViewConfig2.time[that.data.pickerViewConfig2.value[1]];

    app.globalData.day = that.data.day;
    //以后用这个存取值
    app.globalData.pickUpCar = {
      Date: pickerDateObj,
      Time: pickerTimeObj,
      StoreId: that.data.pickUpStore
    };
    app.globalData.returnCar = {
      Date: returDateObj,
      Time: returTimeObj,
      StoreId: that.data.returnStore
    }



    console.log("取车对象=>", app.globalData.pickUpCar);
    console.log("天数=>", app.globalData.day);
    console.log("还车对象=>", app.globalData.returnCar);

    app.aldstat.sendEvent('去选车按钮')
    var page = "../car-list/car-list";
    if (that.data.setting.storeModel == 2) {
      page = "../car-list-model2/car-list-model2";
    }
    wx.navigateTo({
      url: page
    })
  },
  //打电话
  call: function () {
    var that = this;
    wx.makePhoneCall({
      phoneNumber: that.data.setting.phoneNumber
    })
  },
  copyRight: function () {
    wx.makePhoneCall({
      phoneNumber: '13692950061'
    })
  },
  onPullDownRefresh: function () {
    app.aldstat.sendEvent('首页下拉加载')
    wx.showLoading({
      title: "加载中..."
    })
    this.loadData();
    wx.hideLoading();
    wx.stopPullDownRefresh()
  }
})
