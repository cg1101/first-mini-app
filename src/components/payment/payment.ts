Component({
  properties: {
    title: {
      type: String,
      value: '请选择支付方式',
    },
  },
  data: {
  },
  methods: {
    validateCreditCardInfo() {
      console.log('validate credit card info');
    },
    bindTap1(e: any) {
      console.log(`component payment tapped`, e);
      this.triggerEvent('payTypeSelected', {payType: 'wechat'}, {});
    },
    bindTap2(e: any) {
      console.log(`component payment tapped`, e);
      this.triggerEvent('payTypeSelected', {payType: 'balance'}, {});
    },
    bindTap3(e: any) {
      console.log(`component payment tapped`, e);
    }
  },
});
