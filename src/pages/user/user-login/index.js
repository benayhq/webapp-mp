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
        wx.login({
            success(res) {
                console.log('res.code',res.code);
              if (res.code) {
                // 发起网络请求
                wx.request({
                  method:'POST',
                  url: 'https://lovemeipin.com/meipin/wx/v1/wxuser/wxLogin',
                  data: {
                    code: res.code
                  },
                  header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                  }
                })
              } else {
                console.log('登录失败！' + res.errMsg)
              }
            }
        });
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