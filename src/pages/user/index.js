import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import UserOrder from './order';
import InCome from './income';
import Creator from './common/create';
import './index.scss';
import * as actions from './store/actionCreators';
import {connect} from '@tarojs/redux';
import { AtButton,AtList, AtListItem,AtCard } from 'taro-ui';
import jump from '../utils/jump';

@connect(state=>state.user,actions)
class Index extends Component{
  
  config = {
    navigationBarTitleText: '个人中心'
  }

  constructor(props){
    super(props);
    this.state = {
      isAgent:false,
      list:[],
      orders:[],
      profit:{},
      flag:false,
      userName:'',
      context1:'',
      context2:'',
      context3:'',
      context4:'',
      showUserText:'切换为咨询师',
      avatarUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559209366699&di=07cc06c3fdf4cbac5d814dca9cd680b5&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fa12f24e688c1cda3ff4cc453f3486a88adaf08cc2cdb-tQvJqX_fw658',
    }
  }

  componentDidMount(){
      this.init();
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
    this.autoLogin();
    this.bindEvent();
    this.initReservationPlan();
    this.initLoanFlag();
    let creatorInstance = new Creator();
    this.initOrderNotice(creatorInstance,false);
    this.setState({
        isAgent:false,
        list:creatorInstance.factory(false).getPanelList(),
        user:creatorInstance.factory(false).getUserInfo()
    })
  }

  async initOrderNotice(creatorInstance,isAgent){
    var list = creatorInstance.factory(isAgent).getList();
    const response = await this.props.dispatchReservationCount({});
    list.map((item,key)=>{
        switch(item.status){
          case "UNPAY":
            item.count = response.content.unpayCount;
            break;
          case "BATING":
              item.count = response.content.batingCount;
            break;
          case "CONSUMPTION":
              item.count = response.content.consumptionCount;
            break;
          case "COMMENTING":
              item.count = response.content.commentingCount;
            break;
        }
    });
    this.setState({
      orders:list
    })
  }

  initReservationPlan(){
    this.props.dispatchReservationPlan().then((response)=>{
      this.setState({
        profit:response.content
      });
    })
  }

  initLoanFlag(){
    var that = this;
    this.props.dispatchLoanInfo().then((response)=>{
      that.setState({
        flag:response.content.flag,
        context1:response.content.context1,
        context2:response.content.context2,
        context3:response.content.context3,
        context4:response.content.context4
      });
    });
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

  async getJpushAuthInfo(){
    const result = Taro.getStorage({key:'jpushAuth'}).then(res => {return res.data}).catch(() => '')
    return result;
  }
  
  async handleAuthClick(){
    // wx.login({
    //   success (res) {
    //     if (res.code) {
    //       console.log('res.code',res.code);
    //       //发起网络请求
    //       wx.request({
    //         url: 'https://test.com/onLogin',
    //         data: {
    //           code: res.code
    //         }
    //       })
    //     } else {
    //       console.log('登录失败！' + res.errMsg)
    //     }
    //   }
    // });
    // return;
    Taro.getUserInfo().then((res) => {
        const { errMsg, userInfo } = res;
        if (errMsg === 'getUserInfo:ok') {
          Taro.setStorage({key:'authinfo',data:userInfo});

          let payload = {
            id:userInfo.id,
            nickname:userInfo.nickName,
            name:userInfo.nickName
          };

          this.setState({
            avatarUrl:userInfo.avatarUrl,
            userName:userInfo.nickName
          });

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
      let creatorInstance = new Creator();
      this.setState({
          isAgent:!isAgent,
          list:creatorInstance.factory(!isAgent).getPanelList(),
          orders:this.initOrderNotice(creatorInstance,!isAgent),
          user:creatorInstance.factory(!isAgent).getUserInfo()
      })
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

  handleUpdateInfo(){
    Taro.navigateTo({
      url:'info/edit?userId='+this.state.profit.id
    })
  }

  handleAppLoan(){
    Taro.navigateTo({
      url:'../../pages/p2p/index'
    })
  }

  handleJumpUrl(url,event){
    console.log('url',url);

    Taro.navigateTo({
      url:'../../'+url
    })
  }

  handleContact (e) {
    console.log(e.path)
    console.log(e.query)
  }

  render(){
    const {isAgent,avatarUrl,userName,profit,orders,flag} = this.state;

    return (
      <View className='mp-user'>
        <View className="mp-user__info"  >
                <image style="width:50px;height:50px;margin:20px 10px 0px 10px;border-radius:69px;float:left;"
                        src={avatarUrl}>
                </image>
                <View className="mp-user__info-message"  onClick={this.handleUpdateInfo.bind(this)} > 
                    <View className="mp-user__user-username">{userName}</View>
                    {
                      profit && profit.creditLevel && 
                      <View className="mp-user__user-level">
                          {profit? `信用等级:${profit.creditLevel}`:''}
                      </View>
                    } 
                    <View className="mp-user__user-level-up"> </View>
                </View>
                {
                    isAgent && 
                    <View className="mp-user__info-money">
                        <View className="mp-user__money-amount">{profit?profit.verifyEarnest:0}</View>
                        <View className="mp-user__money-order">已结定金</View>
                    </View>
                }
       </View>
       { isAgent && <InCome profit={profit}/> }
       { isAgent && <View className="mp-user__publish">
                <View className="mp-user__publish-introduce">助力朋友圈获客</View>
                <View className="mp-user__publish-introduce-desc">拼团活动老带新</View>
                <View className="mp-user__publish-action" >
                    <AtButton
                      text='微信登录'
                      openType='getUserInfo' onGetUserInfo={this.handleAuthClick}
                    type='primary' size='small'>发布活动</AtButton>
                </View>
            </View>
        }
        <UserOrder list={orders}/>
        <View className="mp-user__list">
          <AtList>
            {
                this.props.list.map(item=>(
                    <AtListItem
                    title={item.text}
                    arrow='right'
                    thumb={item.url}
                    onClick={this.handleJumpUrl.bind(this,item.pageUrl)}
                    />
                ))
            }
          </AtList>
          { !isAgent && <button open-type="contact" bindcontact="handleContact">客服服务</button>}
        </View>

        { !isAgent && flag && 
          <View className="mp-user__loan">
          <AtCard
          title={this.state.context1}>
              <View className="mp-user__loan-text">{this.state.context2}</View>
              <View className="mp-user__loan-amount">{this.state.context3}</View>
              <View className="mp-user__loan-desc">{this.state.context4}</View>
              <View className="mp-user__loan-application" onClick={this.handleAppLoan.bind(this)}>
                  立即申请
              </View>
          </AtCard>
        </View>
       }
      
        <View className="mp-user-changeuser" onClick={this.handleChangeState.bind(this)}> 
                {this.state.showUserText} 
        </View>
      </View>
    )
  }
}

export default Index;