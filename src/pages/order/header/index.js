import {Component} from '@tarojs/taro';
import { View } from '@tarojs/components'
import './index.scss';

export default class Header extends Component{
    constructor(){
        super(...arguments);
    }

    render(){
        
        const {title,tip,icon} = this.props.content;

        return (
            <View className="tips">
                <Text>{title}</Text>
                <Text>{tip}</Text>
                <Text className={icon}></Text>
             </View>
        )
    }
}

