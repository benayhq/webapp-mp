import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss';
import * as actions from '../store/actionCreators';
import { AtList, AtListItem,AtRate } from "taro-ui"
import {connect} from '@tarojs/redux';
import {Item} from '../component/consultantItem';

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
            actives.map((item,index)=>{
              return (<Item key={index} active={item}/>)
            })
          }
      </View>
    )
    
  }
}

export default Index;