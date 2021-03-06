import {Component} from '@tarojs/taro';
import { View } from '@tarojs/components'
import './index.scss';

export default class Customer extends Component{
    render(){
        return (
            <View className="customer">
                <Text className="mp-icon mp-icon-order-group card"></Text>
                <View>
                    <View>客户: {this.props.content && this.props.content.customerName}</View>
                    <View className="tel">电话: { this.props.content && this.props.content.customerPhone} </View>
                </View>
            </View>
        )
    }
}