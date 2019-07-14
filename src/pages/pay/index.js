import Taro,{Component} from '@tarojs/taro';
import {View,Text,ScrollView} from '@tarojs/components';
import './index.scss';
import {connect} from '@tarojs/redux';
import * as actions from './store/actionCreators';

@connect(state=>state,actions)
export default class Pay extends Component{
    constructor(props){
        super(props);
    }
    handlePay(){
        var payload ={
            id:2
        };
        this.props.dispatchPrePay(payload).then((response)=>{
            console.log(response);
        });
    }

    render(){
        return (<View className="mp-pay">
                <Text onClick={this.handlePay.bind(this)}> 支付</Text>
            </View>)
    }
}