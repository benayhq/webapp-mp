const mtjwxsdk = require('./utils/mtj-wx-sdk.js');
import Taro, { Component } from '@tarojs/taro'
import '@tarojs/async-await'
import {Provider} from '@tarojs/redux';
import configStore from './store';
import Index from './pages/index'
import 'taro-ui/dist/style/index.scss'
import './custom-theme.scss'
import './app.scss';
const store = configStore();

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
      'pages/order/detail/index',
      'pages/order/refund/index',
      'pages/product/detail',
      'pages/order/submit/index',
      'pages/p2p/index',
      'pages/pay/detail/index',
      'pages/order/comment/index',
      'pages/user/customer/index',
      'pages/user/history/index',
      'pages/user/consultant/index',
      'pages/user/product/index',
      'pages/user/active/index',
      'pages/login/index',
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
