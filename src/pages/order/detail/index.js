import {Component} from '@tarojs/taro';
import { View } from '@tarojs/components'
import './index.scss';
import Assemble from './../assemble';
import OrderProduct from './../product';
import Footer from './../footer';
import Header from './../header';
import Customer from './../customer';
import ToolBar from './../toolbar';
import Order from './../common/order';
import * as actions from '../store/actionCreators';
import {connect} from '@tarojs/redux';
import _ from 'lodash';

@connect(state=>state,actions)
export default class OrderDetail extends Component{
    constructor(){
        super(...arguments);
        this.state = {
            order:{
                agentName:'医美管家 vivi'
            },
            content:{}
        };
    }

    config = {
        navigationBarTitleText: '订单详情'
    }

    // this.$router.params.orderId
    componentDidMount() {
        this.$router.params.status = '待付款';
        var payload = {
            id:3
        };
        this.props.dispatchOrderDetail(payload).then((response)=>{
            console.log('response22',response.content);
            this.setState({
                content:response.content
            });
        });
    }
    render(){
        return (
            <View className="mp-order-detail">
                <Header content={this.state.content}/>
                {/* <Customer/> */}
                <Assemble content={this.state.content}/>
                <OrderProduct order={this.state.order} content={this.state.content}/>
                <Footer qrCode={this.state.content.qrCode}/>
                <ToolBar toolBar={this.state.content.toolBar}/>
            </View>
        )
    }
}