import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss';
import { AtRate } from "taro-ui"

class Item extends Component{
  state = {
    actives:[]
  }

  handleListItem(id){
    Taro.navigateTo({
      url:'../../../pages/user/active/index?agentId='+id
    })
  }

  handleMakeCall(cellphone,e){
    e.stopPropagation();
    var params ={
      phoneNumber:cellphone
    };
    Taro.makePhoneCall(params).then((res)=>{
      console.log('res',res);
    })
  }

  render(){
    const {active} = this.props;
    
    return (
      <View className="mp-history">
          {
              <View className="list-wrapper"  onClick={this.handleListItem.bind(this,active.id)}>
                <View>
                    <image className="icon-header" src={active.profileUrl} ></image>
                </View>
                <View>
                    <View>{active.name}</View>
                    <View> 
                        <AtRate value={active.commentScore} /> <Text className="rateItem">{active.commentScore}分（{active.commentPeople}人评）</Text>
                    </View>
                    <View className="address">
                      <Text>地址：{active.address === "" ? "暂无" : active.address}</Text>
                    
                    </View>
                </View>
                <View className="mp-history-zixun">
                      <Text className="mp-icon mp-icon-wechat-zixun zixun-wechat"></Text> 
                      <Text className="mp-icon mp-icon-mobilephone zixun-number" onClick={this.handleMakeCall.bind(this,active.cellphone)}></Text>
                </View>
                {/* <View className='at-icon at-icon-chevron-right zixun-arrow'></View> */}
              </View>
          }
      </View>
    )
  }
}



export default Item;