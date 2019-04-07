import {Component} from "@tarojs/taro";
import {View} from "@tarojs/components";
import './index.scss';

export default class InCome extends Component{

    constructor(){
        super(...arguments);
    }

    render(){
        return (
         <View className="mp-user__income">
            <View className="mp-user__income-left">
              <View className="mp-user__income-text">30000</View>
              <View className="mp-user__income-text-desc">待结定金</View>
            </View>

            <View className="mp-user__income-middle">
              <View className="mp-user__income-text">300</View>
              <View className="mp-user__income-text-desc">累计成单</View>
            </View>

            <View className="mp-user__income-right">
              <View className="mp-user__income-text">30000</View>
              <View className="mp-user__income-text-desc">预计收入</View>
            </View>
        </View>
        )
    }

}