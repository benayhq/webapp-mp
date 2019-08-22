import { Component } from "@tarojs/taro";
import jump from '../../utils/jump';
import './index.scss'
import { AtBadge } from 'taro-ui'


export default class UserOrder extends Component{
    constructor(props){
        super(...arguments);
    }

    jumpUrl(url){
        jump({url:url});
    }
    
    render(){
        const {list} = this.props;

        console.log('list',list);

        return (
            <View className="mp-user__order"> 
                <View className="mp-user__order-title">
                    <Text>客户订单</Text>
                    <Text className="mp-user__order-queryall" onClick={this.jumpUrl.bind(this,'/pages/order/index?status=&index=0')}>查看全部订单</Text>
                </View>
                <View className="mp-user__ordernav">
                    {
                           list!=undefined && list.map((item,index)=>(
                                <View className="mp-user__ordernav-tuan" onClick={this.jumpUrl.bind(this,`/pages/order/index?status=${item.status}&index=${index+1}`)} >
                                   { item.count > 0 ? <AtBadge value={item.count} maxValue={99}>
                                            <View className={item.icon}></View>
                                    </AtBadge> : <View className={item.icon}></View>}  
                                    <View className="mp-user__ordernav-text" >{item.text}</View>
                                </View>
                            ))
                    }
                </View>
            </View>
        )
    }
}