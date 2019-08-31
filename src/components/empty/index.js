import Taro, { Component } from '@tarojs/taro'
import {View} from '@tarojs/components'
import empty from './assets/empty2.svg'
import './index.scss'

export default class Empty extends Component {
  render () {
    return (
      <View className='mp-empty'>
         <View>
              <View className="mp-empty-blank">
            </View>
             <View className="mp-empty-blank-icon"> 
             <Image className="mp-empty-blank-image" src={empty}/>
             <View className="mp-empty-blank-text">暂无相关数据</View>
            </View>
         </View>
      </View>
    )
  }
}