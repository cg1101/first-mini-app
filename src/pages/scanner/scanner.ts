Page({
  data: {
    title: 'Scanner',
    codeOptions: [
      { key: 'barCode', label: 'Bar Code' },
      { key: 'qrCode', label: 'QR Code' },
      { key: 'datamatrix', label: 'Data Matrix Code' },
      { key: 'pdf417', label: 'PDF 417 Code' },
    ]
  },
  scan() {
    console.log('this.onSuccess', this.onSuccess);
    console.log('this.onFailure', this.onFailure);
    console.log('this.onComplete', this.onComplete);
    const success = this.onSuccess.bind(this);
    const fail = this.onFailure.bind(this);
    const complete = this.onComplete.bind(this);
    console.log('success', success);
    console.log('fail', fail);
    console.log('complete', complete);
    wx.scanCode({
      onlyFromCamera: false,
      scanType: ['barCode', 'qrCode'],
      success,
      fail,
      complete,
    })
  },
  onSuccess(result: any) {
    console.log('scan succeed', result);
  },
  onFailure() {
    console.log('scan failed');
  },
  onComplete() {
    console.log('scan completed');
  },
})