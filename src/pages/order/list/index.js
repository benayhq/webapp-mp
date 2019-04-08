import {Component} from '@tarojs/taro';
import './index.scss';
import ProductItem from './../../../component/product';
import { AtButton } from 'taro-ui';
import jump from './../../utils/jump';
import Title from '../title';

export default class OrderItem extends Component{

    constructor(){
        super(...arguments);
        this.state = {
            OrderState:'待付款'
        }
    }
    
    jumpUrl(url){
        jump({url:url});
    }

    render(){
        return (
            <View className="mp-order-list" onClick={this.jumpUrl.bind(this,'/pages/order/detail/index')}>
                <Title OrderState={this.state.OrderState}/>
                <ProductItem/>
                <View className="order-action">
                    <View  className="action">
                        <AtButton type='primary' size='small'>支付订单</AtButton>
                    </View>
                    <Text></Text>  
                </View>
            </View>
        )
    }
}