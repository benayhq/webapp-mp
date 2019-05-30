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
      showUserText:'切换为咨询师'
    }
    this.init();
  }

  componentDidMount(){
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

  render(){
    const {isAgent} = this.state;

    return (
      <View className='mp-user'>
        <Info user={this.state.user} isAgent={isAgent}/>
       { isAgent && <InCome/> }  
       { isAgent &&  <Publish/> }  
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