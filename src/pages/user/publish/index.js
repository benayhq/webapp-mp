import {Component} from '@tarojs/taro';
import {View} from '@tarojs/components';
import { AtButton } from 'taro-ui';
import './index.scss';
import jump from '../../utils/jump';

export default class Publish extends Component{
    constructor(){
        super(...arguments);
    }

    jump(url){
        jump({url:url});
    }

    render(){
        return (
            <View className="mp-user__publish">
                <View className="mp-user__publish-introduce">让客户来为您拓展客户</View>
                <View className="mp-user__publish-action">
                <AtButton onClick={this.jump.bind(this,'/pages/active/publish/index')} type='primary' size='small'>发布活动</AtButton>
                </View>
            </View>
        )
    }
}