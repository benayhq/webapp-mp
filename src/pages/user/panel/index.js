import {Component} from '@tarojs/taro';
import { View } from '@tarojs/components'
import '../panel.scss';

export default class Panel extends Component{
    constructor(){
        super(...arguments);
    }

    render(){
        return (
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
          
        )
    }
}