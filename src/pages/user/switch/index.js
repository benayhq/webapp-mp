import Taro,{Component} from '@tarojs/taro';
import {View} from '@tarojs/components';
import './index.scss';
import {connect} from '@tarojs/redux';
import * as actions from '../store/actionCreators';

@connect(state=>state.user,actions)
export default class ChangeUser extends Component{
    constructor(props){
        super(...arguments);
        this.state = {
            isAgent:false,
            showUserText:'切换为咨询师'
        };
        this.bindEvent();
        this.init();
    }

    init(){
        console.log('ChangeUser props',this.props.userInfo);
        const {role} =this.props.userInfo;
        this.setState({
            isAgent:role === "CUSTOMER"? false : true,
            showUserText:role === "CUSTOMER"? '切换为咨询师' : '切换为用户'
        })
    }

    bindEvent(){
        this.handleChangeState = this.handleChangeState.bind(this);
    }

    handleChangeState(){
        this.props.ChangeToAgent({});
        const {role} =this.props.userInfo;
        this.setState({
            isAgent:role === "CUSTOMER"? false : true,
            showUserText:role === "CUSTOMER"? '切换为咨询师' : '切换为用户'
        })
    }
  
    render(){
        return (
          <View className="mp-user-changeuser" onClick={this.handleChangeState.bind(this)}> 
                {this.state.showUserText} 
          </View>
        )
    }
}