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
    payType: 0,
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: '',
    showCardInfo: false,
    $valid: false,
  },
  observers: {
    // here we must use function expression instead of arrow function
    // because of arrow function's lack of bindings for `this`
    'cardNumber, expiryMonth, expiryYear, cvv': function cardInfoObserver(
      cardNumber: string, expiryMonth: string, expiryYear: string, cvv: string,
    ) {
      const $valid = this.validateCreditCardInfo(cardNumber, expiryMonth, expiryYear, cvv);
      this.setData({ $valid });
    }
  },
  methods: {
    validateCreditCardInfo(
      cardNumber: string,
      expiryMonth: string,
      expiryYear: string,
      cvv: string,
    ) {
      console.log('validate credit card info');
      const cardType = CreditCard.getCardType(cardNumber);
      const isCvvOkay = /^\d{3,}$/.test(cvv);
      return CreditCard.luhnCheck(cardNumber) &&
        CreditCard.checkCreditCard(cardNumber, cardType) &&
        CreditCard.dateCheck(expiryMonth, expiryYear) &&
        isCvvOkay;
    },
    usePayTypeWeChat(e: any) {
      console.log(`component payment tapped`, e);
      const details = {
        payType: PayType.WECHAT,
        showCardInfo: false,
        $valid: true,
      };
      this.setData(details);
      this.triggerEvent('payTypeSelected', details, {});
    },
    usePayTypeBalance(e: any) {
      console.log(`component payment tapped`, e);
      const details = {
        payType: PayType.BALANCE,
        showCardInfo: false,
        $valid: true,
      };
      this.setData(details);
      this.triggerEvent('payTypeSelected', details, {});
    },
    usePayTypeCreditCard(e: any) {
      console.log(`component payment tapped`, e);
      const { cardNumber, expiryMonth, expiryYear, cvv } = this.data;
      const $valid = this.validateCreditCardInfo(cardNumber, expiryMonth, expiryYear, cvv);
      this.setData({
        payType: PayType.CREDIT_CARD,
        showCardInfo: true,
        $valid,
      });
    },
    updateCardNumber(e: any) {
      // console.log('updateCardNumber()', e);
      const { value: cardNumber } = e.detail;
      this.setData({ cardNumber });
    },
    updateExpiryMonth(e: any) {
      // console.log('updateExpiryMonth()', e);
      const { value: expiryMonth } = e.detail;
      this.setData({ expiryMonth });
    },
    updateExpiryYear(e: any) {
      // console.log('updateExpiryYear()', e);
      const { value: expiryYear } = e.detail;
      this.setData({ expiryYear });
    },
    updateCvv(e: any) {
      // console.log('updateCvv()', e);
      const { value: cvv } = e.detail;
      this.setData({ cvv });
    },
  },
});
