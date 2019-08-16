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
    //二项选择
    pickerSecond:{
      show: false,
      value:0,
      hours:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
      days:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
      months:[1,2,3,4,5,6,7,8,9,10,11,12]
    },
    sortHours: ["00:00", "00:30", "01:00", "01:30", "02:00", "02:30", "03:00", "03:30", "04:00", "04:30", "05:00", "05:30", "06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"],
    //天数
    day: 1,
    //预约默认最少多少天
    defaultDay: 0,
    //用时时间展示
    useTime:'3'

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var myDate = new Date();
    var preDate = new Date(myDate.getTime() - 24 * 60 * 60 * 1000);

    //设定默认天数
    var defDay = that.data.type == 1 ? 0 : 1
    if (that.data.type == 1) {
      that.setData({
        defaultDay: defDay,
        'pickerViewConfig2.value': [that.data.pickerViewConfig2.value[0], that.data.pickerViewConfig1.value[1] + 3 * 2]
      })

    } else if (that.data.type == 2) {
      that.setData({
        defaultDay: defDay,
        useTime:'1'
      })

    } else {
      that.setData({
        defaultDay: defDay,
        day:30,
        useTime: '1'
      })
    }

    //取车日期
    var time = ext.getTimes();
    var dates = ext.getDateAndWeek(preDate, that.data.defaultDay);
    var dates2=''
    var value2= [0,0]
    if(that.data.type==1){
      that.setData({
        'pickerSecond.value':0
      })
      dates2 = dates
      var times1 = time
      var times2 = that.data.sortHours
    }else if(that.data.type==2){
      var times1 = that.data.sortHours
      var times2 = that.data.sortHours
      dates = ext.getDateAndWeek(myDate, that.data.defaultDay);
      dates2 = dates
    }else{
      var preDate2 = new Date(myDate.getTime() - 24 * 60 * 60 * 1000 * (that.data.day-1));
      var times1 = that.data.sortHours
      var times2 = that.data.sortHours
      dates = ext.getDateAndWeek(myDate, that.data.defaultDay);
      dates2 = ext.getDateAndWeek(preDate2, that.data.day);
      value2 = [1, 0]
    }
    
    this.setData({
      "pickerViewConfig1.year": dates,
      "pickerViewConfig1.time": times1,
      "pickerViewConfig2.year": dates2,
      "pickerViewConfig2.time": times2,
      'pickerViewConfig2.value': value2
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
    var that = this
    this.hideDatePopup();
    this.handleDateFieldClick2();
    
    if(that.data.type==1){
      that.setData({
        'pickerViewConfig2.value': that.data.pickerViewConfig1.value
      });
      that.calculateHours()
    }else if(that.data.type==2){
      var date = that.data.pickerViewConfig1.year[that.data.pickerViewConfig1.value[0]].FullDate
      var dates = ext.getDateAndWeek(date, that.data.day);
      that.setData({
        'pickerViewConfig1.value': that.data.pickerViewConfig1.value,
        'pickerViewConfig2.year': dates,
        'pickerViewConfig2.value': [0, that.data.pickerViewConfig1.value[1]],
      });
    }else{
      var date = that.data.pickerViewConfig1.year[that.data.pickerViewConfig1.value[0]].FullDate
      var dates = ext.getDateAndWeek(date, that.data.day);
      that.setData({
        'pickerViewConfig1.value': that.data.pickerViewConfig1.value,
        'pickerViewConfig2.year': dates,
        'pickerViewConfig2.value': [that.data.useTime-1, that.data.pickerViewConfig1.value[1]]
      });
    }

    
  },
  //把值存到缓存
  handlePopupDateChange(e) {
    var that = this
    var date = that.data.pickerViewConfig1.year[e.detail.value[0]].FullDate
    //取车时间 缓存
    wx.setStorageSync("getDate", date)
    //还车时间列表重新生成
    if(that.data.type==1){
      that.setData({
        'pickerViewConfig1.value': e.detail.value,
      });
      that.calculateHours();
    }else if(that.data.type==2){
      var dates = ext.getDateAndWeek(date, that.data.day);
      that.setData({
        'pickerViewConfig1.value': e.detail.value,
        'pickerViewConfig2.year': dates,
        'pickerViewConfig2.value': [0, e.detail.value[1]],
      });
    }else{
      var dates = ext.getDateAndWeek(date, that.data.day);
      that.setData({
        'pickerViewConfig1.value': e.detail.value,
        'pickerViewConfig2.year': dates,
        'pickerViewConfig2.value': [that.data.useTime-1, e.detail.value[1]]
      });

    }
    
  },
  //二项选择
  handleDateFieldClick2: function (e) {
    this.setData({
      'pickerSecond.show': true
    });
  },
  hideDatePopup2() {
    this.setData({
      'pickerSecond.show': false
    });
  },
  //还车时间取消
  cancel2: function () {
    this.hideDatePopup2();
  },
  //还车时间确定
  ok2: function () {
    this.hideDatePopup2();
    if(this.data.type==1){
      this.calculateHours()
    }
    
  },
  choiceHours(e) {
    var that = this
    //选择用车时长（单位：小时）
    that.setData({
      useTime: that.data.pickerSecond.hours[e.detail.value[0]]
    })

    that.calculateHours()
  },
  calculateHours(){
    var that = this
    console.log(that.data.pickerViewConfig1.value[1])
    var useTime = that.data.useTime
    var getHours = parseInt(that.data.pickerViewConfig1.time[that.data.pickerViewConfig1.value[1]].substring(0, 2))
    // var getHours = that.data.pickerViewConfig1.value[1]?parseInt(that.data.pickerViewConfig1.time[that.data.pickerViewConfig1.value[1]].substring(0, 2)):''
    var count = parseInt(useTime) + parseInt(getHours)
    console.log('使用时长' + useTime+'小时')
    console.log("取车时间" + getHours+'：00整')
    console.log("useTime + getHours=" + count )


    //选择取车的整点数
    if (count < 24){

      console.log("用车时间在当天")

      that.setData({
        'pickerViewConfig2.time': that.data.pickerViewConfig1.time,
        'pickerViewConfig2.value': [that.data.pickerViewConfig1.value[0], that.data.pickerViewConfig1.value[1] + useTime*2],
      })

    }else{
      
      var tarNum = 0
      var startTime = that.data.pickerViewConfig1.value[1]?that.data.pickerViewConfig1.time[that.data.pickerViewConfig1.value[1]]:''
      console.log(startTime)
      var timeArr = startTime.split(":")
      var endTime = (String(useTime - (24 - getHours)).length == 2 ? String(useTime - (24 - getHours)) : '0'+String(useTime - (24 - getHours))) + ":" + String(timeArr[1])
      console.log("endTime=" + endTime)
      console.log("用车时间超过24:00")
      that.setData({
        'pickerViewConfig2.time': that.data.sortHours,
      })
      

      for (var i in that.data.sortHours){
        if (endTime==that.data.sortHours[i]){
          console.log("i="+i)
          tarNum = i

        }
      }



      that.setData({
        'pickerViewConfig2.value': [that.data.pickerViewConfig1.value[0] + 1, tarNum],
      })

    }

    console.log("----------------------")



  },
  choiceDays(e){
    var that = this
    var useDay = that.data.pickerSecond.days[e.detail.value[0]]
    //选择用车时长（单位：天）
    that.setData({
      useTime: useDay,
      day: parseInt(useDay),
      'pickerViewConfig2.value': [0, that.data.pickerViewConfig1.value[1]]
    })

    var date = that.data.pickerViewConfig1.year[that.data.pickerViewConfig1.value[0]].FullDate
    var dates = ext.getDateAndWeek(date, useDay);
    that.setData({
      'pickerViewConfig2.year': dates,
      'pickerViewConfig2.value': [0,that.data.pickerViewConfig1.value[1]]
    });


  },
  choiceMonths(e){

    var that = this
    var useMonth = that.data.pickerSecond.months[e.detail.value[0]]

    //选择用车时长（单位：个月）
    that.setData({
      useTime: useMonth,
      'pickerViewConfig2.value': [0, useMonth]
    })

    var date = that.data.pickerViewConfig1.year[that.data.pickerViewConfig1.value[0]].FullDate
    // var dates = ext.getDateAndWeek(date, useMonth);
    var dates2 = ext.getDateAndWeek(date, that.data.day);
    that.setData({
      'pickerViewConfig2.year': dates2,
      'pickerViewConfig2.value': [useMonth-1, that.data.pickerViewConfig1.value[1]]
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
    if (this.data.type == 1) {
      this.calculateHours()
      console.log("1111111111111")
    }


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