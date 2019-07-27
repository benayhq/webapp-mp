import Taro, { Component } from '@tarojs/taro'
import { View,WebView } from '@tarojs/components'
import UserOrder from './order';
import InCome from './income';
import Creator from './common/create';
import './index.scss';
import * as actions from './store/actionCreators';
import {connect} from '@tarojs/redux';
import { AtButton,AtList, AtListItem,AtCard,AtTabBar,AtModal, AtModalHeader, AtModalContent, AtModalAction } from 'taro-ui';
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
      current: 0,
      userName:'',
      context1:'',
      context2:'',
      context3:'',
      context4:'',
      isOpened:false,
      showUserText:'切换为咨询师',
      avatarUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559209366699&di=07cc06c3fdf4cbac5d814dca9cd680b5&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fa12f24e688c1cda3ff4cc453f3486a88adaf08cc2cdb-tQvJqX_fw658',
    }
  }

  componentDidMount(){
      this.init();
      var that = this;
        Taro.getStorage({key:'authinfo'}).then(res=>{
          that.setState({
              avatarUrl:res.data.avatarUrl,
              userName:res.data.nickName
          })
        }).catch(()=> {
          that.setState({
            isOpened:true
          })
        });
  }

 init(){
    this.autoLogin();
  }

  async initOrderNotice(creatorInstance,isAgent){
    var list = creatorInstance.factory(isAgent).getList();
    const response = await this.props.dispatchReservationCount({});
    if(list && list.length>0){
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
                  currentObj.setState({
                    userName:res.content.name
                  });
                  Taro.setStorage({key:'userinfo',data:res.content});
              }).then(()=>{
                currentObj.initReservationPlan();
                currentObj.initLoanFlag();
                let creatorInstance = new Creator();
                currentObj.initOrderNotice(creatorInstance,false);
                currentObj.setState({
                    isAgent:false,
                    list:creatorInstance.factory(false).getPanelList(),
                    user:creatorInstance.factory(false).getUserInfo()
                })
              });
          }
    });
  }


  async getJpushAuthInfo(){
    const result = Taro.getStorage({key:'jpushAuth'}).then(res => {return res.data}).catch(() => '')
    return result;
  }

  async handleAuthClick(){
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
              console.log('res',res);
              this.setState({
                isOpened:false
              });
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
      const {isAgent} = this.state;
      var boolAgent = !isAgent;
      this.setState({
          isAgent: boolAgent,
          showUserText: !isAgent ? '切换为用户':'切换为咨询师'
      });
      this.props.ChangeToAgent({}).then((response)=>{
      });
      let creatorInstance = new Creator();
      this.setState({
          isAgent:boolAgent,
          list:creatorInstance.factory(!isAgent).getPanelList(),
          orders:this.initOrderNotice(creatorInstance,!isAgent),
          user:creatorInstance.factory(!isAgent).getUserInfo()
      });
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
    Taro.navigateTo({
      url:'../../'+url
    })
  }

  handleContact (e) {
  }

  handleClick (value) {
    this.setState({
      current: value
    });
  }

  handlePublish(){
    Taro.navigateTo({
      url:'../../pages/active/publish/index'
    })
  }

  render(){
    const {isAgent,avatarUrl,userName,profit,orders,flag,isOpened,showUserText,list} = this.state;
    const isShowLoanApp = !isAgent && flag;

    console.log('list',list);

    return (
      <View className='mp-user'>

      <AtModal isOpened={isOpened}>
        <AtModalHeader>授权登录</AtModalHeader>
        <AtModalContent>
           <View className="mp-user__authinfo">申请获取以下权限</View>
           获取你的公开信息(呢称,头像等)
        </AtModalContent>
        <View className="wechat-login">
          <AtButton
             className="mp-user__login"
             text='微信登录'
             openType='getUserInfo' onGetUserInfo={this.handleAuthClick}
             type='primary' size='small' >授权登录</AtButton>
        </View>
      </AtModal>

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
 
      {
        isAgent && <View className="mp-user__publish">
              <View className="mp-user__publish-introduce">助力朋友圈获客</View>
              <View className="mp-user__publish-introduce-desc">拼团活动老带新</View>
              <View className="mp-user__publish-action" onClick={this.handlePublish.bind(this)}>
                  发布活动
              </View>
          </View>
      } 

      <UserOrder list={orders}/>

      <View className="mp-user__list">
        <AtList>
          {
               list.length>0 && list.map(item=>(
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
      { isShowLoanApp === true ?
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
      </View> : ""
      }
     
      <View className="mp-user-changeuser" onClick={this.handleChangeState.bind(this)}> 
              {showUserText}
      </View> 

    </View>
    )
  }
}

export default Index;