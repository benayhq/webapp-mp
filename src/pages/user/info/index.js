import {Component} from '@tarojs/taro';
import {View} from "@tarojs/components";
import './index.scss';

export default class Info extends Component{
    
    constructor(props){
        super(...arguments);
    }

    render(){
        return (
            <View className="mp-user__info">
                    <View className="mp-user__info-avatar">
                        <Text className="mp-icon mp-icon-avatar"></Text>
                    </View>

                    <View className="mp-user__info-message">
                        <View className="mp-user__user-username">{this.props.user.userName}</View>
                        <View className="mp-user__user-level">
                                {this.props.user.level}
                        </View>
                        <View className="mp-user__user-level-up"> {this.props.user.levelText}</View>
                    </View>
                    {
                        this.props.user.amount && <View className="mp-user__info-money">
                        <View className="mp-user__money-amount">100000.00</View>
                        <View className="mp-user__money-order">已结定金</View>
                    </View>
                    }
            </View>
        )
    }
}
