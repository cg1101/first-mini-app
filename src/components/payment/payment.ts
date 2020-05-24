Component({
  properties: {
    title: {
      type: String,
      value: '请选择支付方式',
    },
  },
  data: {
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: '',
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
    },
    updateCardNo(e: any) {
      console.log('updateCardNumber()', e);
      const { detail: cardNumber } = e;
      this.setData({ cardNumber });
    },
    updateExpiryMonth(e: any) {
      console.log('updateExpiryMonth()', e);
      const { detail: expiryMonth } = e;
      this.setData({ expiryMonth });
    },
    updateExpiryYear(e: any) {
      console.log('updateExpiryYear()', e);
      const { detail: expiryYear } = e;
      this.setData({ expiryYear });
    },
    updateCvv(e: any) {
      console.log('updateCvv()', e);
      const { detail: cvv } = e;
      this.setData({ cvv });
    },
  },
});
