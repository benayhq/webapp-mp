import Taro,{Component} from '@tarojs/taro';
import './index.scss';
import ProductItem from '../../../components/product';
import { AtButton } from 'taro-ui';
import jump from './../../utils/jump';
import Title from '../title';

import * as actions from '../store/actionCreators';
import {connect} from '@tarojs/redux';
import _ from 'lodash';

@connect(state=>state.user,actions)
export default class OrderItem extends Component{

    constructor(props){
        super(...arguments);
        this.state = {
            OrderState:'待付款',
            ProductImg:'',
            OrderList:[]
        }
    }

    async getImgUrl(location){
        var payload = {
          location:location
        };
        const result = await this.props.dispatchCreateOrderDownLoadUrl(payload);
        return result.content;
    }

    jumpUrl(url){
        Taro.navigateTo({
            url:'/pages/order/comment/index'
        })
        // console.log('url',url);
    }



    componentWillReceiveProps(props){
        var cacheList = [];
        props.list.map((item,key)=>{
            this.getImgUrl(item.activityProductLocation).then((response)=>{
                cacheList.push({
                    status:item.status,
                    customerName:item.customerName,
                    activityName:item.activityName,
                    activityProductName:item.activityProductName,
                    productDiscountPrice:item.productDiscountPrice,
                    imgUrl:response
                });

                if(props.list.length === cacheList.length){
                    this.setState({
                        OrderList:cacheList
                    });
                }
            })
        });
    }

    componentDidMount(){
    }
   
    render(){
        const {ProductImg,OrderList} = this.state;

        return (
            <View>
                {
                    OrderList.map(item=>(
                        <View className="mp-order-list">
                        <Title OrderState={item.status}  agentName={item.customerName}/>
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
                                item.status == "UNPAY" || item.status == "PAY_FAILED" && <AtButton type='primary' size='small'>支付订单</AtButton>
                            }
                            {/* {
                                item.status == "待成团" && <AtButton type='primary' size='small'>邀请好友</AtButton>
                            } */}
                            {
                                item.status == "PAID" && <View>
                                    {/* <AtButton type='primary' size='small'>退款申请</AtButton>  */}
                                    <AtButton type='primary' size='small' onClick={this.jumpUrl.bind(this,'/pages/order/comment')}>我要评价</AtButton>
                                    <Text className="margin8"></Text>
                                    <AtButton type='primary' size='small'>立即核销</AtButton>
                                </View>
                            }
                            {/* {
                                item.status == "待评价" && <View>
                                    <AtButton type='primary' size='small'>退款申请</AtButton> 
                                    <Text className="margin8"></Text>
                                    <AtButton type='primary' size='small'>我要评价</AtButton>
                                </View>
                            }
                            {
                                item.status == "已取消" && <View>
                                    <AtButton type='primary' size='small'>重新购买</AtButton>
                                </View>
                            }
                            {
                                item.status == "拼团失败" && <View>
                                    <AtButton type='primary' size='small'>重新购买</AtButton>
                                </View>
                            } */}
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