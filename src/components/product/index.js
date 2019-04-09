import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class ProductItem extends Component{
  config = {
    navigationBarTitleText: '测试'
  }

  constructor(){
      super(...arguments);
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }
  
  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View>
        <View className="product">
            <View>
            </View>
            <View className="list">
                <View className="list-top">
                     <View>
                     </View>
                     <View>
                        <image
                          style="width:92px; height:95px;margin-top:14px;"
                          mode="scaleToFill"
                          src="https://storage.360buyimg.com/mtd/home/111543234387022.jpg"
                        ></image>
                     </View>
                     <View>
                        <View className="product-item margin20">[玻尿酸瘦脸针] 瑞典进口 </View>
                        <View className="product-item font"> ￥3000 </View>
                        <View className="product-item textfont"> 预定金: <Text className="amount">200</Text> </View>
                     </View>
                </View>
            </View>
        </View>
      </View>
    )
  }
}
