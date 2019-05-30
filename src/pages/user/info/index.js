import Taro,{Component} from '@tarojs/taro';
import {View,Button,Text} from "@tarojs/components";
import './index.scss';
import jump from './../../utils/jump';
import {connect} from '@tarojs/redux';
import * as actions from '../store';

@connect(state=>state.user,actions)
export default class Info extends Component{
    constructor(props){
        super(...arguments);
        this.state = {
            avatarUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559209366699&di=07cc06c3fdf4cbac5d814dca9cd680b5&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fa12f24e688c1cda3ff4cc453f3486a88adaf08cc2cdb-tQvJqX_fw658',
            userName:''
        };
    }

    componentDidMount(){

        var that = this;
        Taro.getStorage({key:'authinfo'}).then(res=>{
            console.log('res.data.avatarUrl',res.data.avatarUrl);
            that.setState({
                avatarUrl:res.data.avatarUrl,
                userName:res.data.nickName
            })
       });
    }

    jumpUrl(url){
        jump({url:url});
    }

    onGetUserInfo(){
        var currentObj = this;
        
        Taro.getUserInfo().then((response) => {
            const { errMsg, userInfo } = response;

            currentObj.setState({
                userinfo:response.rawData
            },()=>{
                console.log('this.state',this.state.userinfo);
            });
            if (errMsg === 'getUserInfo:ok') {
                var payload = {
                    id:39
                };
            } else {
              Taro.showToast({
                title: '授权失败',
                icon: 'none'
              })
            }
        });
    }

    render(){

        const {avatarUrl,userName} = this.state;

        return (
            <View className="mp-user__info" >
                    <image style="width:50px;height:50px;margin:20px 10px 0px 10px;border-radius:69px;float:left;"
                            src={avatarUrl}>
                        </image>
                    <View className="mp-user__info-message">
                        <View className="mp-user__user-username">{userName}</View>
                        <View className="mp-user__user-level">
                              ddd
                        </View>
                        <View className="mp-user__user-level-up"> </View>
                    </View>
                    {
                        this.props.isAgent && 
                        <View className="mp-user__info-money">
                            <View className="mp-user__money-amount">1000</View>
                            <View className="mp-user__money-order">已结定金</View>
                        </View>
                    }
            </View>
        )
    }
}
