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
  },
  onLoad() {

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
  }
})