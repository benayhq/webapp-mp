import {Component} from '@tarojs/taro';
import { View } from '@tarojs/components'
import './index.scss';

export default class Header extends Component{
    constructor(){
        super(...arguments);
    }
    render(){
        return (
            <View className="tips">
                <Text>{this.props.content && (this.props.content.displayStatusDes)}</Text>
                <Text></Text>
                <Text className='mp-icon mp-icon-order-waitpay success'></Text>
             </View>
        )
    }
}

