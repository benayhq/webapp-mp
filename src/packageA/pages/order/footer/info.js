import {Component} from '@tarojs/taro';
import { View } from '@tarojs/components'
import './index.scss';

function getLocalTime(timestamp) {
    var d = new Date(timestamp);
    var date = (d.getFullYear()) + "-" +
            (d.getMonth() + 1) + "-" +
            (d.getDate()) + " " +
            (d.getHours()) + ":" +
            (d.getMinutes()) + ":" +
            (d.getSeconds());
    return date;
}

export default class Info extends Component{
    constructor(){
        super(...arguments);
    }

    render(){
        console.log("content",this.props.content);

        return (
            <View className="info">
                <View>
                订单编号: {this.props.content.number}
                <Text className="copy">复制</Text>
                </View>
                <View>
                支付方式:  微信支付
                </View>
                <View>
                下单时间: {this.props.content && getLocalTime(this.props.content.createdD)}
                </View>
                <View>
                拼团时间: {this.props.content && getLocalTime(this.props.content.createdD)}
                </View>
            </View>
        )
    }
}