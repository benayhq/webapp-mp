import {Component} from '@tarojs/taro';
import './index.scss';
import ProductItem from '../../../components/product';
import { AtButton } from 'taro-ui';
import jump from './../../utils/jump';
import Title from '../title';

export default class OrderItem extends Component{

    constructor(props){
        super(...arguments);
        this.state = {
            OrderState:'待付款'
        }
    }
    
    jumpUrl(url){
        jump({url:url});
    }

    render(){
        return (
            <View>
                {
                    this.props.list.map(item=>(
                        <View className="mp-order-list">
                        <Title OrderState={item.orderStatus}  agentName={item.agentName}/>
                        <ProductItem/>
                        <View className="order-action">
                            <View className="action">
                            {
                                item.orderStatus == "待付款" && <AtButton type='primary' size='small'>支付订单</AtButton>
                            }
                            {
                                item.orderStatus == "待成团" && <AtButton type='primary' size='small'>邀请好友</AtButton>
                            }
                            {
                                item.orderStatus == "待消费" && <View>
                                    <AtButton type='primary' size='small'>退款申请</AtButton> 
                                    <Text className="margin8"></Text>
                                    <AtButton type='primary' size='small'>立即核销</AtButton>
                                </View>
                            }
                            {
                                item.orderStatus == "待评价" && <View>
                                    <AtButton type='primary' size='small'>退款申请</AtButton> 
                                    <Text className="margin8"></Text>
                                    <AtButton type='primary' size='small'>我要评价</AtButton>
                                </View>
                            }
                            {
                                item.orderStatus == "已取消" && <View>
                                    <AtButton type='primary' size='small'>重新购买</AtButton>
                                </View>
                            }
                            {
                                item.orderStatus == "拼团失败" && <View>
                                    <AtButton type='primary' size='small'>重新购买</AtButton>
                                </View>
                            }
                            </View>
                            <Text></Text>  
                        </View>
                        </View>
                    ))
                }
            </View>
        )
    }
}