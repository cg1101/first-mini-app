// index.ts
// 获取应用实例

import { suburbs } from '../../utils/suburbs';

const app = getApp<IAppOption>();

const getSuburbs = (state: string, letter: string) => suburbs[state]
  .filter((sub) => sub[0] === letter).sort();

const states = Object.keys(suburbs).sort();
const letters = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z'.split(/\s/);
const startsWith: string [] = getSuburbs(states[0], 'A');

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    showTabBar: true,
    multiArray: [
      states,
      letters,
      startsWith,
    ],
    multiIndex: [0, 0, 0],
  },
  // 事件处理函数
  bindViewTap() {
    console.log('go to logs page');
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  onLoad(options: any) {
    console.log('onLoad()', options);
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true,
          })
        },
      })
    }
  },
  onShow() {
    console.log('index.onShow()');
  },
  getUserInfo(e: any) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
    })
  },
  toggleTabBar(e: any) {  // cannot include DOM in lib of tsconfig due to conflicts
    console.log('toggleTabBar(e)', e);
    const showTabBar = !this.data.showTabBar;
    this.setData({showTabBar});
    if (showTabBar) {
      // console.log('show tab bar');
      wx.showTabBar({});
    } else {
      // console.log('hide tab bar');
      wx.hideTabBar({});
    }
  },
  checkout(e: any) {
    console.log('should checkout->', e);
    wx.navigateTo({
      url: '/pages/checkout/checkout?order_type=buyNow&goods_id=10002&goods_num=1&goods_sku_id=0',
    });
  },
  bindMultiPickerChange(e: any) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindMultiPickerColumnChange(e: any) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    const { column, value } = e.detail;
    const { multiArray, multiIndex } = this.data;
    multiIndex[column] = value;
    const state = states[multiIndex[0]];
    const letter = letters[multiIndex[1]];
    if (column < 2) {
      multiArray[2] = getSuburbs(state, letter);
    }
    this.setData({ multiArray, multiIndex });
  },
})
