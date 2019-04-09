import {Component} from '@tarojs/taro';
import {View} from '@tarojs/components';
import './index.scss';

export default class Assemble extends Component{
    constructor(){
        super(...arguments);
    }

    render(){
        return (
            <View className="ping">
                <Text className="mp-icon mp-icon-order-card"></Text>
                <View>
                    <View className="text">拼团中</View>
                    <View className="group">
                        <View className="person">1</View>
                        <View className="person">2</View>
                        <View className="person">3</View>
                    </View>
                </View>
            </View>
        )
    }
}