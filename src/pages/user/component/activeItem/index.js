import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss';
import { AtSwitch } from 'taro-ui'

class ActiveItem extends Component{
  state = {
    actives:[]
  }

  handleChange(){
    console.log('handleChange');
  }

  HandleActiveClick(item,e){
    Taro.navigateTo({
      url:`../../../packageA/pages/product/detail?activeId=${item.id}&referId=${item.agentId}`
    });
  }

  HandleCloseActive(item,e){
    e.stopPropagation();
    this.props.handleCloseActive(item.id);
  }

  HandleShareActive(item,e){
    e.stopPropagation();
  }

  render(){
    const {item} = this.props;

    return (
      item && <View className="list-wrapper" onClick={this.HandleActiveClick.bind(this,item)}>
               <View className="list-wrapper-header">
                   <View>{item.name} </View>
                   {/* <View className='at-icon at-icon-chevron-right'></View> */}
                   <View style={item.status === "NORMAL"?'color:#7DD6D0':'color:#919191'}>{item.status === "NORMAL" ?  "活动中" : "已结束"}</View>
               </View>
               <View className="list-wrapper-content">
                 <View>
                     <image className="icon-header" src={item.url} ></image>
                 </View>
                 <View>
                     <View>{item.name}</View>
                     <View>{item.people}人成团</View>
                     <View>活动有效期: {item.endD}</View>
                 </View>
               </View>
               <View className="list-wrapper-action">
                 {/* <View onClick={this.HandleShareActive.bind(this,item)}> 分 享 </View> */}
                 {
                   item.status  === "NORMAL" ? <View onClick={this.HandleCloseActive.bind(this,item)}> 关闭活动 </View> : ""
                 }
                  {/* <View> 关闭活动 </View> */}
                  {/* <AtSwitch  border={false} title='状态: 开启中' checked={true} onChange={this.handleChange} /> */}
               </View>
      </View>
    )
  }
}
export default ActiveItem;