import {Component} from '@tarojs/taro';
import {View} from '@tarojs/components';
import './index.scss';

export default class Assemble extends Component{
    constructor(){
        super(...arguments);
    }

    render(){

        return (
            <View className="ping">
                <Text className="mp-icon mp-icon-order-card"></Text>
                <View>
                    <View className="text"></View>
                    <View className="group">
                        {
                           this.props.content.batchUsers && this.props.content.batchUsers.map((item,key)=>{
                                return (
                                    <image style="height:50px;width:50px;border-radius:100px;"
                                    src={item.profileUrl}>
                                    </image>
                                )
                            })
                        }
                   </View>
                </View>
            </View>
        )
    }
}