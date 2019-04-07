import Taro,{Component} from '@tarojs/taro';
import {View} from '@tarojs/components';
import './index.scss';
import jump from './../../utils/jump';
import Event from './../../utils/event';
let myEvent = new Event();

export default class ChangeUser extends Component{

    constructor(){
        super(...arguments);

        this.state = {
            isAgent:false
        }
    }

    switchUser(){
        console.log("fdsafd");
        myEvent.emit("changeUser");
    }

    render(){
        return (
          <View className="mp-user-changeuser" onClick={this.switchUser.bind(this)}> 
            切换为用户
          </View>
        )
    }
}