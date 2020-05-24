import { WeChatMiniProgramPage, IQuery } from './index';
import { api } from '../utils';

export class BasePage implements WeChatMiniProgramPage {
  data = {};
  onLoad(query: IQuery) {}
  onShow() {}
  onReady() {}
  onHide() {}
  onUnload() {}
  onPullDownRefresh() {}
  onReachBottom() {}
  onShareAppMessage() {}
  onPageScroll() {}
  onResize() {}
  onTabItemTap() {}
}

class CheckoutPage extends BasePage {
  data = {
    paymentTitle: 'test!!',
  };
  onLoad(options: IQuery) {
    console.log('checkout.onLoad()', options);
    const { order_type, goods_id, goods_num, goods_sku_id } = options;
    api.getOrder({ order_type, goods_id, goods_num, goods_sku_id })
      .then((resp: any) => {
        console.log('received result', resp);
      });
  }
}

// Page(new CheckoutPage());

