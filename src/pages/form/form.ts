let timerId: number = NaN;

Page({
  data: {
    states: [
      { label: 'New South Wales', value: 'NSW' },
      { label: 'Australia Capital Teritory', value: 'ACT', disabled: true },
      { label: 'Victoria', value: 'VCT', checked: true },
      { label: 'Tasmania', value: 'TAS' },
      { label: 'West Australia', value: 'WA' },
    ],
    form0: {
      name: '',
      registered: false,
    },
    form1: {
      street1: '',
      street2: '',
      city: '',
      state: '',
      country: '',
      zip: '',
    },
    sliderDemo: {
      disabled: false,
      activeColor: 'blue',
      backgroundColor: 'darkgray',
      blockColor: 'lightgray',
      blockSize: '12',
      showValue: true,
    },
    iconDemo: {
      types: ['success', 'success_no_circle', 'info', 'warn',
        'waiting', 'cancel', 'download', 'search', 'clear'],
      typeIndex: 0,
      size: 23,
      color: 'green',
    },
    timer: {
      running: false,
      label: 'Start Timer',
    },
    progressDemo: {
      percent: 50,
      showInfo: true,
      radius: 2,
      fontSize: 16,
      strokeWidth: 2,
      active: false, // do not show progressing animation
      activeMode: 'backwards',
      isBackwards: true,
      duration: 30,
      activeColor: 'purple', // '#09BB07',
      backgroundColor: 'yellow', //'#EBEBEB',
    },
  },
  // lifecycle functions
  onLoad() {

  },
  onHide() {
    this.stopTimer();
  },
  startTimer() {
    timerId = setInterval(this.reportProgress.bind(this), 200);
    const timer = { ...this.data.timer, running: true, label: 'Stop Timer' };
    this.setData({ timer});
  },
  stopTimer() {
    if (timerId) {
      clearInterval(timerId);
      timerId = NaN;
      const timer = { ...this.data.timer, running: false, label: 'Start Timer' };
      this.setData({ timer});
    }
  },
  // event binding functions
  getUserInfoCallback(e: any) {
    console.log('trying to getUserInfo', e);
  },
  reportProgress() {
    const progressDemo = { ...this.data.progressDemo };
    let completion = progressDemo.percent;
    if (completion < 100) {
      completion += 1;
      progressDemo.percent = completion;
      this.setData({ progressDemo });
    }
    if (completion >= 100) {
      this.stopTimer();
    }
  },
  statesUpdated(e: any) {
    console.log('statesUpdated', e);
    console.log('data.states ->', this.data.states);
  },
  handleContact (e: any) {
    console.log(e.detail.path)
    console.log(e.detail.query)
  },
  submitForm(e: any) {
    console.log('submitForm()', e);
    const formId = e.target.id;
    const eventType = e.type;
    console.log(`form #${formId}: ${eventType}`);
  },
  resetForm(e: any) {
    console.log('resetForm()', e);
    const formId = e.target.id;
    const eventType = e.type;
    console.log(`form #${formId}: ${eventType}`);
  },
  changeIconType(e: any) {
    const typeIndex = e.detail.value;
    console.log(`Setting typeIndex to ${typeIndex}`);
    const iconDemo = { ...this.data.iconDemo, typeIndex };
    this.setData({ iconDemo });
  },
  activeEnd(e: any) {
    console.log('progress reported ends', e);
  },
  toggleTimer(e: any) {
    console.log('toggleTimer triggered', e);
    if (this.data.timer.running) {
      this.stopTimer();
    } else {
      this.startTimer();
    }
  },
  resetProgress() {
    const progressDemo = { ...this.data.progressDemo, percent: 0 };
    this.setData({ progressDemo });
  },
})
