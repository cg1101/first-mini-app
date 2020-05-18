// logs.ts
// const util = require('../../utils/util.js')
import { formatTime } from '../../utils/util'

Page({
  data: {
    logs: [],
  },
  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map((log: string) => {
        console.log(`log->${log}`);
        return formatTime(new Date(log))
      }),
    })
  },
  onShow() {
    console.log('logs.onShow()');
  },
})
