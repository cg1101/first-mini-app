# Mini Program Reference

## [指南](https://developers.weixin.qq.com/miniprogram/dev/framework/)

### [起步](https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/)

小程序简介

    小程序技术发展史
    小程序与普通网页开发的区别
    体验小程序

开始

    申请帐号
    安装开发者工具
    你的第一个小程序
    编译预览

小程序代码构成

    JSON 配置
    WXML 模板
    WXSS 样式
    JS 逻辑交互

小程序宿主环境

    渲染层和逻辑层
    程序与页面
    组件
    API

小程序协同工作和发布

    协同工作
    小程序的版本
    发布上线
    运营数据

小程序开发指南
### [目录结构](https://developers.weixin.qq.com/miniprogram/dev/framework/structure.html)

### [配置小程序](https://developers.weixin.qq.com/miniprogram/dev/framework/config.html)

    全局配置
    页面配置
    sitemap 配置

### [小程序框架](https://developers.weixin.qq.com/miniprogram/dev/framework/MINA.html)

    场景值
    逻辑层
        注册小程序
        注册页面
        页面生命周期
        页面路由
        模块化
        API
    视图层
        WXML
        WXSS
        WXS
        事件系统
            WXS 响应事件
        简易双向绑定
        基础组件
        获取界面上的节点信息
        响应显示区域变化
        动画

### [小程序运行时](https://developers.weixin.qq.com/miniprogram/dev/framework/runtime/env.html)

    运行环境
    JavaScript 支持情况
    运行机制
    更新机制

### [自定义组件](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/)

    组件模板和样式
    Component 构造器
    组件间通信与事件
    组件生命周期
    behaviors
    组件间关系
    数据监听器
    纯数据字段
    抽象节点
    自定义组件扩展
    开发第三方自定义组件
    单元测试

### [插件](https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/)

    开发插件
    使用插件
    插件调用 API 的限制
    插件使用组件的限制
    插件功能页
        用户信息功能页
        支付功能页
        收货地址功能页

### [基础能力](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html)

网络

    使用说明
    局域网通信

存储
文件系统
画布
分包加载

    使用分包
    独立分包
    分包预下载

多线程 Worker
服务端能力

    服务端 API
    消息推送

自定义 tabBar
周期性更新
数据预拉取
DarkMode 适配指南

### [硬件能力](https://developers.weixin.qq.com/miniprogram/dev/framework/device/bluetooth.html)

    蓝牙
    NFC
    Wi-Fi

### [开放能力](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html)

用户信息

    小程序登录
    UnionID 机制说明
    授权
    开放数据校验与解密
    获取手机号
    生物认证

转发

    转发
    动态消息

打开 App
消息

    订阅消息
    统一服务消息
    客服消息
        概述
        接收消息和事件
        发送消息
        转发消息
        下发客服输入状态
        临时素材
    位置消息

卡券

    概述
    会员卡组件

获取小程序码
数据分析
附近的小程序
微信物流助手接口文档

    快递接口（商家查看）
        文档说明
            产品简介
            版本说明
        接口规则
            协议规则
            快递公司信息
        相关接口和事件
        下载打单软件
        常见问题
        沙盒测试
        联系我们
    快递接口（快递公司查看）
    即时配送接口（商家查看）
        概述
        版本说明
        配送公司信息
        开发必读
        相关接口和事件
        附录 1：品类表
        附录 2：order_status 枚举值
        沙盒测试
        常见问题
        联系我们

广告

    Banner 广告
    激励视频广告
    插屏广告
    视频广告
    视频前贴广告
    格子广告
    广告数据接口
        广告汇总数据
        广告细分数据
        广告位清单
        结算收入数据

### [安全指引](https://developers.weixin.qq.com/miniprogram/dev/framework/security.html)

    开发原则与注意事项
    通用
        接口鉴权
        代码管理与泄漏
        信息泄露
    后台
        注入漏洞
        弱口令
        文件上传漏洞
        文件下载
        目录遍历
        条件竞争

### [企业微信兼容](https://developers.weixin.qq.com/miniprogram/dev/dev_wxwork/)

### [调试](https://developers.weixin.qq.com/miniprogram/dev/framework/usability/debug.html)

### [优化](https://developers.weixin.qq.com/miniprogram/dev/framework/performance/)

    优化建议
        启动优化
    分析工具
    体验评分
        体验评分简介
        评分方法与规则
            评分方法
            性能
            体验
            最佳实践

### [基础库](https://developers.weixin.qq.com/miniprogram/dev/framework/client-lib/)

    版本分布
    低版本兼容

### [实时日志](https://developers.weixin.qq.com/miniprogram/dev/framework/realtimelog/)
### [小程序测速](https://developers.weixin.qq.com/miniprogram/dev/framework/performanceReport/)
### [小程序搜索](https://developers.weixin.qq.com/miniprogram/dev/framework/search/seo.html)

    小程序搜索优化指南
    商品数据接入（内测）

### [小程序直播](https://developers.weixin.qq.com/miniprogram/dev/framework/liveplayer/live-player-plugin.html)

    接入说明
    小程序直播商品管理接口

### [城市服务](https://developers.weixin.qq.com/miniprogram/dev/framework/cityservice/cityservice-safety-specifications.html)

    城市服务接入安全检测
    城市服务消息通路接口
    城市服务快速填写组件
    城市服务实名信息校验

## [框架](https://developers.weixin.qq.com/miniprogram/dev/reference/)
## [组件](https://developers.weixin.qq.com/miniprogram/dev/component/)
## [API](https://developers.weixin.qq.com/miniprogram/dev/api/)
## [服务端](https://developers.weixin.qq.com/miniprogram/dev/api-backend/)
## [工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/devtools)
## [云开发](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started)
## [扩展能力](https://developers.weixin.qq.com/miniprogram/dev/extended/)
## [更新日志](https://developers.weixin.qq.com/miniprogram/dev/framework/release/)
