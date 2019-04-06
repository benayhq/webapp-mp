import {Component} from '@tarojs/taro';
import './index.scss';
import ProductItem from './../../../component/product';
import { AtButton } from 'taro-ui';

export default class OrderItem extends Component{
    constructor(){
        super(...arguments);
    }

    render(){
        return (
            <View className="mp-order-list">
                <View className="order-title">
                    <Text>医美管家 vivi</Text>
                    <Text className="mp-icon mp-icon-arrow-balck"></Text>
                    <Text>待付款</Text>
                </View> 
                <ProductItem/>
                <View className="order-action">
                    <View  className="action">
                        <AtButton type='primary' size='small'>支付订单</AtButton>
                    </View>
                    <Text></Text>  
                </View>
            </View>
        )
    }
}