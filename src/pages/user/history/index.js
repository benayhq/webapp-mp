import Taro, { Component } from '@tarojs/taro'
import { View,ScrollView,Text } from '@tarojs/components'
import './index.scss';
import * as actions from '../store/actionCreators';
import {connect} from '@tarojs/redux';
import formatTime from '../../../utils/util';
import {Empty,Loading} from './../../../components';
import {getWindowHeight} from './../../../utils/style'
var RECOMMEND_SIZE = 0,globalLastItem = 0;

@connect(state=>state,actions)
class Index extends Component{
  config = {
    navigationBarTitleText: '浏览历史'
  }

  state = {
    actives:[],
    hasMore:true,
    loading:false,
    loaded:false
  }

  async getImgUrl(location){
    var payload = {
      location:location
    };
    const result = await this.props.dispatchDownLoadUrl(payload);
    return result.content;
  }

  componentWillMount(){
    globalLastItem = 0;
    RECOMMEND_SIZE = 0;
  }

  componentDidMount(){
    this.loadMore();
  }

  HandleActiveClick(item){
    Taro.navigateTo({
      url:`/pages/product/detail?activeId=${item.id}&referId=${item.agentId}`
    });
  }

  async loadMore(){
    console.log('loadMore');
    if (!this.state.hasMore || this.state.loading) {
      return
    }

    RECOMMEND_SIZE = RECOMMEND_SIZE + 6;
    const payload ={
      pageNo:0,
      pageSize:RECOMMEND_SIZE
    };

    this.setState({loading:true});
    var historys = [],that = this,promises=[];
    const response = await this.props.dispatchActiveHistory(payload);
    if(globalLastItem==response.content.length){
      this.setState({
        loading:false,
        hasMore:false
      })
      return;
    }else{
      globalLastItem = response.content.length;
    }

    if(response.content){
      response.content.map((item,index)=>{
        const promise = that.getImgUrl(item.displayLocation)
        promises.push(promise);
        historys.push(item);
      });
    }
    Promise.all(promises).then((result)=>{
      if(result){
        result.map((item,key)=>{
          historys[key].displayLocation = item
        })
      }
    }).then((response)=>{
      that.setState({
        actives:historys,
        loading:false,
        hasMore:true,
        loaded:true
      })
    }).catch((response)=>{
      that.setState({
        loading:false,
        hasMore:false,
        loaded:true
      });
    });
  }
  
  render(){
    const {actives,loaded} = this.state;
    let renderTemplate = null;
    if(!loaded){
      renderTemplate = <Loading/>
    }
    else if(actives.length===0){
      renderTemplate = <Empty/>
    }
    else{
      renderTemplate =  actives && actives.map((item)=>{
         return (
           <View className="list-wrapper" onClick={this.HandleActiveClick.bind(this,item)}>
               <View className="list-wrapper-header">
                   <View>{item.agentName} 
                   <text class="at-icon at-icon item-extra__icon-arrow item-extra__icon-arrow at-icon-chevron-right at-icon-chevron-right history-appointer">
                      </text>
                   </View>
                   <View>{item.status === "NORMAL" ?  "活动中" : "已结束"}</View>
               </View>
               <View className="list-wrapper-content">
                 <View>
                     <image className="icon-header" src={item.displayLocation} ></image>
                 </View>
                 <View>
                     <View>{item.name}</View>
                     <View>{item.people}人成团</View>
                     <View>活动有效期: {item.endD}</View>
                 </View>
               </View>
           </View>
         )
       })
    }
    return (
      <View className="mp-history">
         <ScrollView
          scrollY
          onScrollToLower={this.loadMore}
          style={{ height: getWindowHeight() }}>
          {renderTemplate}

          { loaded && this.state.loading &&
            <View className='home__loading'>
              <Text className='home__loading-txt'>正在加载中...</Text>
            </View>
          }
          {!this.state.hasMore &&
            <View className='home__loading home__loading--not-more'>
              <Text className='home__loading-txt'>没有更多了</Text>
            </View>
          }
        </ScrollView>
      </View>
    )
  }
}

export default Index;