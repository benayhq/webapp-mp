import Taro,{Component} from '@tarojs/taro';
import {View,Button,Text} from "@tarojs/components";
import './index.scss';
import jump from './../../utils/jump';
import * as actions from './../../../actions/user';
import {connect} from '@tarojs/redux';

@connect(state=>state.user,actions)
export default class Info extends Component{

    
    constructor(props){
        super(...arguments);
    }

    jumpUrl(url){
        // todo: 验证用户是否登录了?.
        jump({url:url});
    }

    onGetUserInfo(){
        
        Taro.getUserInfo().then((res) => {
            console.log('res',res);
            const { errMsg, userInfo } = res
            if (errMsg === 'getUserInfo:ok') {
              Taro.showToast({
                title: `微信昵称: ${userInfo.nickName}，请使用邮箱登录`,
                icon: 'none'
              })
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
            <View className="mp-user__info" >
                    <View className="mp-user__info-avatar">
                        <Text className="mp-icon mp-icon-avatar"></Text>
                    </View>
                    <View className="mp-user__info-message">
                        <View className="mp-user__user-username">{this.props.user.userName}</View>
                        <View className="mp-user__user-level">
                                {this.props.user.level}
                        </View>
                        <View className="mp-user__user-level-up"> {this.props.user.levelText}</View>
                    </View>
                    {
                        this.props.user.amount && 
                        <View className="mp-user__info-money">
                            <View className="mp-user__money-amount">{this.props.user.amount}</View>
                            <View className="mp-user__money-order">已结定金</View>
                        </View>
                    }
                    <Button  className="mp-user__update" openType="getUserInfo" lang="zh_CN" 
            onGetUserInfo={this.onGetUserInfo} type='primary'> 更新资料 </Button>
            </View>
        )
    }
}
