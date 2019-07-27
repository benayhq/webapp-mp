import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss';
import * as actions from '../store/actionCreators';
import {connect} from '@tarojs/redux';

function getLocalTime(timestamp) {
    var d = new Date(timestamp);
    var date = (d.getFullYear()) + "-" +
            (d.getMonth() + 1) + "-" +
            (d.getDate()) + " " +
            (d.getHours()) + ":" +
            (d.getMinutes()) + ":" +
            (d.getSeconds());
    return date;
}

@connect(state=>state,actions)
class Index extends Component{
  config = {
    navigationBarTitleText: '我的活动'
  }
  constructor(props){
    super(props);
    this.state = {
      activeList:[]
    }
  }

  async getAuthInfo(){
    const result = Taro.getStorage({key:'userinfo'}).then(res => {return res.data});
     return result;
  }


  async getImgUrl(location){
    var payload = {
      location:location
    };
    const result = await this.props.dispatchDownLoadUrl(payload);
    return result.content;
  }

  
  componentDidMount(){
      this.init();
  }

  async init(){
    var result = await this.getAuthInfo();

    var that = this;

    var payload ={
        pageNo:0,
        pageSize:10,
        agentId:result.id
    },list=[];

    const response = await this.props.dispatchOwnerActiveHistory(payload);
    console.log('response',response);

    if(response.content.length > 0){
        response.content.map(async(item)=>{
            const result = await this.getImgUrl(item.displayLocation);
            list.push({
                name:item.name,
                people:item.people,
                endD:item.endD,
                url:result
            });
            console.log('result',result);
        });
       
    }

    setTimeout(() => {
        that.setState({
            activeList:list
        });
    }, 1000);
  }

  render(){
    const {activeList} = this.state;
    console.log('activeList',activeList);

    return (
      <View className="mp-history">
          {/* <View className="list-title">
            <View>医美关键 vivi</View>  
            <View>
              <View className="mp-icon mp-icon-arrow-history"></View>
            </View>
            <View>活动中</View>
          </View> */}
          {
              activeList && activeList.map((item)=>{
                  return (
                    <View className="list-wrapper">
                                <View>
                                    <image className="icon-header" src={item.url} ></image>
                                </View>
                                <View>
                                    <View className="mp-active-group">{item.name}</View>
                                    <View className="mp-active-group">{item.people}人成团</View>
                                    {/* <View className="mp-active-group">截止日期:{getLocalTime(item.endD)}</View> */}
                                </View>
                    </View>
                  )
              })
          } 
      </View>
    )
  }
}

export default Index;