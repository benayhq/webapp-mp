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
      customer:[]
    }
  }

  componentDidMount(){
    this.props.dispatchCustomerList({}).then((response)=>{
      this.setState({
        customer:response.content
      });
      // console.log('response',response);
    });
  }

  render(){
    const {customer} = this.state;

    return (
      <View className="mp-customer">
          {
            customer.length>0 && customer.map((item)=>(
              <View className="list-wrapper">
                <View>
                  <image className="icon-header" src={item.profileUrl}></image>
                </View>
                <View>
                  <View className="header">{item.customerNickName}</View>
                  <View>电话: {item.cellphone} </View>
                  <View>微信: {item.weChatId} </View>
                </View>
                <View>
                  <View className="mp-icon mp-icon-tel telephone"></View>
                </View>
              </View>
            ))
          } 
      </View>
    )
  }
}

export default Index;