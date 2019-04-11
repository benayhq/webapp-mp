import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import ProductItem from '../../../../components/product/index';
import './index.scss'

export default class ProductList extends Component{

    createProduct(){
        Taro.navigateTo({
          url:'/pages/product/index'
        })
    }

    render(){
        return (
            <View className="mp-publish-product">
                    <View className="publish-item">
                        <Text>活动产品</Text>
                        <Text onClick={this.createProduct}>选择我的产品</Text>
                    </View>

                    <ProductItem/>

                    <View className="publish-active">
                          <Text>活动价</Text>
                          <input  placeholder="请输入活动优惠价" />
                          <Text className="mp-icon mp-icon-trash margin"></Text>
                    </View>

                    <View className="pulbish-create">
                            <Text className="mp-icon mp-icon-plus"></Text>
                            <Text onClick={this.createProduct}>新增产品</Text>
                    </View>
            </View>
        );
    }
}