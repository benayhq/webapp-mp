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
            showOrderText = "未支付";
        }
        else if(OrderState === "CANCEL"){
            showOrderText = "支付取消";
        }
        else if(OrderState === "PAID"){
            showOrderText = "支付完成(待核销)";
        }
        else if(OrderState === "PAY_FAILED"){
            showOrderText = "支付失败";
        }
        else if(OrderState === "REFUND_APPLIED"){
            showOrderText = "向代理发起退款申请";
        }
        else if(OrderState === "REFUNDING"){
            showOrderText = "退款已发起/代理通过退款申请";
        }
        else if(OrderState === "REFUNDED"){
            showOrderText = "退款完成";
        }
        else if(OrderState === "REFUND_FAILED"){
            showOrderText = "退款失败";
        }
        else if(OrderState === "VERIFIED"){
            showOrderText = "已核销";
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
                    this.props.OrderState && <Text>{this.getOrderTextByStatus(this.props.OrderState)}</Text>
                }
            </View> 
        )
    }
}