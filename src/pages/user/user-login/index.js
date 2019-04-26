import Taro,{Component} from '@tarojs/taro';
import {View,Button} from '@tarojs/components';
import {connect} from '@tarojs/redux';
import * as actions from './../../../actions/user';
import './index.scss';

@connect(state=>state.user,actions)
class UserLogin extends Component{

    config = {
        navigationBarTitleText: '登录 美拼'
    }

    WeChatLogin(){
        let wechat = this.props.WeChatLogin('xxxx');
        console.log('wechat',wechat);

        // wx.login({
        //     success(res) {
        //       if (res.code) {
        //         // 发起网络请求
        //         wx.request({
        //           url: 'https://test.com/onLogin',
        //           data: {
        //             code: res.code
        //           }
        //         })
        //       } else {
        //         console.log('登录失败！' + res.errMsg)
        //       }
        //     }
        // })
    }

    render(){
        return (
            <View>
                <View className="user-login__logo"> 美 拼 </View>

                <View className="user-login__auth">
                    <Button onClick={this.WeChatLogin}> 微信授权登录 </Button>
                    <Button> 手机快捷登录 </Button>
                </View>
            </View>
        )
    }
}
export default UserLogin;