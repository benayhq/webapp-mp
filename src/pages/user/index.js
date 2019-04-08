import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import UserOrder from './order';
import InCome from './income';
import Publish from './publish';
import Info from './info';
import Panel from './panel';
import ChangeUser from './switch';
import Creator from './common/create';
import store from './../../store';
import './index.scss';
import '../../style/icon.scss';

export default class Index extends Component {

  config = {
    navigationBarTitleText: '个人中心'
  }

  constructor(props) {
    super(props);
    this.state = {
      isAgent:true,
      list:[],
      orders:[],
      user:{}
    }
    this.init();
  }

  init(){
    this.initPanelList();
    this.initState();
  }

  handleChangeState(){
      this.initPanelList();
  }

  initState(){
      this.handleChangeState = this.handleChangeState.bind(this);
      store.subscribe(this.handleChangeState);
  }

  initPanelList(){
      let creatorInstance = new Creator();
      this.setState({
          isAgent:store.getState().isAgent,
          list:creatorInstance.factory(store.getState().isAgent).getPanelList(),
          orders:creatorInstance.factory(store.getState().isAgent).getList(),
          user:creatorInstance.factory(store.getState().isAgent).getUserInfo()
      })
  }

  jumpUrl = (url) =>{
    Taro.navigateTo({
      url: url
    })
  }

  render () {
    
    const {isAgent} = this.state;

    return (
      <View className='mp-user'>

        <Info user={this.state.user}/>

       { isAgent && <InCome/>  }  

       { isAgent &&  <Publish/>  }  
      
        <UserOrder list={this.state.orders}/>

        <Panel list={this.state.list}/>

        <ChangeUser/>

      </View>
    )
  }
}
