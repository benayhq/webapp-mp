import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss';
import * as actions from '../store/actionCreators';
import {connect} from '@tarojs/redux';

@connect(state=>state,actions)
class Index extends Component{
  config = {
    navigationBarTitleText: '历史咨询师'
  }

  constructor(props){
    super(props);
    this.state = {
      actives:[]
    }
  }
  
  componentDidMount(){
    this.props.dispatchOwnerServiceHistory({}).then((response)=>{
      this.setState({
        actives:response.content
      });
    });
  }

  render(){
    const {actives} = this.state;

    return (
      <View className="mp-history">

          {
            actives && actives.map((item)=>{
               return (
                <View className="list-wrapper">
                  <View>
                      <image className="icon-header" src={item.profileUrl} ></image>
                  </View>
                  <View>
                      <View>{item.name}</View>
                      {/* <View>5.0分（2000人评）| ￥29999</View> */}
                      <View>地址：{item.address}</View>
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