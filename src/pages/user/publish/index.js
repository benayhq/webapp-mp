import Taro,{Component} from '@tarojs/taro';
import {View} from '@tarojs/components';
import { AtButton } from 'taro-ui';
import './index.scss';
import jump from '../../utils/jump';
import {connect} from '@tarojs/redux';
import * as actions from '../store/actionCreators';
var Event = require('./../../../utils/event');
console.log('event',Event.getEventInstance());

@connect(state=>state.user,actions)
export default class Publish extends Component{

    async getAuthInfo(){
      const result = Taro.getStorage({key:'userinfo'}).then(res => {return res.data});
       return result;
    }

    async jump(){
        Event.getEventInstance().emit("name","keliu")
        console.log(' Event.getEventInstance()',Event.getEventInstance());
        return;
        const authInfo = await this.getAuthInfo();
        Taro.getUserInfo().then((res) => {
            const { errMsg, userInfo } = res;
            if (errMsg === 'getUserInfo:ok') {
              Taro.setStorage({key:'authinfo',data:userInfo});

     
              let payload = {
                id:authInfo.id,
                nickname:userInfo.nickName,
                name:userInfo.nickName
              };
              this.props.UpdateUserInfo(payload).then((res)=>{
                if(res.result==="success"){
                    jump({url:'/pages/active/publish/index'});
                }
              });
            } else {
              Taro.showToast({
                title: '授权失败',
                icon: 'none'
              })
            }
        });
    }

    render(){
        return (
            <View className="mp-user__publish">
                <View className="mp-user__publish-introduce">让客户来为您拓展客户</View>
                <View className="mp-user__publish-action">
                <AtButton 
                   text='微信登录'
                   openType='getUserInfo'
                   onGetUserInfo={this.jump}
                type='primary' size='small'>发布活动</AtButton>
                </View>
            </View>
        )
    }
}
