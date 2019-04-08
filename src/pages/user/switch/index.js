import Taro,{Component} from '@tarojs/taro';
import {View} from '@tarojs/components';
import './index.scss';
import store from './../../../store/';
import {getChangeUserAction} from './../../../store/actionCreators';

export default class ChangeUser extends Component{

    constructor(props){
        super(...arguments);
        this.state = {
            isAgent:false,
            showUserText:'切换为咨询师'
        };
        this.handleChangeState = this.handleChangeState.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        store.subscribe(this.handleStoreChange)
    }

    handleChangeState(){
        const action = getChangeUserAction(!this.state.isAgent);
        store.dispatch(action);
    }

    handleStoreChange(){
        this.setState({
            isAgent:store.getState().isAgent,
            showUserText: store.getState().isAgent ? '切换为用户' :'切换为咨询师'
        });
    }

    render(){
        return (
          <View className="mp-user-changeuser" onClick={this.handleChangeState.bind(this)}> 
                {this.state.showUserText} 
          </View>
        )
    }
}