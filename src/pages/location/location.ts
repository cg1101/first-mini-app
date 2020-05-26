Page({
  data: {
    location: '',
  },
  getLocation() {
    const success = this.getLocationSucceeded.bind(this);
    const fail = this.getLocationFailed.bind(this);
    wx.getLocation({
      type: 'wgs84',
      success,
      fail,
    });
  },
  getLocationSucceeded(e: any) {
    console.log('succeeded->>', e);
    wx.showToast({
      title: '成功获取您的位置',
      icon: 'success',
      duration: 2000
    });
    this.setData({ location: JSON.stringify(e)});
  },
  getLocationFailed(e: any) {
    console.log('failed->>', e);
    wx.showModal({
      title: '获取位置失败',
      content: '获取定位失败，请点击右下角按钮打开定位权限'
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
      // try again
      const { location } = this.data;
      if (!location) {
        this.getLocation();
      }
    } else {
      console.log('permission not granted');
    }
  },
});
