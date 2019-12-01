import Taro,{Component} from '@tarojs/taro';
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

@connect(state=>state,actions)
export default class OrderDetail extends Component{
    constructor(){
        super(...arguments);
        this.state = {
            order:{
                agentName:'医美管家 vivi'
            },
            content:{},
            id:0
        };
    }
    config = {
        navigationBarTitleText: '订单详情'
    }

    async init(){
        var payload = {
            id:this.state.id
        };
        const response = await this.props.dispatchOrderDetail(payload)
        
        console.log('response.content',response.content);
        this.setState({
            content:response.content
        });
    }

    componentWillMount(){
        this.setState({
            id:this.$router.params.orderId
        });
        // this.init();
    }

    componentDidMount() {
        this.init();
    }
    render(){
        const {content=[],order} = this.state;
        
        return (
            <View className="mp-order-detail">
                <Header content={content}/>
                {content.customerName && <Customer content={content}/>} 
                {content.batchUsers && <Assemble content={content}/>}
                <OrderProduct order={order} content={content}/>
                <Footer content={content} qrCode={content ? content.qrCode : ""}/>
                <ToolBar toolBar={content ? content.toolBar : ""}/>
            </View>
        )
    }
}

