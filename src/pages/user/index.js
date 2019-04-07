import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'
import '../../style/icon.scss';
import UserOrder from './order';
import InCome from './income';
import Publish from './publish';
import Info from './info';
import Panel from './panel';
import ChangeUser from './switch';
import store from './../../store/';

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange)
  }


  handleStoreChange(){
    console.log("store.getState()",store.getState());
    this.setState(store.getState());
  }


  config = {
    navigationBarTitleText: '个人中心'
  }

  jumpUrl = (url) =>{
    Taro.navigateTo({
      url: url
    })
  }

  render () {
    return (
      <View className='mp-user'>

        <Info/>

        <InCome/>

        <Publish/>

        <UserOrder/>

        <Panel/>

        <ChangeUser/>
      </View>
    )
  }
}
