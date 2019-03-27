import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import '../../../style/icon.scss';

export default class Index extends Component {

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

        <View className="user-wrapper__info">
            <View className="user-wrapper__info--avatar">
                <Text className="mp-icon mp-icon-avatar"></Text>
            </View>
            <View className="user-wrapper__info--message">
                <View >shawn</View>
                <View>
                    <View>信用等级2</View>
                    <View>提升等级</View>
                </View>
            </View>
            <View className="user-wrapper__info-money">
                <View>100000.00</View>
                <View>已结定金</View>
            </View>
        </View>
        <View>

        </View>

        <View></View>

      </View>
    )
  }
}
