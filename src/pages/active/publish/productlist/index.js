import Taro, { Component } from '@tarojs/taro'
import { View, Text,ScrollView } from '@tarojs/components'
import ProductItem from '../../../../components/product/index';
import './index.scss'
import { AtInput } from 'taro-ui';


export default class ProductList extends Component{


    handleChange(){
        console.log('handleChange');
    }

    render(){
        return (
           <View className="product">
                {
                    this.props.products!=null && this.props.products.map(item=>(
                            <View className="list">
                            <View className="list-top">
                                <View>
                                </View>
                                <View>
                                    <image
                                    style="width:86px; height:86px;margin-top:14px;border-radius:9px;"
                                    mode="scaleToFill"
                                    src={item.location}
                                    ></image>
                                </View>
                                <View>
                                    <View className="product-item margin20"> {item.name} </View>
                                    <View className="product-item font"> {item.price} </View>
                                    <View className="product-item textfont">  预定金: <Text className="amount">{item.advance}</Text> </View>
                                    <View className="product-item textfont">  活动价: <Text className="amount">{item.discountPrice}</Text> </View>
                                </View>
                            </View>
                        </View>
                    ))
                }
            </View>
        );
    }
}