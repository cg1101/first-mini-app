import { PayType } from '../../models/index';
import * as CreditCard from '../../utils/credit-card';

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
  observers: {
    // must use function expression, not arrow function because
    // arrow function's lack of bindings for `this`
    'cardNumber, expiryMonth, expiryYear, cvv': function (
      cardNumberEvent: any,
      expiryMonthEvent: any,
      expiryYearEvent: any,
      cvvEvent: any,
    ) {
      const { value: cardNumber } = cardNumberEvent;
      const { value: expiryMonth } = expiryMonthEvent;
      const { value: expiryYear } = expiryYearEvent;
      const { value: cvv } = cvvEvent;

      const cardType = CreditCard.getCardType(cardNumber);
      const isCvvOkay = /^\d{3,}$/.test(cvv);
      const $valid = CreditCard.luhnCheck(cardNumber) &&
        CreditCard.checkCreditCard(cardNumber, cardType) &&
        CreditCard.dateCheck(expiryMonth, expiryYear) &&
        isCvvOkay;
      this.setData({ $valid });
    }
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
    updateCardNumber(e: any) {
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
