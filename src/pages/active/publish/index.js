import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '新增活动'
  }

  componentWillMount () { }
  componentDidMount () { }
  componentWillUnmount () { }
  componentDidShow () { }
  componentDidHide () { }

  render () {
    return (
      <View className="mp-active">

        <View className="item">
            <Text>活动名称</Text>
            <input  placeholder="请输入活动名称" />
        </View>

        <View className="item">
            <Text>成团人数</Text>
            <input  placeholder="请选择成团人数" />
            <Text className="mp-publish mp-icon-arrow"></Text>
        </View>

        <View className="item">
            <Text>开始时间</Text>
            <input  placeholder="不限" />
            <Text className="mp-publish mp-icon-arrow"></Text>
        </View>

        <View className="item">
            <Text>结束时间</Text>
            <input  placeholder="不限" />
            <Text className="mp-publish mp-icon-arrow"></Text>
        </View>

        <View className="item">
            <Text>活动地点</Text>
            <input  placeholder="上海 宝山" />
            <Text className="mp-publish mp-icon-arrow"></Text>
        </View>

        <View className="uploadImage">
           上传图片
        </View>

        <View className="product">
            产品.
        </View>

        <View className="publish">

        </View>
      </View>
    )
  }
}
