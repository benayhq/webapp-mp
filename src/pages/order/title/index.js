import {Component} from '@tarojs/taro';
import {View} from '@tarojs/components';
import './index.scss';
import jump from './../../utils/jump';

export default class Title extends Component {
    constructor(){
        super(...arguments);
    }

    jumpUrl(url){
        jump({url:url + `?status=${this.props.OrderState}`});
    }

    getOrderTextByStatus(OrderState){
        var  showOrderText = "";
        if(OrderState === "UNPAY"){
            showOrderText = "待付款";
        }
        else if(OrderState === "BATING"){
            showOrderText = "待成团";
        }
        else if(OrderState === "CONSUMPTION"){
            showOrderText = "待消费";
        }
        else if(OrderState === "COMMENTING"){
            showOrderText = "待评价";
        }
        return showOrderText;
    }
    
    render(){
        return (
            <View className="order-title" onClick={this.jumpUrl.bind(this,'/pages/order/detail/index')}>
                <Text>{
                    this.props.agentName
                }</Text>
                <Text className="mp-icon mp-icon-arrow-balck" ></Text>
                {
                 <Text>{this.getOrderTextByStatus(this.props.OrderState)}</Text>
                }
            </View> 
        )
    }
}