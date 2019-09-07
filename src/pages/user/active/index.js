import Taro, { Component } from '@tarojs/taro'
import { View,ScrollView,Text } from '@tarojs/components'
import './index.scss';
import * as actions from '../store/actionCreators';
import {connect} from '@tarojs/redux';
import { AtList, AtListItem } from "taro-ui"
import {Empty,Loading} from './../../../components/';
import {getWindowHeight} from './../../../utils/style';
var RECOMMEND_SIZE = 0,globalLastItem = 0;

@connect(state=>state,actions)
class Index extends Component{
  config = {
    navigationBarTitleText: '我的活动'
  }

  state = {
    activeList:[],
    agentId:0,    
    hasMore:true,
    loading:false,
    pageLoaded:false
  }

  async getAuthInfo(){
    const result = Taro.getStorage({key:'userinfo'}).then(res => {return res.data});
     return result;
  }

  async getImgUrl(location){
    var payload = {
      location:location
    };
    const result = await this.props.dispatchDownLoadUrl(payload);
    return result.content;
  }

  componentDidMount(){
      this.loadMore();
  }

  handleClick(item){
    Taro.navigateTo({
      url:`/pages/product/detail?activeId=${item.id}&referId=${item.agentId}`
    });
  }

  handleSwithActive(item){
    console.log('item',item);
  }

  componentWillMount(){
    globalLastItem = 0;
    RECOMMEND_SIZE = 0;
    if(this.$router.params.agentId){
      this.setState({
        agentId:this.$router.params.agentId
      })
    }
  }

  async loadMore(){
    var result = await this.getAuthInfo();
    const {agentId} = this.state;

    RECOMMEND_SIZE = RECOMMEND_SIZE + 12;

    var that = this;
    this.setState({loading:true});
    var payload ={
        pageNo:0,
        pageSize:RECOMMEND_SIZE,
        agentId: agentId ===  0 ? result.id : agentId
    },list=[];
    const response = await this.props.dispatchOwnerActiveHistory(payload);

    if(globalLastItem==response.content.length){
      this.setState({
        loading:false,
        hasMore:false
      })
      return;
    }else{
      globalLastItem = response.content.length;
    }

    var promises = [];

    if(response.content.length > 0){
        response.content.map((item)=>{
          const promise = this.getImgUrl(item.displayLocation);
          promises.push(promise);
          list.push({
            name:item.name,
            people:item.people,
            endD:item.endD,
            url:'',
            agentId:item.agentId,
            id:item.id
          })
        });
        Promise.all(promises).then((result)=>{
          if(result){
            result.map((item,key)=>{
              list[key].url = item;
            })
          }
        }).then(()=>{
          that.setState({
             activeList:list,
             loading:false,
             pageLoaded:true,
             hasMore:true
          })
        }).catch((response)=>{
          that.setState({
            loading:false,
            pageLoaded:true,
            hasMore:false
          })
        });
    }

  }

  render(){
    const {activeList,pageLoaded} = this.state;
    let renderTemplate = null;
    if(!pageLoaded){
      renderTemplate = <Loading/>
    }
    else if(activeList.length>0){
      renderTemplate =  (
        <AtList>
         {
              activeList && activeList.map((item)=>{
                return (
               
                  <AtListItem
                    onClick={this.handleClick.bind(this,item)}
                    title={item.name}
                    note={`${item.people}人成团`}
                    thumb={item.url}
                    arrow='right'
                  />
                  // isSwitch
                  // onSwitchChange={this.handleSwithActive.bind(this,item)}
                )
            })
         }
        </AtList>
        )
    }
    else{
      renderTemplate =  <View><Empty/></View>
    }

    return (
      <View>
           <ScrollView
                  scrollY
                  onScrollToLower={this.loadMore}
                  style={{ height: getWindowHeight() }}>
            {renderTemplate}

             { pageLoaded && this.state.loading &&
              <View className='home__loading'>
                <Text className='home__loading-txt'>正在加载中...</Text>
              </View>
            }
            {!this.state.hasMore &&
              <View className='home__loading home__loading--not-more'>
                <Text className='home__loading-txt'>没有更多了</Text>
              </View>
            }

          </ScrollView>
      </View>
    )
  }
}
export default Index;