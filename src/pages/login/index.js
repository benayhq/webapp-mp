import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'
import {AtButton } from 'taro-ui';
import * as actions from '../user/store/actionCreators';
import {connect} from '@tarojs/redux';

@connect(state=>state.user,actions)
export default class Login extends Component{
    config = {
        navigationBarTitleText: '登录'
    }
    
    async HandleAutoLogin(){

        var global = this;
        var result = await Taro.getUserInfo();
        const { errMsg,userInfo } = result;
        if (errMsg === 'getUserInfo:ok') {
            Taro.setStorage({key:'authinfo',data:userInfo});
            wx.login({async success(res){
                const loginResponse = await global.props.WeChatLogin({ code:res.code });
                console.log('loginResponse ---',loginResponse);
                if(loginResponse.result === "success"){
                   global.WeChatLogin(loginResponse);
                }
                else if(loginResponse.error === "USER_NOT_EXIST"){
                    let payload = {
                        code:res.code,
                        nickName:userInfo.nickName,
                        profileUrl:userInfo.avatarUrl
                    };
                    await global.props.CreateNewUser(payload);
                    global.WeChatLogin(await global.props.WeChatLogin({ code:res.code }));
                }
                else{
                    Taro.showToast({
                        title: '授权失败,请重试.',
                        icon: 'none'
                    })
                }
               }
            });
        }
        else{
            Taro.showToast({
                title: '授权失败,请重试.',
                icon: 'none'
            })
        }
    }

   async WeChatLogin(loginResponse){
        const result = await Taro.setStorage({key:'sessionId',data:loginResponse.content});
        if(result.errMsg === "setStorage:ok"){
            const {userInfo } = await Taro.getUserInfo();
            const rstUserInfo = await this.props.GetUserInfo({});
            let payload = {
                id:rstUserInfo.content.id,
                nickname:userInfo.nickName,
                name:userInfo.nickName,
                profileUrl:userInfo.avatarUrl
            };
            await this.props.UpdateUserInfo(payload);
            const data = rstUserInfo.content;
            Taro.setStorage({key:'userinfo',data});
            Taro.navigateTo({
                url:'../../pages/user/index'
            })
        }
    }
    // className="wechat-login"
    render(){
        return (
            <View>
                <View className="login-logo">
                    <View className="login-font">
                        <image style="width:130px;height:130px;margin:0 auto;padding:0px;margin-top:80px;" src="https://lovemeipin.oss-cn-shanghai.aliyuncs.com/common/logo@2x.png"></image>
                    </View>
                </View>
                <View className="login-action">
                {/* <AtButton onClick={this.HandleAutoLogin.bind(this)} type='primary'>按钮文案</AtButton>     */}
                    <AtButton
                    
                        text='微信登录'
                        openType='getUserInfo' onGetUserInfo={this.HandleAutoLogin.bind(this)}
                        type='primary' size='small'>微信登录</AtButton>
                </View>
            </View>
        );
    }
}