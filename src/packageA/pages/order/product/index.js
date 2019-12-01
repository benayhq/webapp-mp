import {Component} from '@tarojs/taro';
import {View} from '@tarojs/components';
import Title from '../title';
import ProductItem from '../../../components/product';
import './index.scss';
import * as actions from './../store/actionCreators';
import {connect} from '@tarojs/redux';

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

@connect(state=>state,actions)
export default class OrderProduct extends Component{
    constructor(){
        super();
        this.state ={
            profileUrl:''
        };
    }

    async getImgUrl(location){
        var payload = {
          location:location
        };
        const result = await this.props.dispatchCreateOrderDownLoadUrl(payload);
        return result.content;
    }
    
    componentDidMount(){
        setTimeout(()=>{
            console.log('this.props.content.activityProductLocationeee',this.props.content);
            if(this.props.content){
                this.getImgUrl(this.props.content.activityProductLocation).then((response)=>{
                    console.log('response',response);
                    this.setState({
                        profileUrl:response
                    })
                });
            }
        },1000)
    }

    render(){
        const {profileUrl} = this.state;
        console.log('profileUrl',profileUrl);

        return (
                <View className="product">
                <Title displayStatusDes={this.props.content ? this.props.content.displayStatusDes : ""} AgentName={this.props.content ? this.props.content.agentName : ""}/>
                <ProductItem/>
                <View className="item">
                     <View className="item-image"> 
                                 <image style="height:100%;width:100%;margin:0 auto;padding:5px;"
                                        mode="scaleToFill"
                                        src={profileUrl}>
                                </image>
                     </View>
                     <View className="item-desc">
                        <View>{this.props.content.activityName}</View>    
                        <View>{this.props.content.activityProductName}</View>    
                        <View>{this.props.content.productDiscountPrice}</View>    
                     </View>
                </View>
                <View className="appoint">
                    <Text>预约时间: { this.props.content && getLocalTime(this.props.content.createdD)}</Text>
                    <Text>预定金: 
                        <Text className="amount">￥{this.props.content.productAdvance}</Text>
                    </Text>
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