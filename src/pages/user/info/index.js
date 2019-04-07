import {Component} from '@tarojs/taro';
import {View} from "@tarojs/components";
import './index.scss';

export default class Info extends Component{
    
    constructor(){
        super(...arguments);
    }

    render(){
        return (
            <View className="mp-user__info">
                    <View className="mp-user__info-avatar">
                        <Text className="mp-icon mp-icon-avatar"></Text>
                    </View>

                    <View className="mp-user__info-message">
                        <View className="mp-user__user-username">Shawn</View>
                        <View className="mp-user__user-level">
                                信用等级2
                        </View>
                        <View className="mp-user__user-level-up">提升等级</View>
                    </View>

                    <View className="mp-user__info-money">
                        <View className="mp-user__money-amount">100000.00</View>
                        <View className="mp-user__money-order">已结定金</View>
                    </View>
            </View>
        )
    }
}
