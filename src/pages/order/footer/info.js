import {Component} from '@tarojs/taro';
import { View } from '@tarojs/components'
import './index.scss';

export default class Info extends Component{
    constructor(){
        super(...arguments);
    }

    render(){
        return (
            <View className="info">
                <View>
                订单编号： 21312414124134
                <Text className="copy">复制</Text>
                </View>
                <View>
                支付方式： 微信支付
                </View>
                <View>
                下单时间： 21312414124134
                </View>
                <View>
                拼团时间： 21312414124134
                </View>
            </View>
        )
    }
}