import Taro, { Component } from '@tarojs/taro';
import { AtTabs, AtTabsPane } from 'taro-ui'
import './index.scss';
import OrderItem from './list';

export default class OrderList extends Component{
    config = {
        navigationBarTitleText: '我的订单'
    }

    constructor(){
        super(...arguments);
        this.state = {
            current:0
        }
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
                        <OrderItem/>
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