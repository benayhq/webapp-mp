import {Component} from '@tarojs/taro';
import {View} from '@tarojs/components';
import './index.scss';
import jump from './../../utils/jump';

export default class Title extends Component {
    constructor(){
        super(...arguments);
    }

    jumpUrl(url){
        jump({url:url + `?status=${this.props.OrderState}`});
    }

    render(){
        return (
            <View className="order-title" onClick={this.jumpUrl.bind(this,'/pages/order/detail/index')}>
                <Text>{
                    this.props.agentName
                }</Text>
                <Text className="mp-icon mp-icon-arrow-balck" ></Text>
                {
                    this.props.OrderState && <Text>{this.props.OrderState}</Text>
                }
            </View> 
        )
    }
}