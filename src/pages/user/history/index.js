import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss';
import * as actions from '../store/actionCreators';
import {connect} from '@tarojs/redux';
import formatTime from '../../../utils/util';
import Empty from './../../../components/empty';

@connect(state=>state,actions)
class Index extends Component{
  config = {
    navigationBarTitleText: '浏览历史'
  }

  constructor(props){
    super(props);
    this.state = {
      actives:[]
    }
  }

  async getImgUrl(location){
    var payload = {
      location:location
    };
    const result = await this.props.dispatchDownLoadUrl(payload);
    return result.content;
  }

  async loadData(){
    var list = [];
    var that = this;
    const response = await this.props.dispatchActiveHistory({});

    console.log('response.content',response.content);

    if(response.content){
      response.content.map((item,index)=>{
        that.getImgUrl(item.displayLocation).then((resultVal)=>{
          item.displayLocation = resultVal;
          list.push(item);
          if(list.length === response.content.length){
            that.setState({
              actives:list
            })
          }
        });
      });
    }
  }

  componentDidMount(){
    this.loadData();
  }

  HandleActiveClick(item){
    Taro.navigateTo({
      url:`/pages/product/detail?activeId=${item.id}&referId=${item.agentId}`
    });
  }

  render(){
    const {actives} = this.state;

    return (
      <View className="mp-history">

          {
             actives && actives.map((item)=>{
              return (
                <View className="list-wrapper" onClick={this.HandleActiveClick.bind(this,item)}>
                    <View className="list-wrapper-header">
                        <View>{item.agentName} </View>
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
          {
            actives.length === 0 && <Empty/>
          }
      </View>
    )
  }
}

export default Index;