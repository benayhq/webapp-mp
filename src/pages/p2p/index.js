import {Component} from '@tarojs/taro';
import { WebView } from '@tarojs/components'
import './index.scss';

export default class Application extends Component{

    config = {
        navigationBarTitleText: '贷款申请'
    }

    constructor(props){
        super(...arguments);
    }
    
    render(){
        return (
            <View className="mp-user__controlpanel">
                <WebView src='https://lovemeipin.com/h5tuiguang/mff?ref=hd_11021801'/>
            </View>
        )
    }
}