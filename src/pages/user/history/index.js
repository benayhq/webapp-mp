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
      // this.setState({
      //   customer:response.content
      // });
      console.log('response',response);
    });
  }

  render(){
    const {actives} = this.state;

    return (
      <View className="mp-history">
          <View className="list-title">
            <View>医美关键 vivi</View>  
            <View>
              <View className="mp-icon mp-icon-arrow-history"></View>
            </View>
            <View>活动中</View>
          </View>
          <View className="list-wrapper">
              <View>
                  <image className="icon-header" src="https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqgQbxxNe21poPOytoOu6icmqbNTSSdCYiaJ6ibDSIVyMf4kLJOlx3A6iaGDjGRBzH14811yt7jYGfibMg/132" ></image>
              </View>
              <View>
                  <View>【玻尿酸瘦脸针】瑞典进口 可打嘟嘟唇微笑</View>
                  <View>2人成团</View>
                  <View>活动有效期：2019.09.19~201</View>
              </View>
          </View>
      </View>
    )
  }
}

export default Index;