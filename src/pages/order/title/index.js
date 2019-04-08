import {Component} from '@tarojs/taro';
import {View} from '@tarojs/components';
import './index.scss';
import jump from './../../utils/jump';

export default class Title extends Component {
    constructor(){
        super(...arguments);
    }

    jumpUrl(url){
        jump({url:url});
    }

    render(){
        return (
            <View className="order-title">
                <Text>医美管家 vivi</Text>
                <Text className="mp-icon mp-icon-arrow-balck" onClick={this.jumpUrl.bind(this,'/pages/order/detail/index')}></Text>
                {
                    this.props.OrderState && <Text>{this.props.OrderState}</Text>
                }
            </View> 
        )
    }
}