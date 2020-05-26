Page({
  data: {
    address: '',
  },
  getAddress() {
    const success = this.getAddressSucceeded.bind(this);
    const fail = this.getAddressFailed.bind(this);
    wx.chooseAddress({
      success,
      fail,
    });
  },
  getAddressSucceeded(e: any) {
    console.log('succeeded->>', e);
    wx.showToast({
      title: '成功获取您的地址',
      icon: 'success',
      duration: 2000
    });
    this.setData({ address: JSON.stringify(e)});
  },
  getAddressFailed(e: any) {
    console.log('failed->>', e);
    wx.showModal({
      title: '获取地址失败',
      content: '获取地址失败，请点击右下角按钮打开获取位置权限'
    });
  },
  openSettings() {
    const success = this.settingsUpdated.bind(this);
    wx.openSetting({ success });
  },
  settingsUpdated(res: any) {
    console.log('settingsUpdated() ->', res);
    if (res.authSetting["scope.userLocation"]) {
      console.log('permission granted');
    } else {
      console.log('permission not granted');
    }
  },
});
