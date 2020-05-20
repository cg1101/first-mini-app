Page({
  data: {
    form0: {
      name: '',
      registered: false,
    },
    form1: {

    },
  },
  onLoad() {

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