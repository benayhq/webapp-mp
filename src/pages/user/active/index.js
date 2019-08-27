import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss';
import * as actions from '../store/actionCreators';
import {connect} from '@tarojs/redux';
import { AtList, AtListItem } from "taro-ui"

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
      activeList:[],
      agentId:0
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

  componentWillMount(){
    console.log('this.$router.params',this.$router.params.agentId);
    if(this.$router.params.agentId){
      this.setState({
        agentId:this.$router.params.agentId
      })
    }
  }

  componentDidMount(){
      this.init();
  }

  async init(){
    var result = await this.getAuthInfo();
    const {agentId} = this.state;

    var that = this;
    var payload ={
        pageNo:0,
        pageSize:10,
        agentId: agentId ===  0 ? result.id : agentId
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

    return (
      <AtList>
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
                    <AtListItem
                      title={item.name}
                      note={`${item.people}人成团`}
                      thumb={item.url}
                      // extraText={`日期:${getLocalTime(item.endD)}`}
                      arrow='right'
                    />
                  )
              })
          }
      </AtList>
    )
  }
}

export default Index;