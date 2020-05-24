export type IQuery = Record<string, string>;

export interface RefererInfo {
  appId: string;
  extraData: object;
}

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/reference/scene-list.html
 */
export type WeChatScene =
  | 1000 // 其他 	/
  | 1001 // 发现栏小程序主入口，「最近使用」列表（基础库2.2.4版本起包含「我的小程序」列表） 	/
  | 1005 // 微信首页顶部搜索框的搜索结果页 	查看
  | 1006 // 发现栏小程序主入口搜索框的搜索结果页 	查看
  | 1007 // 单人聊天会话中的小程序消息卡片 	查看
  | 1008 // 群聊会话中的小程序消息卡片 	查看
  | 1011 // 扫描二维码 	查看
  | 1012 // 长按图片识别二维码 	查看
  | 1013 // 扫描手机相册中选取的二维码 	查看
  | 1014 // 小程序模板消息 	查看
  | 1017 // 前往小程序体验版的入口页 	查看
  | 1019 // 微信钱包（微信客户端7.0.0版本改为支付入口） 	查看
  | 1020 // 公众号 profile 页相关小程序列表（已废弃） 	查看
  | 1022 // 聊天顶部置顶小程序入口（微信客户端6.6.1版本起废弃） 	/
  | 1023 // 安卓系统桌面图标 	查看
  | 1024 // 小程序 profile 页 	查看
  | 1025 // 扫描一维码 	查看
  | 1026 // 发现栏小程序主入口，「附近的小程序」列表 	查看
  | 1027 // 微信首页顶部搜索框搜索结果页「使用过的小程序」列表 	查看
  | 1028 // 我的卡包 	查看
  | 1029 // 小程序中的卡券详情页 	查看
  | 1030 // 自动化测试下打开小程序 	/
  | 1031 // 长按图片识别一维码 	查看
  | 1032 // 扫描手机相册中选取的一维码 	查看
  | 1034 // 微信支付完成页 	查看
  | 1035 // 公众号自定义菜单 	查看
  | 1036 // App 分享消息卡片 	查看
  | 1037 // 小程序打开小程序 	查看
  | 1038 // 从另一个小程序返回 	查看
  | 1039 // 摇电视 	查看
  | 1042 // 添加好友搜索框的搜索结果页 	查看
  | 1043 // 公众号模板消息 	查看
  | 1044 // 带 shareTicket 的小程序消息卡片 详情 	查看
  | 1045 // 朋友圈广告 	查看
  | 1046 // 朋友圈广告详情页 	查看
  | 1047 // 扫描小程序码 	查看
  | 1048 // 长按图片识别小程序码 	查看
  | 1049 // 扫描手机相册中选取的小程序码 	查看
  | 1052 // 卡券的适用门店列表 	查看
  | 1053 // 搜一搜的结果页 	查看
  | 1054 // 顶部搜索框小程序快捷入口（微信客户端版本6.7.4起废弃） 	/
  | 1056 // 聊天顶部音乐播放器右上角菜单 	查看
  | 1057 // 钱包中的银行卡详情页 	查看
  | 1058 // 公众号文章 	查看
  | 1059 // 体验版小程序绑定邀请页 	/
  | 1064 // 微信首页连Wi-Fi状态栏 	查看
  | 1067 // 公众号文章广告 	查看
  | 1068 // 附近小程序列表广告（已废弃） 	/
  | 1069 // 移动应用 	查看
  | 1071 // 钱包中的银行卡列表页 	查看
  | 1072 // 二维码收款页面 	查看
  | 1073 // 客服消息列表下发的小程序消息卡片 	查看
  | 1074 // 公众号会话下发的小程序消息卡片 	查看
  | 1077 // 摇周边 	查看
  | 1078 // 微信连Wi-Fi成功提示页 	查看
  | 1079 // 微信游戏中心 	查看
  | 1081 // 客服消息下发的文字链 	查看
  | 1082 // 公众号会话下发的文字链 	查看
  | 1084 // 朋友圈广告原生页 	查看
  | 1088 // 会话中查看系统消息，打开小程序 	/
  | 1089 // 微信聊天主界面下拉，「最近使用」栏（基础库2.2.4版本起包含「我的小程序」栏） 	查看
  | 1090 // 长按小程序右上角菜单唤出最近使用历史 	查看
  | 1091 // 公众号文章商品卡片 	查看
  | 1092 // 城市服务入口 	查看
  | 1095 // 小程序广告组件 	查看
  | 1096 // 聊天记录，打开小程序 	查看
  | 1097 // 微信支付签约原生页，打开小程序 	查看
  | 1099 // 页面内嵌插件 	/
  | 1102 // 公众号 profile 页服务预览 	查看
  | 1103 // 发现栏小程序主入口，「我的小程序」列表（基础库2.2.4版本起废弃） 	/
  | 1104 // 微信聊天主界面下拉，「我的小程序」栏（基础库2.2.4版本起废弃） 	/
  | 1106 // 聊天主界面下拉，从顶部搜索结果页，打开小程序 	/
  | 1107 // 订阅消息，打开小程序 	/
  | 1113 // 安卓手机负一屏，打开小程序（三星） 	/
  | 1114 // 安卓手机侧边栏，打开小程序（三星） 	/
  | 1124 // 扫“一物一码”打开小程序 	/
  | 1125 // 长按图片识别“一物一码” 	/
  | 1126 // 扫描手机相册中选取的“一物一码” 	/
  | 1129 // 微信爬虫访问 详情 	/
  | 1131 // 浮窗打开小程序 	/
  | 1133 // 硬件设备打开小程序 详情 	/
  | 1135 // 小程序资料页打开小程序 	查看
  | 1146 // 地理位置信息打开出行类小程序 	查看
  | 1148 // 卡包-交通卡，打开小程序 	/
  | 1150 // 扫一扫商品条码结果页打开小程序 	查看
  | 1153 // “识物”结果页打开小程序

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/api/base/app/life-cycle/wx.getLaunchOptionsSync.html
 */
