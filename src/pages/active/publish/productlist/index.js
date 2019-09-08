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
                                                style="width:92px; height:95px;margin-top:14px;"
                                                mode="scaleToFill"
                                                src={item.location}
                                                ></image>
                                            </View>
                                            <View>
                                                <View className="product-item margin20"> {item.name} </View>
                                                <View className="product-item font"> {item.price} </View>
                                                <View className="product-item textfont">  预定金: <Text className="amount">{item.advance}</Text> </View>
                                            
                                            </View>
                                        </View>
                                        <View className="product-item activePrice"> 
                                                  <View>活动价: </View> 
                                                  <View>
                                                    <AtInput
                                                        name='value'
                                                        type='text'
                                                        value={item.discountPrice}
                                                        onChange={this.handleChange.bind(this)}
                                                    />
                                                  </View>
                                        </View>
                                    </View>
                                    ))
                                }
                        </View>
        );
    }
}