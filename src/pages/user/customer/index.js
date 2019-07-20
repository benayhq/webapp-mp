import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss';
import * as actions from '../store/actionCreators';
import {connect} from '@tarojs/redux';

@connect(state=>state,actions)
class Index extends Component{

  config = {
    navigationBarTitleText: '我的客户'
  }

  constructor(props){
    super(props);
    this.state = {
    }
  }

  componentDidMount(){
    this.props.dispatchCustomerList({}).then((response)=>{
      console.log('response',response);
    });
  }

  render(){
    return (
      <View className="mp-customer">
          <View className="list-wrapper">
             <View>
                <image className="icon-header" src="https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqgQbxxNe21poPOytoOu6icmqbNTSSdCYiaJ6ibDSIVyMf4kLJOlx3A6iaGDjGRBzH14811yt7jYGfibMg/132"></image>
             </View>
             <View>
                <View className="header">爱吐槽的徐教授</View>
                <View>电话: 15618925212 </View>
                <View>微信: 15618925212 </View>
             </View>
             <View>
               <View className="mp-icon mp-icon-tel telephone"></View>
             </View>
          </View>
      </View>
    )
  }
}

export default Index;