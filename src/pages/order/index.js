import Taro, { Component } from '@tarojs/taro';
import { AtTabs, AtTabsPane,AtLoadMore } from 'taro-ui'
import './index.scss';
import OrderItem from './list';
import Order from './common/order';
import * as actions from './store/actionCreators';
import {connect} from '@tarojs/redux';

@connect(state=>state.user,actions)
export default class OrderList extends Component{
    config = {
        navigationBarTitleText: '我的订单'
    }

    constructor(){
        super(...arguments);

        this.state = {
            current:0,
            list:[],
            status: 'more',
            totalPage:1
        }
    }

    componentDidMount(){
        // this.getAllOrderList('',0,10);
    }

    async getAllOrderList(statusVo,pageNo,pageSize){
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
            console.log('this.state.totalPage',this.state.totalPage);
            const pageNo = this.state.totalPage * 10;
            console.log('pageNo',pageNo);
            console.log('status',status);
            this.getAllOrderList(status,0, pageNo);
            this.setState({
                status: 'noMore'
            })
        });
    }
    
    render(){
        const tabList = [{ title: '全部',status:'' }, { title: '待付款',status:'UNPAY' }, { title: '待成团',status:'BATING' }, { title: '待消费',status:'CONSUMPTION' }, { title: '待评价',status:'COMMENTING' }]
        const {list,current,status} = this.state;

        console.log('list',list);

        return (
            <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
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

             <AtTabsPane current={this.state.current} index={1}>
                 {
                     list &&  <View>
                     <OrderItem list={list}/>
                     {list.length> 0 && <View className="mp-order-loadmore">
                           <AtLoadMore
                               onClick={this.handleLoadMore.bind(this,'UNPAY')}
                               status={status}
                           />
                     </View> }
                 </View>
                 }
             
              </AtTabsPane>
             <AtTabsPane current={this.state.current} index={2}>
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
              <AtTabsPane current={this.state.current} index={3}>
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
                 <AtTabsPane current={this.state.current} index={4}>
                 {
                     list && <View>
                     <OrderItem list={list}/>
                     {list.length> 0 &&  <View className="mp-order-loadmore">
                          <AtLoadMore
                              onClick={this.handleLoadMore.bind(this,'CONSUMPTION')}
                              status={status}
                          />
                     </View>}
                  </View>
                 } 
              </AtTabsPane> 
            </AtTabs>
        );
    }
}