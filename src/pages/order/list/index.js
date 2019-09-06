import Taro,{Component} from '@tarojs/taro';
import './index.scss';
import ProductItem from '../../../components/product';
import { AtButton,AtMessage,AtToast } from 'taro-ui';
import jump from './../../utils/jump';
import Title from '../title';
import * as actions from '../store/actionCreators';
import {connect} from '@tarojs/redux';
import {WeChatPay} from './../../../utils/payment';
import empty from './../../../components/empty/assets/empty2.svg'

@connect(state=>state,actions)
export default class OrderItem extends Component{
    state = {
        OrderState:'待付款',
        ProductImg:'',
        OrderList:[],
        isOpended:false,
        text:''
    }

    async getImgUrl(location){
        var payload = {
          location:location
        };
        const result = await this.props.dispatchCreateOrderDownLoadUrl(payload);
        return result.content;
    }

    jumpUrl(orderId){
        Taro.navigateTo({
            url:'/pages/order/comment/index?orderId='+orderId
        });
    }

    componentWillReceiveProps(props,nextProps){
        if(props.list.length>0){
            var cacheList = [];
            props.list.map((item,key)=>{
                this.getImgUrl(item.activityProductLocation).then((response)=>{
                    cacheList.push({
                        id:item.id,
                        status:item.status,
                        displayStatusDes:item.displayStatusDes,
                        customerName:item.customerName,
                        activityName:item.activityName,
                        activityProductName:item.activityProductName,
                        productDiscountPrice:item.productDiscountPrice,
                        imgUrl:response,
                        number:item.number
                    });
                    if(props.list.length === cacheList.length){
                        this.setState({
                            OrderList:cacheList
                        });
                    }
                })
            });
        }else{
            this.setState({
                OrderList:[]
            });
        }
    }

    handleWeChatPay(orderId){
        var payload ={
            id:orderId
        };
        this.props.dispatchPrePay(payload).then((response)=>{
            if(response.content && response.content!=null){
                WeChatPay(response.content,this.payNotice.bind(this));
            }
            else{
                this.handleAlert('error',response.error);
            }
        });
    }

    payNotice(type,response){
        console.log('payNoticeLog type',type);
        console.log('payNoticeLog response',response);
    }

    handleAlert = (type,message) => {
        Taro.atMessage({
          'message': message,
          'type': type
        });
    }

    handleRefund = (orderId) => {
        Taro.navigateTo({
            url:'/pages/order/refund/index?orderId='+orderId
        });
    }
   
    render(){
        const {OrderList} = this.state;

        let template = null;

        if(OrderList.length>0){
            template = (OrderList.map(item=>(
                <View className="mp-order-list">
                <Title OrderId={item.id}  displayStatusDes={item.displayStatusDes}  AgentName={item.customerName}/>
                <View className="product">
                    <View className="left">
                        <image style="height:100%;width:100%;margin:0 auto;padding:5px;"
                                mode="scaleToFill"
                                src={item.imgUrl}>
                        </image>
                    </View>
                    <View className="right">
                        <View>{item.activityName}</View>
                        <View>
                           {item.activityProductName}
                        </View>
                        <View>{item.productDiscountPrice}</View>
                    </View>
                </View>
                <View className="order-action">
                    <View className="action">
                    {
                        item.status == "UNPAY" && (<AtButton type='primary' onClick={this.handleWeChatPay.bind(this,item.id)} size='small'>支付订单</AtButton>)
                    }
                    {
                        item.status == "PAID" && <View>
                            <AtButton type='primary' size='small' onClick={this.jumpUrl.bind(this,item.id)}>我要评价</AtButton>
                            {/* <Text className="margin8"></Text> */}
                            {/* <AtButton type='primary' size='small'>立即核销</AtButton> */}
                            {/* <AtButton type='primary' size='small' onClick={this.handleRefund.bind(this,item.id)} >退款申请</AtButton>  */}
                        </View>
                    }
                    {
                        item.status == "COMMENTING" && <View>
                            {/* <AtButton type='primary' size='small'>退款申请</AtButton> 
                            <Text className="margin8"></Text> */}
                            <AtButton type='primary' size='small'>我要评价</AtButton>
                        </View>
                    }
                    {
                        item.status == "CONSUMPTION" && <View>
                            <AtButton type='primary' size='small'>重新购买</AtButton>
                        </View>
                    }
                    </View>
                    <Text></Text>  
                </View>
                </View>
            )))
        }
        else{
            template = (<View className="mp-empty-blank-icon"> 
            <View className="mp-order__empty">
                <Image className="mp-empty-blank-image" src={empty}/>
                <View className="mp-empty-blank-text">暂无订单数据</View>
            </View>
        </View>)
        }
        return (
            <View>
                {
                    template
                }
            </View>
        )
    }
}