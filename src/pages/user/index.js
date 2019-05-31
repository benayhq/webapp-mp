import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import UserOrder from './order';
import InCome from './income';
import Publish from './publish';
import Info from './info';
import Panel from './panel';
import ChangeUser from './switch';
import Creator from './common/create';
import './index.scss';
import * as actions from './store/actionCreators';
import {connect} from '@tarojs/redux';
import { AtButton } from 'taro-ui';
import jump from '../utils/jump';

@connect(state=>state.user,actions)
class Index extends Component{

  config = {
    navigationBarTitleText: '个人中心'
  }

  constructor(props) {
    super(props);
    this.state = {
      isAgent:false,
      list:[],
      orders:[],
      userName:'',
      showUserText:'切换为咨询师',
      avatarUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559209366699&di=07cc06c3fdf4cbac5d814dca9cd680b5&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fa12f24e688c1cda3ff4cc453f3486a88adaf08cc2cdb-tQvJqX_fw658',
    }
    this.init();
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

  init(){
    this.initState();
    this.autoLogin();
    this.bindEvent();
  }
  

  initState(){
     this.initPanelList();
  }

  initPanelList(isAgent){
      let creatorInstance = new Creator();
      this.setState({
          isAgent:isAgent,
          list:creatorInstance.factory(isAgent).getPanelList(),
          orders:creatorInstance.factory(isAgent).getList(),
          user:creatorInstance.factory(isAgent).getUserInfo()
      })
  }

    bindEvent(){
      this.handleChangeState = this.handleChangeState.bind(this);
  }

  async getAuthInfo(){
    const result = Taro.getStorage({key:'userinfo'}).then(res => {return res.data});
     return result;
  }

  autoLogin(){
      var currentObj = this;
      wx.login({
          success(res) {
              var payload = {
                  code:res.code
              };
              currentObj.props.WeChatLogin(payload).then((res)=>{
                  Taro.setStorage({key:'userinfo',data:res.content});
              });
          }
      });
  }
  
  async handleAuthClick(){
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
          this.setState({
            avatarUrl:userInfo.avatarUrl,
            userName:userInfo.nickName
          })

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

  handleChangeState(){
      this.props.ChangeToAgent({});
      const {isAgent} = this.state;
      this.initPanelList(isAgent);
      this.setState({
          isAgent:!isAgent,
          showUserText:!isAgent? '切换为用户' : '切换为咨询师'
      })
  }
  
  jumpUrl = (url) =>{
    Taro.navigateTo({
      url: url
    })
  }

  changeValue = () =>{
     console.log('changeValue');
  }

  render(){
    const {isAgent,avatarUrl,userName} = this.state;

    return (
      <View className='mp-user'>
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
                        isAgent && 
                        <View className="mp-user__info-money">
                            <View className="mp-user__money-amount">1000</View>
                            <View className="mp-user__money-order">已结定金</View>
                        </View>
                    }
       </View>
        {/* <Info user={this.state.user}  isAgent={isAgent}/> */}
       { isAgent && <InCome/> }  
       { isAgent &&     <View className="mp-user__publish">
                <View className="mp-user__publish-introduce">让客户来为您拓展客户</View>
                <View className="mp-user__publish-action">
                <AtButton 
                   text='微信登录'
                   openType='getUserInfo'
                   onGetUserInfo={this.handleAuthClick}
                type='primary' size='small'>发布活动</AtButton>
                </View>
            </View>
        }  
        <UserOrder list={this.state.orders}/>
        <Panel list={this.state.list}/>
        <View className="mp-user-changeuser" onClick={this.handleChangeState.bind(this)}> 
                {this.state.showUserText} 
        </View>
        {/* <ChangeUser role={userInfo.role}/> */}
      </View>
    )
  }
}

export default Index;