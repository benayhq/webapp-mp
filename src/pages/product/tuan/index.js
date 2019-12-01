import Taro,{Component} from '@tarojs/taro';
import {View,Text,ScrollView} from '@tarojs/components';
import CountDown from '../component/index';
import './index.scss';

export default class TuanList extends Component{
    constructor(props){
        super(props);
    }


    
    render() {
        return (
            <ScrollView
            scrollY
            >
            <View className="mp-tuan">
               {
                     this.props.list.map((item,index)=>{
                        return (
                            <View className="mp-tuan__second">
                            <image
                                style="width:20px;height:20px;padding:13px 10px 0 10px;border-radius:5px;"
                                mode="scaleToFill"
                                src={item.profileUrl}>
                            </image>
                            <Text className="mp-tuan__username">{item.publishName}</Text>
                            <View className="mp-tuan__joinperson">
                                <View className="mp-tuan__counter">还差 {item.people} 人拼成</View>
                                <CountDown endTime={item.end}/>
                            </View>
                            <View className="mp-tuan__joinaction">
                                <View className="mp-tuan__action" onClick={this.showMpDialog.bind(this)}>去拼团</View>
                                {/* <AtButton type='primary'>去拼团</AtButton> */}
                                {/* <AtButton type='primary' size='small' onClick={this.showMpDialog.bind(this)} >去拼团</AtButton> */}
                            </View>
                            </View>
                         )
                     }
                 )
               }
               
            </View>
            </ScrollView>
        )
    }
}