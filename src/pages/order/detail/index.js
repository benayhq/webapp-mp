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

    componentDidMount() {
        console.log(this.$router.params.status);
        this.$router.params.status = '待付款';
        // todo: 根据id 获取订单信息.
        // mock 数据了.
        let order = new Order();
        let message = order.getStatuInfo({status:this.$router.params.status});
        this.setState({
            content:message
        });
        console.log("orderStatus",message);
    }
    
    render(){
        return (
            <View className="mp-order-detail">
                <Header content={this.state.content}/>
                <Customer/>
                <Assemble content={this.state.content}/>
                <OrderProduct order={this.state.order} content={this.state.content}/>
                <Footer qrCode={this.state.content.qrCode}/>
                <ToolBar toolBar={this.state.content.toolBar}/>
            </View>
        )
    }
}