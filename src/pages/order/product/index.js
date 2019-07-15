import {Component} from '@tarojs/taro';
import {View} from '@tarojs/components';
import Title from '../title';
import ProductItem from '../../../components/product';
import './index.scss';

function getLocalTime(timestamp) {
    var d = new Date(timestamp);
    var date = (d.getFullYear()) + "-" +
            (d.getMonth() + 1) + "-" +
            (d.getDate()) + " " +
            (d.getHours()) + ":" +
            (d.getMinutes()) + ":" +
            (d.getSeconds());
    return date;
}

export default class OrderProduct extends Component{
    constructor(){
        super();
    }
    
    render(){
        
        return (
                <View className="product">
                <Title AgentName={this.props.content.agentName}/>
                <ProductItem/>
                <View className="appoint">
                    <Text>预约时间: { this.props.content && getLocalTime(this.props.content.createdD)}</Text>
                    <Text>预定金: 
                        <Text className="amount">￥{this.props.content.productAdvance}</Text>
                    </Text>
                </View>
                <View>

                </View>
                <View className="service">
                    <View className="wechat">
                        <Text className="mp-icon mp-icon-wechat margin8"></Text>
                        <Text>微信联系</Text>
                    </View>
                    <View className="tel">
                        <Text className="mp-icon mp-icon-tel margin8"></Text>
                        <Text className="tel">电话咨询</Text>
                    </View>
                </View>
            </View>
        )
    }
}