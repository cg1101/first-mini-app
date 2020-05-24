import { PayType } from '../../models/index';

Component({
  properties: {
    title: {
      type: String,
      value: '请选择支付方式',
    },
  },
  data: {
    payType: PayType.WECHAT,
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: '',
    $valid: true,
  },
  methods: {
    validateCreditCardInfo() {
      console.log('validate credit card info');
    },
    usePayTypeWeChat(e: any) {
      console.log(`component payment tapped`, e);
      const details = { payType: PayType.WECHAT, $valid: true}
      this.setData(details);
      this.triggerEvent('payTypeSelected', details, {});
    },
    usePayTypeBalance(e: any) {
      console.log(`component payment tapped`, e);
      const details = { payType: PayType.BALANCE, $valid: true}
      this.setData(details);
      this.triggerEvent('payTypeSelected', details, {});
    },
    usePayTypeCreditCard(e: any) {
      this.setData({ payType: PayType.CREDIT_CARD, $valid: true});
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
