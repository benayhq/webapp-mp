import Taro, { Component } from '@tarojs/taro'
import {Text,Swiper,SwiperItem,ScrollView} from '@tarojs/components';
import './index.scss';
import {Share} from './../../../components';
import * as actions from './../../product/store/actionCreators';
import {connect} from '@tarojs/redux';

@connect(state=>state,actions)
class PayDetail extends Component{
    config = {
        navigationBarTitleText: '交易成功提示'
    }

    state = {
        activeId:0,
        isOpened:false,
        referId:0,
        img:'',
        bannerList:[]
    }

    componentWillMount(){
        this.setState({
            activeId:this.$router.params.activeId
        });
    }

    componentDidMount(){
        this.loadData();
    }

    handleClose(){
        this.setState({
            isOpened:false
        });
    }
    
    handleInvertFirend(){
        this.setState({
            isOpened:true
        })
    }

    async getImgUrl(location){
        var payload = {
          location:location
        };
        const result = await this.props.dispatchDownLoadUrl(payload);
        return result.content;
    }

    loadData(){
        var payload ={
            activityId:this.state.activeId
        };

        var that = this;

        this.props.dispatchActiveInfo(payload).then(res=>{
            var bannerItemList =[];
            // 获取banner 图片.
            if(res.content &&  res.content.docInfo && res.content.docInfo.length > 0){
                res.content.docInfo.map((item)=>{
                    that.getImgUrl(item.location).then((response)=>{
                        console.log('response getImgUrl',response);
                        bannerItemList.push(response);
                    }).then(()=>{
                        that.setState({
                            activityName:res.content.activityName,
                            referId:res.content.agentId,
                            img:bannerItemList[0]
                        });
                    })
                })
            }
        });
    }


    render(){
        const {isOpened,activeId,referId,img,activityName} = this.state;

        return (
            <View className="mp-pay">
                <View className="mp-pay-result">
                    <View className="mp-icon mp-icon-success"></View> 
                </View>
               <View className="mp-pay-detail">
                    交易成功! 立即邀请好友！
               </View>
               <View className="mp-pay-action" onClick={this.handleInvertFirend.bind(this)}>
                    <View> 邀请好友拼单</View>
               </View>
               <Share isOpened={isOpened} path={`/pages/product/detail?activeId=${activeId}&refId=${referId}`} activeId={activeId} activityName={activityName} referId={referId} img={img} onClose={this.handleClose}/>
            </View>
        )
    }
}

export default PayDetail;