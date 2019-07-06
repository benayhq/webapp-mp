import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import {connect} from '@tarojs/redux';
import * as actions from '../store/actionCreators';
import {API_QRCODE} from './../../../constants/api';
import {getAuthInfo} from './../../../utils/storage';
import { AtInput } from 'taro-ui'

@connect(state=>state,actions)
export default class Index extends Component{
  config = {
    navigationBarTitleText: '广告预览'
  }

  constructor(){
      super(...arguments);
      this.state = {
          imgSrc:'http://invitecard-1253442168.image.myqcloud.com/sharecard_tmp/2019-4-5/1554468983_1a277fade9b09ff199d377880f04137f.jpg',
          imgList:[],
          mask:'',
          qrCode:""
      };
  }

  init(){
    this.initSelectdImg();
    this.initImage();
  }

  initSelectdImg(){
    var payload = {
      auto_color: true,
      is_hyaline: true,
      line_color: {"r":0,"g":0,"b":0},
      page: "pages/user/index",
      scene: "productId=10",
      width: 100
    };

    this.props.dispatchQueryQrCode(payload).then((response)=>{
      this.setState({
        qrCode:'data:image/png;base64,'+response
      })
    });
  }

  initImage(){
    var listImg = [
      'dev/common/share_thumbnail_01.png',
      'dev/common/share_thumbnail_02.png',
      'dev/common/share_thumbnail_03.png',
      'dev/common/share_thumbnail_04.png'
      ],
      thumbNails=[];

    listImg.map((item,key)=>{
      this.getImgUrl(item).then((imageItem)=>{
        thumbNails.push({
          'url':imageItem,
          isShow: key === 0 ? true : false
        });
        this.setState({
          imgList:thumbNails
        });
      });
    });
  }

  async getImgUrl(location){
    var payload = {
      location:location
    };
    const result = await this.props.dispatchDownLoadUrl(payload);
    return result.content;
  }

  componentWillMount () { 
    console.log(this.$router.params) // 输出 { id: 2, type: 'test' }
  }

  componentDidMount () { 
    this.init();
  }

  componentWillUnmount () { }
  
  componentDidShow () { }

  componentDidHide () { }

  onClick = (e,item) => {
      const imgUrl = item.currentTarget.dataset.eTapAA.url;
      this.setState({
        imgSrc:imgUrl
      });
      this.showMask(imgUrl);
  }

  showMask(imgUrl){
     this.state.imgList.map((item,index)=>{
        item.url === imgUrl ? item.isShow = true : item.isShow = false;
     });
  }

  // dispatchQueryQrCode

  render () {
    const {imgSrc,imgList,mask,qrCode} = this.state;

    return (
      <View className="mp-advert">
          <View className="banner">
                <View className="img">
                       <image style="width:100px;height:100px;" src={qrCode}></image>
                </View>
          </View>

          <View className="thumbnail-wrapper" >
              <View className="thumbnail">
              {
                  imgList.map((item,index)=>(
                      <View onClick={this.onClick.bind(this,item)}>
                            <image key={index}  src={item.url}></image>
                            {
                              item.isShow
                              ?
                              <View className="mask">
                                  <Text className="mp-icon mp-icon-checkeditem"></Text>
                              </View>
                              :
                              ''
                            }
                      </View>
                  ))
              }
              </View>
          </View>
      </View>
    )
  }
}
