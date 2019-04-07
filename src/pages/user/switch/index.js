import Taro,{Component} from '@tarojs/taro';
import {View} from '@tarojs/components';
import './index.scss';
import store from './../../../store/';
import {getChangeUserAction} from './../../../store/actionCreators';

export default class ChangeUser extends Component{
    
    constructor(props){
        super(...arguments);
        this.state = store.getState();
        this.handleChangeState = this.handleChangeState.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        store.subscribe(this.handleStoreChange)
        console.log(store.getState());
    }

    handleChangeState(){
        const action = getChangeUserAction(!this.state.isAgent);
        store.dispatch(action);
        console.log("handleChangeState");
    }

    handleStoreChange(){
        this.setState(store.getState());
        console.log("store change");
    }

    render(){
        return (
          <View className="mp-user-changeuser" onClick={this.handleChangeState.bind(this)}> 
                切换为用户 {this.state.isAgent}
          </View>
        )
    }
}