import {Component} from '@tarojs/taro';
import {View} from '@tarojs/components';
import './index.scss';
import jump from './../../utils/jump';

export default class Title extends Component{

    constructor(){
        super(...arguments);
    }

    jumpUrl(url,OrderId){
        console.log('this.props.number',OrderId);
        jump({url:url + `?orderId=${OrderId}`});
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
        const {OrderId,AgentName,OrderState} = this.props;
        console.log("this.props className",this.props);
        return (
            <View className="order-title" onClick={this.jumpUrl.bind(this,'/pages/order/detail/index',OrderId)}>
                <Text>{
                    this.props.AgentName
                }</Text>
                <Text className="mp-icon mp-icon-arrow-balck" ></Text>
                {
                 <Text>{this.getOrderTextByStatus(this.props.OrderState)}</Text>
                }
            </View> 
        )
    }
}