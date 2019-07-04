import Taro, { Component } from '@tarojs/taro';
import { AtTabs, AtTabsPane } from 'taro-ui'
import './index.scss';
import OrderItem from './list';
import Order from './common/order';
import * as actions from './store/actionCreators';
import {connect} from '@tarojs/redux';
import _ from 'lodash';

@connect(state=>state.user,actions)
export default class OrderList extends Component{
    config = {
        navigationBarTitleText: '我的订单'
    }

    constructor(){
        super(...arguments);

        this.state = {
            current:0,
            list:[]
        }
    }

    componentDidMount(){
        this.getAllOrderList('');
    }

    getAllOrderList(statusVo){
        var payload = {
            statusVo:statusVo
        };
        this.props.dispatchOrderList(payload).then(response=>{
            console.log('response',response);
            this.setState({
                list:response.content
            });
            this.forceUpdate();
        });
    }

    handleClick(value){
        this.setState({
            current:value
        });
        switch(value){
            case 0:
                this.getAllOrderList('')
                break;
            case 1:
                this.getAllOrderList('UNPAY');
                break;
            case 2:
                this.getAllOrderList('BATING');
                break;
            case 3:
                this.getAllOrderList('CONSUMPTION');
                break;
            case 4:
                this.getAllOrderList('COMMENTING');
                break;
        }
    }

    render(){
        const tabList = [{ title: '全部',status:'' }, { title: '待付款',status:'UNPAY' }, { title: '待成团',status:'BATING' }, { title: '待消费',status:'CONSUMPTION' }, { title: '待评价',status:'COMMENTING' }]
        const {list,current} = this.state;
        
        return (
            <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
              <AtTabsPane current={current} index={0} >
                <View>
                  <OrderItem list={list}/>
                </View>
              </AtTabsPane>
              <AtTabsPane current={this.state.current} index={1}>
              <View>
                  <OrderItem list={list}/>
              </View>
              </AtTabsPane>
              <AtTabsPane current={this.state.current} index={2}>
                 <View>
                    <OrderItem list={list}/>
                </View>
              </AtTabsPane>
              <AtTabsPane current={this.state.current} index={3}>
                 <View>
                    <OrderItem list={list}/>
                </View>
              </AtTabsPane>
              <AtTabsPane current={this.state.current} index={4}>
                 <View>
                    <OrderItem list={list}/>
              </View>
              </AtTabsPane>
            </AtTabs>
        );
    }
}