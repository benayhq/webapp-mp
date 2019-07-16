import Taro, {Component} from '@tarojs/taro';
import {View,Picker} from '@tarojs/components';
import './index.scss';
import { AtInput,AtMessage} from 'taro-ui';
import {connect} from '@tarojs/redux';
import * as actions from '../store/actionCreators';
import {WeChatPay} from './../../../utils/payment';

@connect(state=>state.user,actions)
export default class SubmitOrder extends Component{
    config = {
        navigationBarTitleText: '发起订单'
    }

    constructor(props){
        super(...arguments);
        this.state ={
            imgUrl:'',
            appointmentDate:'',
            activityProductId:'',
            product:{},
            text:'',
            isOpended:false
        };
    }

    handleSubmitOrder(){
        const {activityProductId,appointmentDate} = this.state;
        if(appointmentDate=="" || appointmentDate === null){
            this.handleAlert('error','请选择预约时间!');
            return;
        };

        var that = this;

        var payload ={
            activityProductId:activityProductId,
            appointmentDate:appointmentDate
        };

        this.props.dispatchCreateOrder(payload).then((response)=>{
            if(response.content &&response.content!=null){
                // 微信支付.
                that.handlePay(response.content);
            }
            else{
                that.handleAlert('error',response.error);
            }
        })
    }

    handlePay(orderId){
        var payload ={
            id:orderId
        };
        this.props.dispatchPrePay(payload).then((response)=>{
            console.log('response',response);

            if(response.content && response.content!=null){
                WeChatPay(response.content,this.payNotice.bind(this));
            }
            else{
                this.handleAlert('error',response.error);
            }
        });
    }

    payNotice(type,response){
        var that = this;
        switch(type){
            case "success":
                that.setState({
                    isOpended:true,
                    text:'支付成功'
                });
                break;
            case "fail":
                that.setState({
                    isOpended:true,
                    text:'支付失败'
                });
                break;
            case "complete":
                that.setState({
                    isOpended:true,
                    text:'支付失败'
                });
                break;
        }
    }

    handleAlert = (type,message) => {
        Taro.atMessage({
          'message': message,
          'type': type
        });
     }

    componentDidMount(){
        var payload = {
            productId:this.$router.params.productId
        };

        this.setState({
            activityProductId:this.$router.params.productId,
            activityName:this.$router.params.activityName
        });

        this.props.dispatchQueryProductInfo(payload).then((response)=>{
            this.setState({
                product:response.content
            });
            console.log('response.content.location',response.content.location);
            this.getImgUrl(response.content.location).then((response)=>{
                console.log('response getImgUrl',response);
                this.setState({
                    imgUrl:response
                })
            })
        });

    }

    async getImgUrl(location){
        var payload = {
          location:location
        };
        const result = await this.props.dispatchCreateOrderDownLoadUrl(payload);
        return result.content;
    }

    onDateChange = e => {
        this.setState({
            appointmentDate: e.detail.value
        })
    }

    render(){

        const {product,activityName,imgUrl,isOpended,text} = this.state;
        
        return (
            <View className="submit-order">
                 <AtMessage/>
                 <AtToast isOpened={isOpended} text={text} duration={1000}></AtToast>

                <View className="submit-order_white-space"></View>
                <View className="submit-order_product">
                    <View className="submit-order_product-content">
                        <View>
                            <View className="submit-order_product-content-img">
                            <image style="height:80px;width:80px;margin:0 auto;padding-left:10px;padding-top:5px;"
                                    mode="scaleToFill"
                                    src={imgUrl}>
                            </image>
                            </View>
                        </View>
                        <View>
                            <View className="submit-order_product-content-product">
                                <View>{activityName} </View>
                                <View> {product.name} </View>
                                <View> ￥{product.price} </View>
                            </View>
                        </View>
                    </View>

                    <View className="submit-order_product-appoint">
                        <Picker mode='date' onChange={this.onDateChange}>
                            <View className='picker'>
                                请选择预约时间 {this.state.appointmentDate}
                            </View>
                        </Picker>
                    </View>
                </View>

                <View className="submit-order_footer">
                    <View>共 1 件，预定金： <Text>￥{product.advance} </Text> </View>
                    <View onClick={this.handleSubmitOrder.bind(this)}>提交订单</View>
                </View>
                
            </View>
        )
    }
}