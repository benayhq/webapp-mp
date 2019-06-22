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
        //     list:[{
        //         orderId:'0011',
        //         agentName: '医美管家 vivi',
        //         orderStatus: '待付款',
        //         products:[
        //             {}
        //         ]
        //     },{
        //         orderId:'0011',
        //         agentName: '医美管家 vivi',
        //         orderStatus: '待成团',
        //         products:[
        //             {}
        //         ]
        //     },{
        //         orderId:'0011',
        //         agentName: '医美管家 vivi',
        //         orderStatus: '待消费',
        //         products:[
        //             {}
        //         ]
        //     },{
        //         orderId:'0011',
        //         agentName: '医美管家 vivi',
        //         orderStatus: '待评价',
        //         products:[
        //             {}
        //         ]
        //     },{
        //         orderId:'0011',
        //         agentName: '医美管家 vivi',
        //         orderStatus: '已取消',
        //         products:[
        //             {}
        //         ]
        //     },{
        //         orderId:'0011',
        //         agentName: '医美管家 vivi',
        //         orderStatus: '拼团失败',
        //         products:[
        //             {}
        //         ]
        //     }
        //  ]
        }
    }

    componentDidMount(){
        var payload = {
            status:[]
        };
        this.props.dispatchOrderList(payload).then(response=>{
            console.log('response',response);
            this.setState({
                list:response.content
            });
        });
    }
    
    handleClick(value){
        this.setState({
            current:value
        })
    }

    render(){
        const tabList = [{ title: '全部' }, { title: '待付款' }, { title: '待成团' }, { title: '待消费' }, { title: '待评价' }]

        return (
            <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
              <AtTabsPane current={this.state.current} index={0} >
                <View>
                    <OrderItem list={this.state.list}/>
                </View>
              </AtTabsPane>
              <AtTabsPane current={this.state.current} index={1}>
              </AtTabsPane>
              <AtTabsPane current={this.state.current} index={2}>
              </AtTabsPane>
            </AtTabs>
          )
    }
}