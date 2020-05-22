// checkout.ts
import { api } from '../../utils/index';

Page({
  data: {
  },
  onLoad(options: any) {
    console.log('checkout.onLoad()', options);
    const { order_type, goods_id, goods_num, goods_sku_id } = options;
    api.getOrder({ order_type, goods_id, goods_num, goods_sku_id })
      .then((resp: any) => {
        console.log('received result', resp);
      });
  },
})
