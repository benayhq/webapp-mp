import { Component } from "@tarojs/taro";
import jump from '../../utils/jump'

export default class UserOrder extends Component{
    
    constructor(){
        super(...arguments);
        this.state = {
            id:""
        };
    }

    jumpUrl(url){
        jump({url:url});
    }
    
    render(){
        return (
            <View className="mp-user__order"> 
            <View className="mp-user__order-title">
                <Text>客户订单</Text>
                <Text className="mp-user__order-queryall" onClick={this.jumpUrl.bind(this,'/pages/order/index')}>查看全部订单</Text>
            </View>

            <View className="mp-user__ordernav">
                <View className="mp-user__ordernav-tuan" onClick={this.jumpUrl.bind(this,'/pages/order/index')}>
                    <View className="mp-user__ordernav-icon mp-icon mp-icon-waittuan"></View>
                    <View className="mp-user__ordernav-text" >待成团</View>
                </View>

                <View className="mp-user__ordernav-customer" onClick={this.jumpUrl.bind(this,'/pages/order/index')}>
                    <View className="mp-user__ordernav-icon mp-icon mp-icon-consumption"></View> 
                    <View className="mp-user__ordernav-text" >待消费</View>  
                </View>
                <View className="mp-user__ordernav-comment" onClick={this.jumpUrl.bind(this,'/pages/order/index')}>
                    <View className="mp-user__ordernav-icon mp-icon mp-icon-comment"></View> 
                    <View className="mp-user__ordernav-text">待评价
                </View> 
                </View>
                <View className="mp-user__ordernav-refund" onClick={this.jumpUrl.bind(this,'/pages/order/index')}>
                    <View className="mp-user__ordernav-icon mp-icon mp-icon-refund"></View> 
                    <View className="mp-user__ordernav-text">退款
                </View> 
                </View>
            </View>
            </View>
        )
    }
}