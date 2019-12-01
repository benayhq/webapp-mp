import  { Component } from '@tarojs/taro'
import {View} from '@tarojs/components'
import './index.scss'

export default class Empty extends Component {
  render () {
    return (
      <View className='mp-empty'>
         <View>
              <View className="mp-empty-blank">
            </View>
             <View className="mp-empty-blank-icon"> 
             <Image className="mp-empty-blank-image" src='https://lovemeipin.oss-cn-shanghai.aliyuncs.com/common/empty2.svg'/>
             <View className="mp-empty-blank-text">暂无相关数据</View>
            </View>
         </View>
      </View>
    )
  }
}