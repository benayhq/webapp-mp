## 前言
初学taro 开发小程序 时在网上搜索taro 实战项目源码, 无赖大部分多是简单demo，对于深入研究没什么太大的帮助,交互没有预期那么复杂，但实际工作中，经常会遇到购物车，支付这类项目，涉及money,页面之间交互复杂，又会伴随着登录、注册、用户信息等等。

此项目涉及注册、登录、商品展示、购物车、下单、拼团、生成海报等等，是一个完整的流程。整个项目还在不断的完善和不断优化当中。增加详细的注释.

## 技术栈
taro + redux + react + es6 + fetch + sass

## 项目运行
```
git clone https://github.com/xiangxiong/webapp-mp.git

cd webapp-mp

yarn install

npm run dev:weapp
```

## 部分截图

<img src="https://github.com/xiangxiong/webapp-mp/blob/master/img/home.png" width="365" height="619"/> <img src="https://github.com/xiangxiong/webapp-mp/blob/master/img/userCenter.gif" width="365" height="619"/>

## 项目结构
```
.
├── config                                      // 配置文件
├── dist                                        // 项目打包路径
├── src                                         // 源码目录
│   ├── components                              // 组件
│   │   ├── button                              
│   │   │   ├── index.js                        // 微信登录
│   │   ├── checkbox                              
│   │   │   ├── index.js                        // 选择列表组件
│   │   ├── loading                              
│   │   │   ├── index.js                        // 加载组件
│   │   ├── modal                              
│   │   │   ├── index.js                        // 弹窗
│   │   ├── product                              
│   │   │   ├── index.js                        // 产品列表
│   │   ├── taro-plugin-canvas                              
│   │   │   ├── index.js                        // canvas 生成海报组件
│   ├── constants                               // 组件
│   │   ├── api.js                              // api 接口常量
│   ├── pages                                   // 组件
│   │   ├── active                              // 活动模块
│   │   │   ├── store                           
│   │   │   │   ├── actionCreators.js    
│   │   │   │   ├── constants.js   
│   │   │   │   ├── index.js   
│   │   │   │   ├── reducer.js              
│   │   ├── order                               // 订单模块
│   │   ├── p2p                                 // 贷款模块
│   │   ├── pay                                 // 支付模块
│   │   ├── product                             // 产品模块
│   │   ├── user                                // 用户中心
│   │   ├── utils                               // 工具类
│   ├── store                                   
│   │   ├── index.js                            // 全局store
│   ├── style                                   
│   │   ├── mixins                              // 公用的css 模块
│   │   │   ├── default.scss                    // 全局sass变量
│   │   ├── base.scss                           // 主题样式
│   │   ├── element.scss                        // 抽象布局 scss
│   │   ├── icon.scss                           // iconfont scss
│   ├── utils                                   // 通用公用 js
│   ├── app.js                                  // 小程序入口
│   ├── app.scss                                // 主题样式
.
```