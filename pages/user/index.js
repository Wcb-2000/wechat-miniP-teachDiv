// pages/my/my.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
     // 判断用户信息和授权按钮的显示隐藏
     canIUse: false,
     // 昵称
     nickName: "",
     // 头像
     userUrl: "",
     // 订单数组
     orderList:[
        {
           img:"../../images/allorder.png",
           text:"全部订单"
        },
        {
           img:"../../images/payment.png",
           text:"待付款"
        },
        {
           img:"../../images/recevied.png",
           text:"待收货"
        }
     ]
  },

  topic_preview:function(e){
   console.log(e.currentTarget.dataset.index);
   var index = e.currentTarget.dataset.index;
   var imgArr = this.data.imgArr;
   wx.previewImage({
     current: imgArr[index],     //当前图片地址
     urls: imgArr,               //所有要预览的图片的地址集合 数组形式
     success: function(res) {},
     fail: function(res) {},
     complete: function(res) {},
   })
 },
 //获取用户信息
 getUserProfile() {
   wx.getUserProfile({
     desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
     success: (res) => {
       console.log("获取用户信息成功", res)
       let user = res.userInfo
       this.setData({
         canIUse: true,
         userInfo: user,
       })
       user.openid = app.globalData.openid;
       app._saveUserInfo(user);
     },
     fail: res => {
       console.log("获取用户信息失败", res)
     }
   })
 },

  // 点击跳转到订单页面
  toOrder:function(event){
   var index = event.target.dataset.index
   wx.navigateTo({
     url: '/pages/order/order?index='+index,
   })
},

  // 点击跳转到我的地址界面
  toMyLocation:function(){
   wx.navigateTo({
     url: '/pages/address/address',
   })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   var that = this;
   var user = app.globalData.userInfo;
   // if (user) {
   //   // that.setData({
   //   //  isShowUserName: true,
   //   //  userInfo: user,
   //   // })
   // } else {
   //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
   //   // 所以此处加入 callback 以防止这种情况
   //   app.userInfoReadyCallback = res => {
   //     that.setData({
   //       userInfo: res.userInfo,
   //       isShowUserName: true
   //     })
   //   }
   // }
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
   var user = app.globalData.userInfo;
   if (user && user.nickName) {
     this.setData({
       isShowUserName: true,
       userInfo: user,
     })
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