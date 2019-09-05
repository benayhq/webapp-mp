const mtjwxsdk = require('./utils/mtj-wx-sdk.js');
import Taro, { Component } from '@tarojs/taro'
import '@tarojs/async-await'
import {Provider} from '@tarojs/redux';
import configStore from './store';
import Index from './pages/index'
import 'taro-ui/dist/style/index.scss'
import './custom-theme.scss'
import './app.scss';
import fetch from './utils/request';
import {API_JPUSH_AUTH} from './constants/api';
var JMessage = require('./utils/jmessage-wxapplet-sdk-1.4.0.min.js');

const store = configStore();
// 'pages/order/detail/index',

class App extends Component {
  config = {
    pages: [
      'pages/user/index',
      'pages/user/info/edit',
      'pages/active/publish/index',
      'pages/active/share/index',
      'pages/product/index',
      'pages/product/add',
      'pages/product/edit',
      'pages/order/index',
      'pages/order/refund/index',
      'pages/product/detail',
      'pages/order/submit/index',
      'pages/p2p/index',
      'pages/order/comment/index',
      'pages/user/customer/index',
      'pages/user/history/index',
      'pages/user/consultant/index',
      'pages/user/product/index',
      'pages/user/active/index',
      'pages/login/index'
    ],
    window:{
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  componentWillMount(){
  }
  
  componentDidMount(){

  }

  init(){
    var jim = new JMessage({
      debug : true
    });
    console.log('jim',jim);
    jim.init({
      appkey:"bb62a48cc54e300e2e58fa0b",
      random_str:"b37b052d0e9b4aa8a16ebe5446f9fba9",
      signature:"bf184eeb9722a637c313a36e9fea80bf",
      timestamp:"1562947140309"
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
