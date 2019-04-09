import {Component} from '@tarojs/taro';
import { View } from '@tarojs/components'
import './index.scss';
import Assemble from './../assemble';
import OrderProduct from './../product';
import Footer from './../footer';
import Header from './../header';
import Customer from './../customer';
import ToolBar from './../toolbar';

export default class OrderDetail extends Component{
    constructor(){
        super(...arguments);
    }

    config = {
        navigationBarTitleText: '订单详情'
    }

    render(){
        return (
            <View className="mp-order-detail">
                <Header/>
                
                <Customer/>

                <Assemble/>

                <OrderProduct/>

                <Footer/>

                <ToolBar/>
            </View>
        )

    }
}