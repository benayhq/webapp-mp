import {Component} from '@tarojs/taro';
import {View} from '@tarojs/components';
import Title from '../title';
import ProductItem from './../../../component/product';
import './index.scss';

export default class OrderProduct extends Component{
    constructor(){
        super();
    }

    render(){
        return (
            <View className="product">
            <Title/>
            <ProductItem/>
            <View className="appoint">
                <Text>预约时间: 2019年04月08日</Text>
                <Text>预定金: 
                    <Text className="amount">￥200</Text>
                </Text>
            </View>
            <View className="service">
                <View className="wechat">
                    <Text className="mp-icon mp-icon-wechat margin8"></Text>
                    <Text>微信联系</Text>
                </View>
                <View className="tel">
                    <Text className="mp-icon mp-icon-tel margin8"></Text>
                    <Text className="tel">电话咨询</Text>
                </View>
            </View>
        </View>
    )
    }
}