import Taro,{Component} from '@tarojs/taro';
import {View,Text,Swiper,SwiperItem,ScrollView} from '@tarojs/components';
import './detail.scss';
import { AtButton } from 'taro-ui';
import Modal from './../../components/modal';
import {Popup} from './../../components/popup/index';
import Spec from './spec/index';
import Contact from './contact/index';
import {getWindowHeight} from './../../utils/style';
import TuanList from './tuan/index';

class Detail extends Component{

    config = {
        navigationBarTitleText: '活动详情'
    }

    constructor(){
        super(...arguments);
        this.state = {
            isOpened: false,
            categoryDialog: false,
            visible: true,
            bSpec: true,
            bContact: false,
            showOrderDialog:false
        }
    }

    openDialog(){
        this.setState({
            visible: true,
            bContact: true,
            bSpec:false,
            showOrderDialog:false
        })
    }

    openCategoryDialog(){
        this.setState({
            visible: true,
            bSpec:true,
            bContact: false,
            showOrderDialog:false
        })
    }

    toggleVisible = () =>{
        this.setState({
            visible:!this.state.visible
        })
    }

    close(){
        this.setState({
            isOpened:false
        })
    }

    showMpDialog(){
        this.setState({
            showOrderDialog:true
        })
    }

    render(){
        const height = getWindowHeight(false);
        
        const { isOpened,bSpec,bContact,showOrderDialog } = this.state;

        const popupStyle = process.env.TARO_ENV === 'rn' ?
        { transform: [{ translateY: Taro.pxTransform(-100) }] } :
        { transform: `translateY(${Taro.pxTransform(-100)})` }

        return (
            <View className='mp-activedetail'>
                <ScrollView
                 scrollY
                 style={{ height }}
                 >
                    <Swiper
                        className='mp-swiper'
                        indicatorColor='#999'
                        indicatorActiveColor='#333'
                        indicatorDots
                        autoplay>
                        <SwiperItem>
                            <image
                            className='demo-text-1'
                            mode="scaleToFill"
                            src={'https://storage.360buyimg.com/mtd/home/111543234387022.jpg'}
                            ></image>
                        </SwiperItem>
                        <SwiperItem>
                        <image
                            className='demo-text-1'
                            mode="scaleToFill"
                            src={'https://storage.360buyimg.com/mtd/home/111543234387022.jpg'}
                            ></image>
                        </SwiperItem>
                        <SwiperItem>
                        <image
                            className='demo-text-1'
                            mode="scaleToFill"
                            src={'https://storage.360buyimg.com/mtd/home/111543234387022.jpg'}
                            ></image>
                        </SwiperItem>
                    </Swiper>
                    <View className="mp-activedetail__user">
                        <Text>好友 </Text>
                        <Text> 爱吐槽的徐教授 </Text>
                        <Text> 发起的拼团,还差 </Text>
                        <Text> 1 </Text>
                        <Text>人成团</Text>
                    </View>

                    <View className="mp-activedetail__price">
                        <View style="height:35px;line-height:35px;">
                            <Text className="mp-activedetail__title">￥2000</Text>
                            <Text className="mp-activedetail__subtitle">￥3000</Text>
                        </View>
                        <View className="mp-activedetail__desc">【玻t尿酸瘦脸针】瑞典进口 可打嘟嘟唇微笑唇 塑造心形脸</View>
                        <View>
                            <Text className="mp-activedetail__address">上海市</Text>
                            <Text className="mp-activedetail__tel">已咨询：140074</Text>
                        </View>
                    </View>

                    <View className="mp-activedetail__service">
                        <View>服务承诺</View>
                        <View>正品保证 ·</View>
                        <View>预付款可退 ·</View>
                        <View>预付款可退</View>
                    </View>

                    <View className="mp-activedetail__consultation">
                        <Text>咨询产品</Text>
                        <Text>艾美玻尿酸 0.8ml 2支</Text>
                    </View>

                    <View className="mp-activedetail__person">
                        <View className="mp-activedetail__header">
                                <image
                                style="width:80px;height:80px;"
                                mode="scaleToFill"
                                src={'https://storage.360buyimg.com/mtd/home/111543234387022.jpg'}
                                ></image>
                        </View>

                        <View className="mp-activedetail__content">
                            <View>
                            医美管家 vivi
                            </View>
                            <View>
                            5.0分（2000人评）| ￥29999
                            </View>
                            <View>
                            服务区域：上海市 黄浦区
                            </View>
                        </View>
                    </View>

                    <View className="mp-activedetail__join">
                        <View className="mp-activedetail__first">
                            <Text className="mp-activedetail__etitle">14人在拼单，可直接参与</Text>
                            <Text className="mp-activedetail__all" onClick={this.showMpDialog.bind(this)} > 查看全部</Text>
                        </View>
                        <View className="mp-activedetail__second"> 
                            <image
                                style="width:20px;height:20px;padding:13px 10px 0 10px;"
                                mode="scaleToFill"
                                src={'https://storage.360buyimg.com/mtd/home/111543234387022.jpg'}>
                            </image>
                            <Text>氧气9000532</Text>
                            <View className="mp-activedetail__joinperson">
                                <View className="mp-activedetail__counter">还差 1 人拼成</View>
                                <View className="mp-activedetail__time">剩余20:50:14</View>
                            </View>
                            <View className="mp-activedetail__joinaction">
                                <AtButton type='primary' size='small' onClick={this.showMpDialog.bind(this)} >去拼团</AtButton>
                            </View>
                        </View>
                    </View>

                    <View className="mp-activedetail__comment">
                        <View className="mp-activedetail__comment-title">评价 (7890)</View>
                        <View className="mp-activedetail__comment-content">
                                <View className="mp-activedetail__comment-username">氧气9000532</View>
                                <View className="mp-activedetail__comment-tag">
                                    <Text>环境：5.0</Text>
                                    <Text>专业度：5.0</Text>
                                    <Text>服务：5.0</Text>
                                    <Text>效果：5.0</Text>
                                </View>
                                <View className="mp-activedetail__comment-desc">
                                【玻尿酸瘦脸针】瑞典进口 可打嘟嘟唇塑造心形脸
                                </View>

                                <View className="mp-activedetail__comment-description">
                                    打完了拍照，医生服务态度好，下次还回去打针的，服务态度好，非常专业，效果之后会继续来评价
                                    打完了拍照，医生服务态度好，下次还回去打针的，服务态度好，非常专业，效果之后会继续来评价
                                <View className="mp-activedetail__comment-time">
                                    2018年03月15日
                                </View>

                                <View> 
                                    <image
                                        style="width:80px;height:80px;padding-right:20px;"
                                        mode="scaleToFill"
                                        src={'https://storage.360buyimg.com/mtd/home/111543234387022.jpg'}>
                                    </image>
                                    <image
                                        style="width:80px;height:80px;padding-right:20px;"
                                        mode="scaleToFill"
                                        src={'https://storage.360buyimg.com/mtd/home/111543234387022.jpg'}>
                                    </image>
                                    <image
                                    style="width:80px;height:80px;padding-right:20px;"
                                        mode="scaleToFill"
                                        src={'https://storage.360buyimg.com/mtd/home/111543234387022.jpg'}>
                                    </image>
                                </View>
                            </View>
                        </View>
                        <image
                                style="width:30px;height:30px;position:relative;left:5px;top:-262px;"
                                mode="scaleToFill"
                                src={'https://storage.360buyimg.com/mtd/home/111543234387022.jpg'}>
                        </image>
                        <View className="mp-activedetail__query-all-comment">
                            查看全部评论
                        </View>
                    </View>

                    <View className="mp-activedetail__consultation">
                    </View>

                    <View className="mp-activedetail__footer">
                        <View>
                            <View className="mp-activedetail__orderpay_footer">预定金: 
                                <Text style="color:rgba(235,47,150,1);">￥200</Text>
                            </View>
                            <View className="mp-activedetail__orderpay_face_footer">当面付: ￥1200 </View>
                        </View>
                        <View className="mp-activedetail__zixun_footer">
                            <View className="mp-icon mp-icon-telphone" onClick={this.openDialog.bind(this)} style="padding-right:20px;"></View> 
                        </View>
                        <View className="mp-activedetail__action__footer" onClick={this.openCategoryDialog.bind(this)}>
                            拼团预约
                        </View>
                    </View>

                </ScrollView>
              
                <Popup 
                 visible={this.state.visible}
                 onClose={this.toggleVisible}>
                      {
                          bContact && <Contact/>
                      }
                      {
                          bSpec && <Spec/>
                      }
                </Popup>

                <Modal isOpened={showOrderDialog}>
                     <TuanList/>
                </Modal>

            </View>
        )
    }
}

export default Detail;