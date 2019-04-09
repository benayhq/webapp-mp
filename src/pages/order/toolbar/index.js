import {Component} from '@tarojs/taro';
import { View } from '@tarojs/components'
import './index.scss';
import { AtButton } from 'taro-ui';

export default class ToolBar extends Component{
    constructor(){
        super(...arguments);
    }

    render(){
        return (
            <View className="toolbar">
            <AtButton type='primary' size='small'>退款申请</AtButton> 
            <Text className="margin40"></Text>
            <AtButton type='primary' size='small'>我要评价</AtButton>
            <Text className="margin40"></Text>
        </View>
        )
    }
}