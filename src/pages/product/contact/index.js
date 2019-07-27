import Taro,{Component} from '@tarojs/taro';
import {View,Text,ScrollView} from '@tarojs/components';
import './index.scss';

export default class Contact extends Component{
    constructor(props){
        super(props);
    }

    render(){

        const { cellphone,weChatId,weChatQrCode} = this.props;
        return (<View className="mp-contact">
                    <View className="mp-contact__labeltel">
                        联系电话
                    </View>

                    <View className="mp-contact__phone">
                        {cellphone && cellphone}
                    </View>
                    <View className="mp-contact__labeltel">
                        联系微信
                    </View>

                    <View className="mp-contact__phone">
                        {weChatId && weChatId}
                    </View>
                    
                     <View>
                        <Text className="mp-contact__qrCode">二维码名片</Text>
                        <Text className="mp-contact__touchQrCode">长按识别二维码</Text>
                     </View>

                     <View className="mp-contact__qrbg">
                        <image
                        style="height:200px;width:200px;margin:0 auto;"
                        mode="scaleToFill"
                        src={weChatQrCode}>
                        </image>
                     </View>
    </View>)
  }
}