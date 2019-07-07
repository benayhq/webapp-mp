import {Component} from "@tarojs/taro";
import {View} from "@tarojs/components";
import './advert.scss';
import PropTypes from 'prop-types';
import SaveImage from './saveImage';

export default class Advert01 extends Component{

    render(){
        const data = this.props.data;
        const qrCode = this.props.qrCode;

        return (
            <View className="warpper">
                <View className="layer"></View>
                <View className="header">
                        <View>
                            <image style="width:45px;height:45px;margin-left:30px;border-radius: 100px;" src={data.inviterProfileUrl}></image>
                        </View>
                        <View className="desc">
                            <View>{data.inviterName}</View>
                            <View>邀您参与拼团，仅剩{data.remainPeople}个名额</View>
                        </View>
                </View>
                <View className="title">
                    {data.acitivityName}
                </View>
                <View className="qrCode-Wrapper">
                    <View className="qrCode">
                        <image  src={qrCode}></image>
                    </View>

                    <View>
                        <View className="qrCode-detail">
                            长按识别小程序码加入拼团
                        </View>
                        <View className="qrCode-button">
                            快速加入拼团
                        </View>
                    </View>
                </View>
                <SaveImage/>
            </View>
        )
    }
}

Advert01.defaultProps = {
    data:{},
    qrCode:''
}

Advert01.propTypes = {
    data:PropTypes.object,
    qrCode:PropTypes.string
}