export interface AppLaunchOptions {
  path: string;
  scene: WeChatScene;  // enum
  query: object;
  shareTicket: string;
  refererInfo?: RefererInfo; // depending on scene, refererInfo may not be available
}

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAppShow.html
 */
export interface AppShowOptions extends AppLaunchOptions {};

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onPageNotFound.html
 */
export interface PageNotFoundOptions {
  path: string;
  query: object;
  isEntryPage: boolean;
}

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onUnhandledRejection.html
 */
export interface UnhandledRejectionOptions {
  reason: string;
  promise: Promise<any>;
}

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onThemeChange.html
 */
export interface ThemeChangeOptions {
  theme: 'light' | 'dark';
}

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html
 */
export interface WeChatMiniProgramApp {
  onLaunch: (options: AppLaunchOptions) => void;
  onShow: (options: AppShowOptions) => void;
  onHide: () => void;
  onError: (error: string) => void;
  onPageNotFound: (options: PageNotFoundOptions) => void;
  onUnhandledRejection: (options: UnhandledRejectionOptions) => void;
  onThemeChange: (options: ThemeChangeOptions) => void;
}

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onPageScroll-Object-object
 */
export interface PageScrollOptions {
  scrollTop: number; // 页面在垂直方向已滚动的距离（单位px）
}

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onResize-Object-object
 * @see https://developers.weixin.qq.com/miniprogram/dev/framework/view/resizable.html
 * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/window/wx.onWindowResize.html
 */
export interface ResizeOptions {
  size: {
    windowWidth: number; // 变化后的窗口宽度，单位 px
    windowHeight: number; // 变化后的窗口高度，单位 px
  };
}

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onTabItemTap-Object-object
 */
export interface TabItemTapOptions {
  index: string;
  pagePath: string;
  text: string;
}

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html
 */
export interface WeChatMiniProgramPage {
  data: Record<string, any>;
  onLoad: (query: IQuery) => void;
  onShow: () => void;
  onReady: () => void;
  onHide: () => void;
  onUnload: () => void;
  onPullDownRefresh: () => void;
  onReachBottom: () => void;
  onShareAppMessage: () => void;
  onPageScroll: (options: PageScrollOptions) => void;
  onResize: (options: ResizeOptions) => void;
  onTabItemTap: (options: TabItemTapOptions) => void;
}

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

/*
import { BasePage, IQuery } from '../../wechat/index';

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
Page(new CheckoutPage());
*/
