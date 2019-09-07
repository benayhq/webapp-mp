import Taro, { Component } from '@tarojs/taro'
import { View,WebView,ScrollView} from '@tarojs/components'
import UserOrder from './order';
import InCome from './income';
import Creator from './common/create';
import './index.scss';
import * as actions from './store/actionCreators';
import {connect} from '@tarojs/redux';
import { AtButton,AtList, AtListItem,AtCard,AtTabBar,AtModal, AtModalHeader, AtModalContent, AtModalAction } from 'taro-ui';
import jump from '../utils/jump';
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
      loaded:false
    }
  }

  componentDidMount(){
      this.init();
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
        // this.setState({
        //   isOpened:false
        // })
      }
      else{
        Taro.navigateTo({
          url:'pages/login/index'
        });
      }
  }

  async getJpushAuthInfo(){
    const result = Taro.getStorage({key:'jpushAuth'}).then(res => {return res.data}).catch(() => '')
    return result;
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
    const {isAgent,avatarUrl,userName,profit,orders,loaded,flag,isOpened,showUserText,list,isAgree} = this.state;
    const isShowLoanApp = !isAgent && flag;

    let renderTemplate = null;

    if(!loaded){
      renderTemplate = <Loading/>
    }
    else{
      renderTemplate = <View className='mp-user' >
      <AtModal
              isOpened={isAgree}
              closeOnClickOverlay={false}>
        <AtModalHeader>商家入驻协议</AtModalHeader>
        <AtModalContent>
            <ScrollView   
             scrollY
             className='mp-user__agree'>
              <View>
              1、特别提示
              </View>
              <View>
              本协议由上海美拼网络科技有限公司（为便于理解，下称“本公司”）为规范你（包括个人、个体工商户和企事业单位）使用美拼平台（下称“本平台”）的行为而制定，具有合同法律效力。你应认真阅读并遵守本协议和《微信公众平台运营规范》。请你务必审慎阅读、充分理解各条款内容，特别是免除或者限制责任的条款、争议解决和法律适用条款。免除或者限制责任的条款可能以加粗字体显示，你应重点阅读。除非你已阅读并接受本协议所有条款，否则你无权使用本平台。你使用本平台即视为你已阅读并同意本协议的约束。如你有任何疑问，应向本公司客服咨询。
              </View>
              <View>2、定义</View>
              <View>
              <View>
              如无特别说明，下列术语在本协议中的定义为：
              </View>
              <View>
              2.1 美拼平台账号：指你在美拼平台注册的，用于登录美拼平台的帐号（以下或称“帐号”）。
              </View>
              <View>
              2.2 美拼平台：指本公司提供和维护的商户管理软件系统（网址：http://www.lovemeipin.com），你应通过该系统提交相应资料和信息，进而开通使用权限。成功开通后，你可以通过该系统使用商城管理和营销推广等相关功能，具体功能以该系统实际提供的为准，且该系统将根据本公司的需要进行调整和增减。
              </View>
              </View>
              <View>
              3、你的权利和义务
              </View>
              <View>
              3.1 在使用本平台前，你应注册并获得使用账号。
              </View>
              <View>
              3.2 你应妥善保管登录账号和登录密码等敏感信息，当发生信息泄露或密码遗失时，你应立即向客服（13052225271）申请挂失。若客服人员要求你提供书面证明材料才能进行下一步挂失操作的，你应及时提交书面证明材料。你的登录账号在本平台中的一切操作均视为你的行为，由你承担所有责任。
              </View>
              <View>
              3.3 你应对附属登录账号的创建、授权、删除等事项尽管理职责。附属登录账号在本平台中的一切操作同样视为你的行为，由你承担所有责任。
              </View>
              <View>
              3.4 你在本平台中的一切操作均应符合国家法律法规、规章政策和法令的规定，还应符合本协议条款和相关规则的规定。你在本平台中的一切操作负全部法律责任。你应对本平台中的一些操作自行加以判断，并承担因你的操作而引起的所有风险。本公司无法且不会对因前述风险而导致的任何损失或损害承担责任。
              </View>
              <View>
              3.5 你在使用本平台过程中若产生纳税或代扣代缴税款的义务，你应自行承担，本公司不承担任何纳税或代扣代缴税款的义务。
              </View>
              <View>
              3.6 未经本公司书面授权，你不得转载、复制、截取、篡改本平台页面上的内容或制作与该内容有关的衍生产品。
              </View>
              <View>
              3.7 你使用本平台功能，需根据本平台提供的技术开发文档进行接口调试。
              </View>
              <View>
              3.8 你需自行设置本平台上的功能设置，并对在本平台上的设置承担责任。特别提醒在商品发布时务必认真核实价格等重要信息，避免错误而导致资金损失。
              </View>
              <View>
              3.9 你不得利用本平台及其功能从事如下活动，否则，本公司有权对你的账号予以一定期限的封号处理，并暂停或终止向你提供本平台的部分或全部功能：
              </View>
              <View>
              （1）利用本平台进行传销分成或其他传销活动的；
              </View>
              <View>
              （2）利用本平台进行赌博或其他违法、犯罪活动的；
              </View>
              <View>
              （3）利用本平台诱导用户达成营销目的；
              </View>
              <View>
              （4）利用本平台从事其他违反本公司相关营运规范的活动。
              </View>
              <View>
              4、本公司的权利义务
              </View>
              <View>
              4.1 本公司负责本平台的建设、运行和管理，并确保本平台的安全性。
              </View>
              <View>
              4.2 本公司有权定期或不定期审核你的使用本平台的活动，若你利用本平台从事不符合本协议约定或相关规则或国家法律法规、规章、政策、法令规定的活动，本公司有权暂停或终止提供本平台部分或所有服务，给本公司或其他人造成损失的，你应赔偿所有损失。
              </View>
              <View>
              4.3 本公司有权定期或不定期审核你的使用本平台的活动，若你利用本平台从事不符合本协议约定或相关规则或国家法律法规、规章、政策、法令规定的活动，本公司有权暂停或终止提供本平台部分或所有服务，给本公司或其他人造成损失的，你应赔偿所有损失。
              </View>
              <View>
              4.4 本公司有权根据自身需要以及对你的资质、经营状况和功能申请的评估来审核、开通、关闭和调整本平台提供的全部或部分功能。
              </View>
              <View>
              5 、知识产权及保密
              </View>
              <View>
              5.1 除双方另有约定外，对于本协议签署前，双方已拥有或已存在的所有知识产权仍归原权利人所有，不因本协议的签订或履行而使另一方无条件享有他方之前已拥有的任何知识产权（包括但不限于版权、商标、商业秘密、专有技术等）。
              </View>
              <View>
              5.2 你必须对所接触到的、未向第三方公开的资料和信息进行保密，不得向其他任何人披露。同时，非经本公司书面同意，不得向任何第三方透露有关资料和信息。
              </View>
              <View>
              6、附属规则
              </View>
              <View>
              本协议针对部分功能以附属规则的形式进行约定。附属规则是本协议不可分割的组成部分，具有同等法律效力。本协议条款与附属规则不一致的，以附属规则内容为准。
              </View>
              <View>
              7、服务终止和违约责任
              </View>
              <View>
              7.1 如你违反本协议或附属规则中的任何条款，本公司有权不经通知，直接终止本平台的全部或部分功能。
              </View>
              <View>
              7.2 如你连续三十天未登录本平台，本公司有权向你终止本平台服务。
              </View>
              <View>
              7.3 在提前3个自然日通知你后，本公司有权根据国家政策变更或自身营运需要解除本协议并终止本服务或本服务中的部分功能。
              </View>
              <View>
              7.4 本协议中的“终止服务”包括但不限于暂停或冻结你账号，关停你在本平台中的所有或部分功能。
              </View>
              <View>
              8、数据的储存
              </View>
              <View>
              8.1 本公司不对你在本平台中相关数据的删除或储存失败负责。
              </View>
              <View>
              8.2 本公司有权根据实际情况自行决定单个用户在本服务中数据的最长储存期限，并在服务器上为其分配数据最大存储空间等。你可根据自己的需要自行备份本服务中的相关数据。
              </View>
              <View>
              8.3 如果你停止使用本平台或账号被终止或取消，本公司可以从服务器上永久地删除你的数据。在服务停止、终止或取消后，本公司没有义务向你返还任何数据。
              </View>
              <View>
              9、通知
              </View>
              本公司有权向你在本平台注册时提供的电话发出任何通知。同时，本公司也有权通过本平台以公告的方式通知你任何事宜，你有义务关注本平台的公告信息。
              <View>
              10、协议变更
              </View>
              <View>
              本公司有权根据需要不时地制定、修改本协议，如本协议有任何变更，本公司有权将该变更内容以公告或其他方式通知你。如不同意相关变更，你必须立即停止使用本平台服务。任何修订和变更一经在本平台公布即方式法律效力。你登录或继续使用本平台功能即表示你已无条件接受相关修订或变更的内容。

              </View>
              <View>
              11、法律适用及争议解决
              </View>
              <View>
              本协议签订地为上海宝山区。
              本协议的成立、生效、履行、解释及纠纷解决，适用中华人民共和国大陆地区法律（不包括冲突法）。
              你和本公司因本协议产生任何纠纷或争议的，首先应友好协商解决；协商不成的，你同意将纠纷或争议提交至本协议签订地（上海宝山区）有管辖权的人民法院解决。
              </View>
              <View>
              上海美拼网络科技有限公司
              </View>
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
        { isAgent ? <button style="position:relative;display:block;top:-192rpx;height:30px;width:564rpx;left:20rpx;text-align:left;opacity: 0.8;padding-left:3px;padding-right:14px;margin-left:auto;margin-right:auto;box-sizing:border-box;font-size:32rpx;text-decoration:none;line-height:2.55555556;border-radius:5px;border:none;border:initial;-webkit-tap-highlight-color:transparent;overflow:hidden;color:#000000;background-color:#FFFFFF;" className="customer-service-agent" open-type="contact" bindcontact="handleContact">客服服务</button>
        :   <button style="position:relative;display:block;top:-90rpx;left:6rpx;height:40px;width:520rpx;opacity: 0.8; margin-left:auto;margin-right:auto;padding-left:0px;padding-right:14px;box-sizing:border-box;font-size:32rpx;text-align:left;text-decoration:none;line-height:2.55555556;border-radius:5px;border:none;border:initial;-webkit-tap-highlight-color:transparent;overflow:hidden;color:#000000;background-color:#FFFFFF;"  open-type="contact" bindcontact="handleContact">客服服务</button>
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