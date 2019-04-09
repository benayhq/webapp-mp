import {Component} from '@tarojs/taro';
import { View } from '@tarojs/components'
import './index.scss';

export default class Code extends Component{
    constructor(){
        super(...arguments);
    }

    render(){
        return (
            <View className="code">
                <View className="wrap"></View>
                <Text className="sequence">
                    验证码 2018 1010 5183 4518
                </Text>
                <View className="qrCode"></View>
            </View>
        )
    }
}