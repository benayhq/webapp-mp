import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component{
  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }
  
  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='user-wrapper'>
      
        <View className="user-wrapper__">

        </View>

        <View></View>
        <View></View>
        <Text>用户中心22</Text>
      </View>
    )
  }
}
