import { Component } from "@tarojs/taro";
import jump from '../../utils/jump';
import './index.scss'

export default class UserOrder extends Component{
    constructor(props){
        super(...arguments);
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
                    {
                        this.props.list.map(item=>(
                          <View className="mp-user__ordernav-tuan" onClick={this.jumpUrl.bind(this,'/pages/order/index')}>
                            <View className={item.icon}></View>
                            <View className="mp-user__ordernav-text" >{item.text}</View>
                           </View>
                        ))
                    }
                </View>
            </View>
        )
    }
}