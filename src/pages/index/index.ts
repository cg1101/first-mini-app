// index.ts
// 获取应用实例
const app = getApp<IAppOption>();

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    showTabBar: true,
    multiArray: [
      ['无脊柱动物', '脊柱动物'],
      ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'],
      ['猪肉绦虫', '吸血虫'],
    ],
    objectMultiArray: [
      [
        { id: 0, name: '无脊柱动物' },
        { id: 1, name: '脊柱动物' }
      ],
      [
        { id: 0, name: '扁性动物' },
        { id: 1, name: '线形动物' },
        { id: 2, name: '环节动物' },
        { id: 3, name: '软体动物' },
        { id: 3, name: '节肢动物' }
      ],
      [
        { id: 0, name: '猪肉绦虫' },
        { id: 1, name: '吸血虫' }
      ]
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
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'];
            data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
            break;
          case 1:
            data.multiArray[1] = ['鱼', '两栖动物', '爬行动物'];
            data.multiArray[2] = ['鲫鱼', '带鱼'];
            break;
        }
        data.multiIndex[1] = 0;
        data.multiIndex[2] = 0;
        break;
      case 1:
        switch (data.multiIndex[0]) {
          case 0:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
                break;
              case 1:
                data.multiArray[2] = ['蛔虫'];
                break;
              case 2:
                data.multiArray[2] = ['蚂蚁', '蚂蟥'];
                break;
              case 3:
                data.multiArray[2] = ['河蚌', '蜗牛', '蛞蝓'];
                break;
              case 4:
                data.multiArray[2] = ['昆虫', '甲壳动物', '蛛形动物', '多足动物'];
                break;
            }
            break;
          case 1:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['鲫鱼', '带鱼'];
                break;
              case 1:
                data.multiArray[2] = ['青蛙', '娃娃鱼'];
                break;
              case 2:
                data.multiArray[2] = ['蜥蜴', '龟', '壁虎'];
                break;
            }
            break;
        }
        data.multiIndex[2] = 0;
        break;
    }
    console.log(data.multiIndex);
    this.setData(data);
  },
})
