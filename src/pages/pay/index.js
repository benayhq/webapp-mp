import Taro,{Component} from '@tarojs/taro';
import {View,Text,ScrollView} from '@tarojs/components';
import './index.scss';
import {connect} from '@tarojs/redux';
import * as actions from './store/actionCreators';
import {WeChatPay} from './../../utils/payment';
import { AtToast } from "taro-ui"

@connect(state=>state,actions)
export default class Pay extends Component{
    constructor(props){
        super(props);
        this.state={
            text:'',
            isOpended:false
        }
    }
    
    handlePay(){
        var payload ={
            id:4
        };
        this.props.dispatchPrePay(payload).then((response)=>{
            WeChatPay(response.content,this.payNotice.bind(this));
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
    
    render(){

        const {isOpended,text} = this.state;

        return (<View className="mp-pay">
                <AtToast isOpened={isOpended} text={text} duration={1000}></AtToast>
                <Text onClick={this.handlePay.bind(this)}> 支付</Text>
            </View>)
    }
}