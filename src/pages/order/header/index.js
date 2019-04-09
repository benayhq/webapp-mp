import {Component} from '@tarojs/taro';
import { View } from '@tarojs/components'
import './index.scss';

export default class Header extends Component{
    constructor(){
        super(...arguments);
    }

    render(){
        return (
            <View className="tips">
                <Text>订单已完成</Text>
                <Text>与咨询师沟通确认后进行消费</Text>
                <Text className="mp-icon mp-icon-order-detail success"></Text>
             </View>
        )
    }
}