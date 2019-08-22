import Taro,{Component} from '@tarojs/taro';
import {View,Text} from '@tarojs/components';
import { AtButton } from 'taro-ui';
import './index.scss';

export default class TuanList extends Component{
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <View className="mp-tuan">
                 <View className="mp-tuan__second">
                        <image
                            style="width:20px;height:20px;padding:13px 10px 0 10px;"
                            mode="scaleToFill"
                            src={'https://storage.360buyimg.com/mtd/home/111543234387022.jpg'}>
                        </image>
                        <Text className="mp-tuan__username">氧气9000532</Text>
                        <View className="mp-tuan__joinperson">
                            <View className="mp-tuan__counter">还差 1 人拼成</View>
                            <View className="mp-tuan__time">剩余20:50:14</View>
                        </View>
                         <View className="mp-tuan__joinaction">
                            <AtButton type='primary'>去拼团</AtButton>
                             {/* <AtButton type='primary' size='small' onClick={this.showMpDialog.bind(this)} >去拼团</AtButton> */}
                         </View>
                 </View>
            </View>
        )
    }
}