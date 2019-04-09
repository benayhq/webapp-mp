import {Component} from '@tarojs/taro';
import { View } from '@tarojs/components'
import './index.scss';
import Info from './info';
import Code from './code';

export default class Footer extends Component{
    constructor(){
        super(...arguments);
    }

    render(){
        return (
            <View className="footer">
                <Code/>
                <Info/>
            </View>
        )
    }
}