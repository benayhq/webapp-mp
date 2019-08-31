import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss';
import * as actions from '../store/actionCreators';
import {connect} from '@tarojs/redux';
import { AtList, AtListItem } from "taro-ui"
import Empty from './../../../components/empty';


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

  handleClick(){
    
  }

  render(){
    const {customer} = this.state;
    let renderTemplate  = null;

    if(customer.length===0){
      renderTemplate = <Empty/>
    }
    else{
      renderTemplate = (<AtList>
        {
            customer && customer.map((item)=>{
                return (
                  item.nickname && <AtListItem
                    title={item.nickname + `${item.weChatId===undefined ? '':'   微信:'+item.weChatId}`}
                    note={`电话:${item.cellphone === null ? '未设置' : item.cellphone}`}
                    thumb={item.profileUrl}
                  />
                )
            })
        }
        </AtList>)
    }
    return (
      <View>
        {renderTemplate}
      </View>
    )
  }
}

export default Index;

