export const PAY_BY_WECHAT = 10;
export const PAY_BY_BALANCE = 20;
export const PAY_BY_CREDIT_CARD = 30;

export enum PayType {
  WECHAT = 10,
  BALANCE = 20,
  CREDIT_CARD = 30,
}

export interface BaseResponse<T = any> {
  code: number;
  msg: string;
  data: T;
}

export interface MethodMap {
  [method: string]: <T>(...args: any[]) => Promise<T>;
}

export interface Routes {
  [serverPath: string]: MethodMap;
}

export interface LoginResponse {
  user_id: string;
  token: string;
}

export interface AddressCreationInput {
  name: string; // name of recipient
  phone: string; // phone of recipient
  // region: [string, string, string]; //
  province: string;
  city: string;
  district: string;
  street1: string;
  street2?: string;
}

export interface AddressUpdateInput {
  addressId: string | number;
  name: string; // name of recipient
  phone: string; // phone of recipient
  // region: [string, string, string]; //
  province: string;
  city: string;
  district: string;
  street1: string;
  street2?: string;
}

/**
 * Most order types accept following fields
 *
 *  delivery: number; // 配送方式
 *  shop_id: number; // 自提门店id
 *  linkman: string; //自提联系人
 *  phone: string; //自提联系电话
 *  coupon_id: number; // 优惠券id
 *  is_use_points: number; // 是否使用积分抵扣
 *  remark: string; // 买家留言
 *  pay_type: number; // 支付方式
 *  cc_no?: string; // credit card number
 *  cc_month?: string; // month of expiry
 *  cc_year?: string; // year of expiry
 *  cc_cvv?: string; // CVV or credit card
 */
export interface OrderInput {
  deliveryType: number;
  shopId: string | number;
  contact: string;
  phone: string;
  couponId: string | number;
  usePoints: boolean;
  remark: string;
  payType: number;
  creditCardNumber?: string;
  expiryMonth?: string;
  expiryYear?: string;
  cvv?: string;
}

export interface BargainOrderInput extends OrderInput {
  taskId: string | number;
  skuId: string;
}

export interface BuyNowOrderInput extends OrderInput {
  goodsId: string | number;
  quantity: number;
  skuId: string;
}

export interface CartOrderInput extends OrderInput {
  cartId: string | number;
}

export interface SharpOrderInput extends OrderInput {
  eventId: string | number;
  sharpGoodsId: string | number;
  skuId: string;
  quantity: number;
}

export interface SharingOrderInput extends OrderInput {
  activeId: string | number;
  goodsId: string | number;
  quantity: number;
  skuId: string;
}

export interface GoodsFeedback {
  goods_id: string | number;
  order_goods_id: string;
  score: number;
  content: string;
  image_list: string[];
  updated: string[];
}

export interface CreditCardInfo {
  creditCardNumber: string;
  expiryMonth: string;
  expiryYear: string;
  cvv: string;
}

export interface WithdrawRequestData {
  money: number;
  pay_type: number;
}
