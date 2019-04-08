import {Component} from '@tarojs/taro';
import { View } from '@tarojs/components'
import './index.scss';

export default class Panel extends Component{
    constructor(props){
        super(...arguments);
    }
    
    render(){
        return (
            <View className="mp-user__controlpanel">
            {
                this.props.list.map(item=>(
                    <View className="mp-user__controlpanel-active" onClick={this.jumpUrl.bind(this,item.url)}>
                        <View className={item.icon}></View> 
                        <View className="mp-user__controlpanel-text">{item.text}</View>
                    </View>
                ))
            }
            </View>
        )
    }
}