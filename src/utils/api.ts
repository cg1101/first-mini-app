export enum OrderType {
  BARGIN = 'bargain',
  BUY_NOW = 'buyNow',
  CART = 'cart',
  SHARP = 'sharp',
}

export interface ShopResponse {
  code: number;
  msg: string;
  data: any;
}

const pathMap: Record<string, string> = {
  [OrderType.BUY_NOW]: '/api/order/buyNow',
  [OrderType.SHARP]: '/api/sharp.order/checkout',
  [OrderType.BARGIN]: ' /api/bargain.order/checkout',
  [OrderType.CART]: '/api/order/cart',
};

export class ShopApi {
  readonly wxapp_id = '10001';

  readonly token = 'e7e6d20952f389d96ed28b68172b670d';

  constructor(protected url: string = 'http://shop.pcfocus.com.au/index.php') { }

  async requestAsPromise(options: Record<string, any>): Promise<any> {
    const { header, method, formData, route } = options;
    const { token, url, wxapp_id } = this;
    const data = {
      ...formData,
      s: route,
      token,
      wxapp_id,
    }
    return new Promise((success, fail) => {
      wx.request({
        url,
        header,
        method,
        data,
        success,
        fail,
      });
    }).then((resp: any) => {
      console.log('resp->', resp);
      const { data } = resp;
      return data;
    });
  }

  async get<T = any>(route: string, query: Record<string, any>): Promise<T> {
    return this.requestAsPromise({
      route,
      method: 'GET',
      formData: query,
    }).then((result: any) => {
        return result as T;
      });
  }
  
  async post<T = any>(
    route: string,
    formData: Record<string, any>,
    query: Record<string, any> = {}
  ): Promise<T> {
    return this.requestAsPromise({
      route,
      header: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      method: 'POST',
      data: {
        ...formData,
        ...query,
      },
    }).then((result: any) => {
      return result as T;
    });
  }

  async getOrder(params: {
    order_type: string,
    goods_id: string | number,
    goods_num: string | number,
    goods_sku_id: string | number,
  }) {
    const { order_type, goods_id, goods_num, goods_sku_id } = params;
    const path = pathMap[order_type];
    const data = {
      s: path,
      goods_id, goods_num, goods_sku_id,
      delivery: 0,
      shop_id: 0,
      coupon_id: 0,
      is_use_points: 0,
    };
    console.log(path, goods_id, goods_num, goods_sku_id, path);
    return this.get(path, data);
  }
}

export const api = new ShopApi();
