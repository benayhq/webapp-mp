const mtjwxsdk = require('./utils/mtj-wx-sdk.js');
import Taro, { Component } from '@tarojs/taro'
import '@tarojs/async-await'
import {Provider} from '@tarojs/redux';
import configStore from './store';
import Index from './pages/index'
import 'taro-ui/dist/style/index.scss'
import './custom-theme.scss'
import './app.scss';
import './utils/jmessage-wxapplet-sdk-1.4.0.min.js';
var JMessage=require('./utils/jmessage-wxapplet-sdk-1.4.0.min.js')

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
const store = configStore();

class App extends Component {
  config = {
    pages: [
      'pages/order/detail/index',
      'pages/user/index',
      'pages/user/info/edit',
      'pages/active/publish/index',
      'pages/active/share/index',
      'pages/product/index',
      'pages/product/add',
      'pages/product/edit',
      'pages/order/index',
      'pages/product/detail',
      'pages/order/submit/index',
      'pages/p2p/index',
      'pages/order/comment/index'
    ],
    window:{
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }
  
  componentDidMount () {
    this.init();
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  init(){
    this.initJMessage();
  }

  initJMessage(){
    var jim = new JMessage();
    jim.init({
      "appkey"    : "bb62a48cc54e300e2e58fa0b",
      "random_str": "<random_str>",
      "signature" : "<signature>",
      "timestamp" : "<timestamp>"
    }).onSuccess(function(data) {
      console.log('data',data);
      //TODO
    }).onFail(function(data) {
      console.log('data',data);
      //TODO
    });
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
        <Provider store={store}>
          <Index />
        </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
