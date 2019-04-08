import {Component} from '@tarojs/taro';
import { View } from '@tarojs/components'
import './index.scss';
import Title from '../title';
import ProductItem from './../../../component/product';

export default class OrderDetail extends Component{
    constructor(){
        super(...arguments);
    }

    config = {
        navigationBarTitleText: '订单详情'
    }

    render(){

        return (
            <View className="mp-order-detail">
                <View className="tips">
                    <Text>订单已完成</Text>
                    <Text>与咨询师沟通确认后进行消费</Text>
                    <Text className="mp-icon mp-icon-order-detail success"></Text>
                </View>

                <View className="customer">
                    <Text className="mp-icon mp-icon-order-group card"></Text>
                    <View>
                        <View>客户: 徐天宇</View>
                        <View className="tel">电话: 13545667770 </View>
                    </View>
                </View>

                <View className="ping">
                    <Text className="mp-icon mp-icon-order-card"></Text>
                    <View>
                        <View className="text">拼团中</View>
                        <View className="group">
                            <View className="person">1</View>
                            <View className="person">2</View>
                            <View className="person">3</View>
                        </View>
                    </View>
                </View>

                <View className="product">
                  {/* todo: 组件抽象化. */}
                    <Title/>
                    <ProductItem/>
                    <View className="appoint">
                        <Text>预约时间: 2019年04月08日</Text>
                        <Text>预定金: 
                            <Text className="amount">￥200</Text>
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
                        {/* <Text>
                         
                        </Text>
                        <Text></Text>
                        <Text>
                            <Text className="mp-icon mp-icon-tel margin8"></Text>
                            <Text className="tel">电话咨询</Text>
                        </Text> */}
                    </View>
                </View>

                <View className="footer">
                    <View className="code">
                        <View className="wrap"></View>
                        <Text className="sequence">
                            验证码 2018 1010 5183 4518
                        </Text>
                        <View className="qrCode"></View>
                    </View>
                    <View className="info">
                        <View>
                         订单编号： 21312414124134
                         <Text className="copy">复制</Text>
                        </View>
                        <View>
                        支付方式： 微信支付
                        </View>
                        <View>
                        下单时间： 21312414124134
                        </View>
                        <View>
                        拼团时间： 21312414124134
                        </View>
                       
                    </View>
                </View>

            </View>
        )

    }
}