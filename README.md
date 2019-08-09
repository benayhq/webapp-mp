## 前言
初学taro 开发小程序 时在网上搜索taro 实战项目源码, 无赖大部分多是简单demo，对于深入研究没什么太大的帮助,交互没有预期那么复杂，但实际工作中，经常会遇到购物车，支付这类项目，涉及money,页面之间交互复杂，又会伴随着登录、注册、用户信息等等。

此项目涉及注册、登录、商品展示、购物车、下单、拼团等等，是一个完整的流程。整个项目还在不断的完善和不断优化当中。增加详细的注释.

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


## 项目结构

```
.
├── build                                       // webpack配置文件
├── config                                      // 项目打包路径
├── elm                                         // 上线项目文件，放在服务器即可正常访问
├── screenshots                                 // 项目截图
├── src                                         // 源码目录
│   ├── components                              // 组件
│   │   ├── common                              // 公共组件
│   │   │   ├── alertTip.vue                    // 弹出框组件
│   │   │   ├── buyCart.vue                     // 购物车组件
│   │   │   ├── computeTime.vue                 // 倒计时组件
│   │   │   ├── loading.vue                     // 页面初始化加载数据的动画组件
│   │   │   ├── mixin.js                        // 组件混合(包括：指令-下拉加载更多，处理图片地址)
│   │   │   ├── ratingStar.vue                  // 评论的五颗星组件
│   │   │   └── shoplist.vue                    // msite和shop页面的餐馆列表公共组件
│   │   ├── footer
│   │   │   └── footGuide.vue                   // 底部公共组件
│   │   └── header
│   │       └── head.vue                        // 头部公共组件
│   ├── config                                  // 基本配置
.
```
