import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss';
import * as actions from '../store/actionCreators';
import {connect} from '@tarojs/redux';

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
  
  componentDidMount(){
    this.props.dispatchActiveHistory({}).then((response)=>{
      this.setState({
        actives:response.content
      });
      // console.log('response',response);
    });
  }

  render(){
    const {actives} = this.state;

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
            actives && actives.map((item)=>{
              return (<View className="list-wrapper">
                  <View>
                      <image className="icon-header" src={item.profileUrl} ></image>
                  </View>
                  <View>
                      <View>{item.name}</View>
                      <View>2人成团</View>
                      <View>活动有效期：2019.09.19~201</View>
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