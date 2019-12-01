import Taro, {Component} from '@tarojs/taro';
import {View,Picker} from '@tarojs/components';
import './index.scss';
import { AtInput,AtMessage,AtList,AtListItem} from 'taro-ui';
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
            activeId:0,
            text:'',
            isOpended:false,
            cellPhone:'',
            name:'',
            chooseDate:'请选择预约时间'
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
            if(response.content && response.result === "success"){
                // 微信支付.
                that.handlePay(response.content);
            }
            else{
                that.handleAlert('error',response.content);
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
            else {
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
                Taro.navigateTo({
                    url: '/pages/pay/detail/index?activeId='+this.state.activeId
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
            activityName:this.$router.params.activityName,
            activeId:this.$router.params.activeId
        });

        this.setState({
            activityProductId:this.$router.params.productId,
            activityName:this.$router.params.activityName
        });

        this.props.dispatchQueryProductInfo(payload).then((response)=>{
            this.setState({
                product:response.content
            });
            this.getImgUrl(response.content.location).then((response)=>{
                this.setState({
                    imgUrl:response
                });
            })
        });

        this.initUser();
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

    handleItemClick = e => {
        Taro.navigateTo({
            url: '/pages/user/info/edit'
        });
    }

    async initUser(){
        const user = await this.props.GetUserInfo({});
        if(user.content){
            this.setState({
                cellPhone:user.content.cellphone,
                name:user.content.name
            })
        }
    }

    render(){

        const {product,activityName,imgUrl,isOpended,text,
            cellPhone,name,chooseDate,appointmentDate} = this.state;
        
        return (
            <View className="submit-order">
                 <AtMessage/>
                 <AtToast isOpened={isOpended} text={text} duration={1000}></AtToast>

                <AtList>
                    <AtListItem
                       hasBorder={false}
                        onClick={this.handleItemClick.bind(this)} 
                        title={cellPhone === ''? "":`客户:${name}`}
                        note={cellPhone === ''? "":`电话:${cellPhone}`}
                        // thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
                        arrow='right'
                    />
                </AtList>

                <View className="submit-order_white-space"></View>
                <View className="submit-order_product">
                    <View className="submit-order_product-content">
                        <View>
                            <View className="submit-order_product-content-img">
                            <image style="height:100px;width:100px;margin:0 auto;padding-left:10px;padding-top:5px;"
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

                    {/* <AtList>
                        <AtListItem
                            onClick={this.onDateChange.bind(this)} 
                            iconInfo={{ size:
                            25, color: '#78A4FA', value: 'calendar', }} 
                            title={chooseDate}
                            arrow='right'
                        />
                    </AtList> */}

                  <View className="submit-order_product-appoint">
                        <Picker className="submit-order_product-appoint-picker" mode='date' onChange={this.onDateChange}>
                                <View className="item-extra__icon item-extra__icon">
                                    预约时间: {appointmentDate}
                                    <Text className="at-icon at-icon item-extra__icon-arrow item-extra__icon-arrow at-icon-chevron-right at-icon-chevron-right submit-appointer"></Text>
                                </View>
                        </Picker>
                  </View> 
                    
                </View>

                <View className="submit-order_footer">
                    <View>共 <Text style="color:red">( 1 )</Text> 件 预定金: <Text style="color:red">￥{product.advance} </Text> </View>
                    <View onClick={this.handleSubmitOrder.bind(this)}>提交订单</View>
                </View>
                
            </View>
        )
    }
}