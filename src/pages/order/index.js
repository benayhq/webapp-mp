import Taro, { Component } from '@tarojs/taro';
import { AtTabs, AtTabsPane,AtLoadMore } from 'taro-ui';
import {ScrollView,View,Text} from '@tarojs/components';
import './index.scss';
import OrderItem from './list';
import Order from './common/order';
import * as actions from './store/actionCreators';
import {connect} from '@tarojs/redux';
import {getWindowHeight} from './../../utils/style'


@connect(state=>state.user,actions)
export default class OrderList extends Component{
    config = {
        navigationBarTitleText: '我的订单'
    }
    state = {
        current:1,
        list:[],
        status: 'more',
        totalPage:1,
        orderStatus:''
    }

    componentWillMount(){
        var selectTabIndex = Number(this.$router.params.index);
        this.setState({
            orderStatus:this.$router.params.status,
            current:selectTabIndex
        });
    }

    componentDidMount(){
        this.getAllOrderList(this.state.orderStatus,0,10);
    }

    async getAllOrderList(statusVo,pageNo,pageSize){
        // console.log('this.setState',this.setState);
        var payload = {
            statusVo:statusVo,
            pageNo:pageNo,
            pageSize:pageSize
        };
        const response = await this.props.dispatchOrderList(payload);
        this.setState({
            list:response.content
        });
    }

    handleClick(value){
        this.setState({
            current:value,
            list:[]
        });
        switch(value){
            case 0:
                this.getAllOrderList('',0,10)
                break;
            case 1:
                this.getAllOrderList('UNPAY',0,10);
                break;
            case 2:
                this.getAllOrderList('BATING',0,10);
                break;
            case 3:
                this.getAllOrderList('CONSUMPTION',0,10);
                break;
            case 4:
                this.getAllOrderList('COMMENTING',0,10);
                break;
        }
    }

    handleLoadMore(status) {
        this.setState((prevState,props)=>({
            totalPage:prevState.totalPage + 1,
            status: 'loading'
        }),()=>{
            const pageNo = this.state.totalPage * 10;
            this.getAllOrderList(status,0, pageNo);
            this.setState({
                status: 'noMore'
            })
        });
    }

    loadOrderList = () => {
        console.log('loadOrderList');
    }
    
    render(){
        const tabList = [{ title: '全部',status:'' }, { title: '待付款',status:'UNPAY' }, { title: '待成团',status:'BATING' }, { title: '待消费',status:'CONSUMPTION' }, { title: '待评价',status:'COMMENTING' }]
        const {list,current,status} = this.state;

        return (
            <AtTabs current={current} tabList={tabList} onClick={this.handleClick.bind(this)}>
              <AtTabsPane current={current} index={0} >
              
                <View>
                    <OrderItem list={list}/>
                    {list.length> 0 &&   <View className="mp-order-loadmore">
                        <AtLoadMore
                            onClick={this.handleLoadMore.bind(this)}
                            status={status}
                        />
                    </View>
                    }
                </View>
                
              </AtTabsPane>
              <AtTabsPane current={current} index={1}>
                <ScrollView
                    scrollY
                    onScrollToUpper={this.loadOrderList}
                    style={{height:getWindowHeight()}}
                >
                    {
                        list &&  <View>
                        <OrderItem list={list}/>
                        {
                            list.length> 0 && <View className="mp-order-loadmore">
                            <AtLoadMore
                                onClick={this.handleLoadMore.bind(this,'UNPAY')}
                                status={status}
                            />
                            </View> 
                        }
                        </View>
                    }
                 </ScrollView>
              </AtTabsPane>
              <AtTabsPane current={current} index={2}>
                 {list && <View>
                    <OrderItem list={list}/>
                    {list.length> 0 && <View className="mp-order-loadmore">
                        <AtLoadMore
                            onClick={this.handleLoadMore.bind(this,'BATING')}
                            status={status}
                        />
                   </View>
                    }
                </View>}
              </AtTabsPane>
              <AtTabsPane current={current} index={3}>
                {
                      list &&  <View>
                      <OrderItem list={list}/>
                      {list.length> 0 && <View className="mp-order-loadmore">
                          <AtLoadMore
                              onClick={this.handleLoadMore.bind(this,'CONSUMPTION')}
                              status={status}
                          />
                        </View>
                      }
                  </View>
                }
              </AtTabsPane>
                 <AtTabsPane current={current} index={4}>
                 {
                     list && <View>
                     <OrderItem list={list}/>{
                         list.length> 0 &&  <View className="mp-order-loadmore">
                          <AtLoadMore
                              onClick={this.handleLoadMore.bind(this,'CONSUMPTION')}
                              status={status}
                          />
                     </View>
                    }
                  </View>
                 } 
              </AtTabsPane> 
            </AtTabs>
        );
    }
}