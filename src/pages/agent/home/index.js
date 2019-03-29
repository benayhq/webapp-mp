import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import '../../../style/icon.scss';
import { AtButton } from 'taro-ui'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  
  componentWillMount () { }

  componentDidMount () { }
  
  componentWillUnmount () { }
  
  componentDidShow () { }

  componentDidHide () { }

  onClick = (e) =>{
    Taro.navigateTo({
      url: '/pages/active/publish/index'
    })
  }

  render () {
    return (
      <View className='mp-user'>
        <View className="mp-user__info">
            <View className="mp-user__info-avatar">
                <Text className="mp-icon mp-icon-avatar"></Text>
            </View>

            <View className="mp-user__info-message">
                <View className="mp-user__user-username">Shawn</View>
                <View className="mp-user__user-level">
                         信用等级2
                </View>
                <View className="mp-user__user-level-up">提升等级</View>
            </View>

            <View className="mp-user__info-money">
                <View className="mp-user__money-amount">100000.00</View>
                <View className="mp-user__money-order">已结定金</View>
            </View>
        </View>

        <View className="mp-user__income">
            <View className="mp-user__income-left">
              <View className="mp-user__income-text">30000</View>
              <View className="mp-user__income-text-desc">待结定金</View>
            </View>

            <View className="mp-user__income-middle">
              <View className="mp-user__income-text">300</View>
              <View className="mp-user__income-text-desc">累计成单
</View>
            </View>

            <View className="mp-user__income-right">
              <View className="mp-user__income-text">30000</View>
              <View className="mp-user__income-text-desc">预计收入
</View>
            </View>
        </View>

        <View className="mp-user__publish">
            <View className="mp-user__publish-introduce">让客户来为您拓展客户</View>
            <View className="mp-user__publish-action">
               <AtButton onClick={this.onClick} type='primary' size='small'>发布活动</AtButton>
            </View>
        </View>

        <View className="mp-user__order"> 
           <View className="mp-user__order-title">
              <Text>客户订单</Text>
              <Text className="mp-user__order-queryall">查看全部订单</Text>
           </View>

           <View className="mp-user__ordernav">
              <View className="mp-user__ordernav-tuan">
                  <View className="mp-user__ordernav-icon mp-icon mp-icon-waittuan"></View>
                  <View className="mp-user__ordernav-text">待成团</View>
              </View>

              <View className="mp-user__ordernav-customer">
                  <View className="mp-user__ordernav-icon mp-icon mp-icon-consumption"></View> 
                  <View className="mp-user__ordernav-text">待消费</View>  
              </View>
              <View className="mp-user__ordernav-comment">
                  <View className="mp-user__ordernav-icon mp-icon mp-icon-comment"></View> 
                  <View className="mp-user__ordernav-text">待评价
              </View> 
              </View>
               <View className="mp-user__ordernav-refund">
                 <View className="mp-user__ordernav-icon mp-icon mp-icon-refund"></View> 
                  <View className="mp-user__ordernav-text">退款
               </View> 
              </View>
           </View>
        </View>

        <View className="mp-user__controlpanel">
          <View className="mp-user__controlpanel-active">
              <View className="mp-user__controlpanel-icon mp-icon mp-icon-active"></View> 
              <View className="mp-user__controlpanel-text">我的活动
</View>
          </View>
          <View className="mp-user__controlpanel-product">
              <View className="mp-user__controlpanel-icon mp-icon mp-icon-product"></View>
              <View className="mp-user__controlpanel-text">往期产品 
</View>
          </View>
          <View className="mp-user__controlpanel-customer">
              <View className="mp-user__controlpanel-icon mp-icon mp-icon-customer"></View>
              <View className="mp-user__controlpanel-text">我的客户 
</View>
          </View>

          <View className="mp-user__controlpanel-account"> 
                 <View className="mp-user__controlpanel-icon mp-icon mp-icon-account"></View>
                 <View className="mp-user__controlpanel-text">历史账单
</View>
          </View>

          <View className="mp-user__controlpanel-invite">
              <View className="mp-user__controlpanel-icon mp-icon mp-icon-invite"></View> 
              <View className="mp-user__controlpanel-text">邀请好友
</View>
          </View>
          <View className="mp-user__controlpanel-close">
              <View className="mp-user__controlpanel-icon mp-icon mp-icon-close"></View>
              <View className="mp-user__controlpanel-text">手动核销
</View>
          </View>
          <View className="mp-user__controlpanel-appoint">
              <View className="mp-user__controlpanel-icon mp-icon mp-icon-appoint"></View> 
              <View className="mp-user__controlpanel-text">预约日程

</View>
          </View>
        </View>
        
        <View className="mp-user-changeuser"> 
          切换为用户
        </View>
      </View>
    )
  }
}
