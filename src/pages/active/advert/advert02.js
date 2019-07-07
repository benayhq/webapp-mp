import {Component} from "@tarojs/taro";
import {View} from "@tarojs/components";
import './advert02.scss';
import PropTypes from 'prop-types';
import SaveImage from './saveImage';

export default class Advert02 extends Component{

    render(){
        const data = this.props.data;
        const qrCode = this.props.qrCode;

        return (
            <View className="warpper">
                <View className="layer-top"></View>
                <View className="layer-bottom"></View>
            </View>
        )
    }
}

Advert02.defaultProps = {
    data:{},
    qrCode:''
}

Advert02.propTypes = {
    data:PropTypes.object,
    qrCode:PropTypes.string
}
