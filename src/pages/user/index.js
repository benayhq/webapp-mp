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
import * as actions from './../../actions/user';
import {connect} from '@tarojs/redux';

@connect(state=>state.user,actions)
class Index extends Component{

  config = {
    navigationBarTitleText: '个人中心'
  }

  constructor(props) {
    super(props);
    this.state = {
      isAgent:true,
      list:[],
      orders:[]
    }
  }

  componentDidMount(){
    this.init();
  }

  init(){
    this.initPanelList();
    this.initState();
    this.autoLogin();
  }
  
  handleChangeState(){
      this.initPanelList();
  }

  initState(){
      this.handleChangeState = this.handleChangeState.bind(this);
  }

  initPanelList(){
      let creatorInstance = new Creator();
      this.setState({
          isAgent:true,
          list:creatorInstance.factory(true).getPanelList(),
          orders:creatorInstance.factory(true).getList(),
          user:creatorInstance.factory(true).getUserInfo()
      })
  }

  autoLogin(){
      var currentObj = this ;
      wx.login({
          success(res) {
              console.log('res.code',res.code);
              var payload = {
                  code:res.code
              };
              currentObj.props.WeChatLogin(payload).then((res)=>{
                   console.log('currentObj.props.WeChatLogin(payload)',res);
              });
          }
      });
  }

  jumpUrl = (url) =>{
    Taro.navigateTo({
      url: url
    })
  }
  
  render () {
    const {isAgent} = this.state;

    return (
      <View className='mp-user'>
        <Info user={this.state.user}/>
       { isAgent && <InCome/> }  
       { isAgent &&  <Publish/> }  
        <UserOrder list={this.state.orders}/>
        <Panel list={this.state.list}/>
        <ChangeUser/>
      </View>
    )

  }
}

export default Index;