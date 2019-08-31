import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss';
import * as actions from '../store/actionCreators';
import {connect} from '@tarojs/redux';
import { AtList, AtListItem } from "taro-ui"
import Empty from './../../../components/empty';

function getLocalTime(timestamp) {
    var d = new Date(timestamp);
    var date = (d.getFullYear()) + "-" +
            (d.getMonth() + 1) + "-" +
            (d.getDate()) + " " +
            (d.getHours()) + ":" +
            (d.getMinutes()) + ":" +
            (d.getSeconds());
    return date;
}

@connect(state=>state,actions)
class Index extends Component{
  config = {
    navigationBarTitleText: '我的活动'
  }

  constructor(props){
    super(props);
    this.state = {
      activeList:[],
      agentId:0
    }
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

  componentWillMount(){
    console.log('this.$router.params',this.$router.params.agentId);
    if(this.$router.params.agentId){
      this.setState({
        agentId:this.$router.params.agentId
      })
    }
  }

  componentDidMount(){
      this.init();
  }

  async init(){
    var result = await this.getAuthInfo();
    const {agentId} = this.state;

    var that = this;
    var payload ={
        pageNo:0,
        pageSize:10,
        agentId: agentId ===  0 ? result.id : agentId
    },list=[];

    const response = await this.props.dispatchOwnerActiveHistory(payload);

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
             activeList:list
          });
        })
    }
  }

  handleClick(item){
    Taro.navigateTo({
      url:`/pages/product/detail?activeId=${item.id}&referId=${item.agentId}`
    });
  }

  render(){
    const {activeList} = this.state;
    let renderTemplate = null;
    if(activeList.length>0){
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
                )
            })
         }
        </AtList>
        )
    }
    else{
      renderTemplate = <Empty/>
    }

    return (
      <AtList>
         {renderTemplate}
      </AtList>
    )
  }
}
export default Index;