import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './index.scss'

export default class Loading extends Component {
  render () {
    return (
      <View className='comp-loading'>
        <Image src='https://lovemeipin.oss-cn-shanghai.aliyuncs.com/common/loading.gif' className='comp-loading__img' />
      </View>
    )
  }
}