import Taro, { Component } from '@tarojs/taro'
import { View,ScrollView} from '@tarojs/components'
import UserOrder from './order';
import InCome from './income';
import Creator from './common/create';
import './index.scss';
import * as actions from './store/actionCreators';
import {connect} from '@tarojs/redux';
import {AtList, AtListItem,AtCard,AtModal, AtModalHeader, AtModalContent, AtModalAction } from 'taro-ui';
import {Loading} from './../../components';

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
      isOpened: false,
      showUserText:'',
      avatarUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559209366699&di=07cc06c3fdf4cbac5d814dca9cd680b5&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fa12f24e688c1cda3ff4cc453f3486a88adaf08cc2cdb-tQvJqX_fw658',
      isAgree: false,
      loaded:false,
      agreement:null
    }
  }

  componentDidMount(){
      this.init();
  }
  init(){
    this.autoLogin();
    this.initAgreeMent();
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

  async initAgreeMent(){
    const result = await this.props.GetAgreeMent();
    this.setState({
      agreement:result
    });
  }

  async getAuthInfo(){
     const result = Taro.getStorage({key:'userinfo'}).then(res => {return res.data});
     return result;
  }

  async autoLogin(){
    var currentObj = this;
    wx.login({async success(res){
              var payload = { code:res.code };
              const response = await currentObj.props.WeChatLogin(payload);
              if(response.result === "success"){
                const result = await Taro.setStorage({key:'sessionId',data:response.content});
                if(result.errMsg === "setStorage:ok"){
                  const rstUserInfo = await currentObj.props.GetUserInfo({});
                  const data = rstUserInfo.content,
                        isAgent = data.role === "AGENT" ? true : false,
                        creatorInstance = new Creator();
                  Taro.setStorage({key:'userinfo',data});
                  currentObj.checkAuth(data);
                  currentObj.initReservationPlan();
                  currentObj.initLoanFlag();
                  await currentObj.initOrderNotice(creatorInstance,isAgent);
                  currentObj.setState({
                      loaded:true,
                      showUserText: isAgent ? '切换为用户':'切换为咨询师',
                      isAgent:isAgent,
                      list:creatorInstance.factory(isAgent).getPanelList(),
                      user:creatorInstance.factory(isAgent).getUserInfo(),
                      avatarUrl:data.profileUrl,
                      userName:data.name
                  });
                }
              }
              else
              {
                Taro.showToast({
                  title: '网络异常',
                  icon: 'none'
                })
              }
          }
    });
  }

  initOrderStatus(){
    let creatorInstance = new Creator();
    let list = creatorInstance.factory(false).getList();
    this.setState({
      orders:list
    })
  }

  checkAuth(data){
      if(data.profileUrl && data.nickname){
        
      }
      else{
        Taro.navigateTo({
          url:'../../pages/login/index'
        });
      }
  }
  
  async handleAuthClick(){
    var result = await Taro.getUserInfo();
    const { errMsg, userInfo } = result;
    if (errMsg === 'getUserInfo:ok') {
      Taro.setStorage({key:'authinfo',data:userInfo});
      let payload = {
          id:userInfo.id,
          nickname:userInfo.nickName,
          name:userInfo.nickName,
          profileUrl:userInfo.avatarUrl
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
  }

  async handleChangeState(){
     const {isAgent} = this.state;
     var boolAgent = !isAgent;
     const result = await this.getAuthInfo();
     if(result.agentStatus === 1){
        boolAgent ? this.props.ChangeToAgent() : this.props.ChangeToCustomer();
        this.setState({
            isAgent: boolAgent,
            showUserText: boolAgent ? '切换为用户':'切换为咨询师'
        });
        let creatorInstance = new Creator();
        this.setState({
            isAgree:false,
            isAgent:boolAgent,
            list:creatorInstance.factory(boolAgent).getPanelList(),
            orders:this.initOrderNotice(creatorInstance,boolAgent),
            user:creatorInstance.factory(boolAgent).getUserInfo()
        });
     }
     else{
      this.setState({
        isAgree:true
      });
     }
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

  handleCloseAgree(){
    console.log('handleCloseAgree');
    this.setState({
      isAgree:false
    })
  }

  handleCancelAgree(){
    this.setState({
      isAgree:false
    })
  }

  async handleConfirmAgree(){
    await this.props.ChangeToAgent();
    const rstUserInfo = await this.props.GetUserInfo({});
    const data = rstUserInfo.content;
    Taro.setStorage({key:'userinfo',data});
    let creatorInstance = new Creator();
    this.setState({
        isAgree:false,
        isAgent:true,
        showUserText: true ? '切换为用户':'切换为咨询师',
        list:creatorInstance.factory(true).getPanelList(),
        orders:this.initOrderNotice(creatorInstance,true),
        user:creatorInstance.factory(true).getUserInfo()
    });
  }

  render(){
    const {isAgent,avatarUrl,userName,profit,orders,loaded,flag,isOpened,showUserText,list,isAgree,agreement} = this.state;
    const isShowLoanApp = !isAgent && flag;
    let renderTemplate = null;

    if(!loaded){
      renderTemplate = <Loading/>
    }
    else{
      renderTemplate = <View className='mp-user'>
      <AtModal
              isOpened={isAgree}
              closeOnClickOverlay={false}>
        <AtModalHeader>商家入驻协议</AtModalHeader>
        <AtModalContent>
            <ScrollView   
             scrollY
             className='mp-user__agree'>
               {
                 agreement
               }
            </ScrollView>
        </AtModalContent>
        <AtModalAction> 
          <Button onClick={this.handleCloseAgree.bind(this)}>取消</Button> 
          <Button onClick={this.handleConfirmAgree.bind(this)}>同意</Button> 
        </AtModalAction>
      </AtModal>
      <View className="mp-user__info"  >
              <image style="width:50px;height:50px;margin:20px 10px 0px 10px;border-radius:69px;float:left;"
                      src={avatarUrl}>
              </image>
              <View className="mp-user__info-message"  onClick={this.handleUpdateInfo.bind(this)} > 
                  <View className="mp-user__user-username">{userName}</View>
                  {
                    // profit && profit.creditLevel && 
                    <View className="mp-user__user-level">
                        更新资料
                        {/* {profit? `信用等级:${profit.creditLevel}`:''} */}
                    </View>
                  } 
                  <View className="mp-user__user-level-up"> </View>
              </View>
              {
                  isAgent && 
                  <View className="mp-user__info-money">
                      <View className="mp-user__money-amount">{profit && profit.verifyEarnest!=null ? profit.verifyEarnest:0}</View>
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
      <UserOrder list={orders} isAgent={isAgent}/>
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
        { 
          isAgent ? <button style={`position:relative;display:${ isAgent === true ?'block':'none'};top:-48px;height:30px;width:564rpx;left:20rpx;text-align:left;opacity: 0.8;padding-left:3px;padding-right:14px;margin-left:auto;margin-right:auto;box-sizing:border-box;font-size:32rpx;text-decoration:none;line-height:2.55555556;border-radius:5px;border:none;border:initial;-webkit-tap-highlight-color:transparent;overflow:hidden;color:#000000;background-color:#FFFFFF;`} className="customer-service-agent" open-type="contact" bindcontact="handleContact">客服服务</button>
        : <button style={`position:relative;display:${ isAgent === true ?'none':'block'};top:-90rpx;left:6rpx;height:40px;width:520rpx;opacity: 0.8; margin-left:auto;margin-right:auto;padding-left:0px;padding-right:14px;box-sizing:border-box;font-size:32rpx;text-align:left;text-decoration:none;line-height:2.55555556;border-radius:5px;border:none;border:initial;-webkit-tap-highlight-color:transparent;overflow:hidden;color:#000000;background-color:#FFFFFF;`}  open-type="contact" bindcontact="handleContact">客服服务</button>
        }
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
        </View> : <View></View>
       }
       <View className={isAgent?"mp-user-changeagent":"mp-user-changeuser"} onClick={this.handleChangeState.bind(this)}> 
         {showUserText}
       </View>   
     </View>
    }
    
    return (
        <View>
          {renderTemplate}
        </View>
    )
  }
}

export default Index;