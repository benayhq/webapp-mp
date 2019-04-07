import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'
import '../../style/icon.scss';
import UserOrder from './order';
import InCome from './income';
import Publish from './publish';
import Info from './info';
import Panel from './panel';
import Event from './../utils/event';
import ChangeUser from './switch';
let myEvent = new Event();

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email:"火星黑洞"
    }

    myEvent.on("changeUser",()=>{
        console.log("changeUser");
    });
  }

  config = {
    navigationBarTitleText: '个人中心'
  }

  jumpUrl = (url) =>{
    Taro.navigateTo({
      url: url
    })
  }

  render () {
    return (
      <View className='mp-user'>

        <Info/>

        <InCome/>

        <Publish/>

        <UserOrder/>

        <Panel/>

        <ChangeUser/>
      </View>
    )
  }
}
