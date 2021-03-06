// features.ts

Page({
  data: {
    features: [
      { name: 'form', label: 'Form' },
      { name: 'camera', label: 'Camera' },
      { name: 'map', label: 'Map' },
      { name: 'canvas', label: 'Canvas' },
      { name: 'video', label: 'Video' },
      { name: 'audio', label: 'Audio' },
      { name: 'scanner', label: 'Scanner' },
      { name: 'location', label: 'Get Location' },
      { name: 'address', label: 'Get Address' },
    ],
  },
  showFeature(e: any) {
    console.log('event->', e);
    const { feature } = e.currentTarget.dataset;
    wx.navigateTo({url: `/pages/${feature}/${feature}`});
  },
})
