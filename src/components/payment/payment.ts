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
    }
  },
});
