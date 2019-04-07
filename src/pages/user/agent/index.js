import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import '../../../style/icon.scss';
import UserOrder from '../order';
import InCome from '../income';
import Publish from '../publish';
import Info from '../info';
import Panel from '../panel';

export default class Index extends Component {

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

        <View className="mp-user-changeuser"> 
          切换为用户
        </View>
      </View>
    )
  }
}
