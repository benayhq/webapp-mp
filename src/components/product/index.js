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

  render () {
    console.log('product Item',this.props.products);
    return (
      <View>
        <View className="product">
            <View>
            </View>

            {
              this.props.products.map(item=>(
                <View className="list">
                <View className="list-top">
                     <View>
                     </View>
                     <View>
                        <image
                          style="width:92px; height:95px;margin-top:14px;"
                          mode="scaleToFill"
                          src={item.location}
                        ></image>
                     </View>
                     <View>
                        <View className="product-item margin20"> {item.name} </View>
                        <View className="product-item font"> {item.price} </View>
                        <View className="product-item textfont"> 预定金: <Text className="amount">200</Text> </View>
                     </View>
                  </View>
               </View>
              ))
            }
        </View>
      </View>
    )
  }
}
