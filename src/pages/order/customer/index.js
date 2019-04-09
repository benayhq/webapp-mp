import {Component} from '@tarojs/taro';
import { View } from '@tarojs/components'
import './index.scss';

export default class Customer extends Component{
    constructor(){
        super(...arguments);
    }

    render(){
        return (
            <View className="customer">
                <Text className="mp-icon mp-icon-order-group card"></Text>
                <View>
                    <View>客户: 徐天宇</View>
                    <View className="tel">电话: 13545667770 </View>
                </View>
            </View>
        )
    }
}