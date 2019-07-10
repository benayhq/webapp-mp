import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import {connect} from '@tarojs/redux';
import * as actions from '../store/actionCreators';
import {API_QRCODE} from './../../../constants/api';
import {getAuthInfo} from './../../../utils/storage';
import { AtInput } from 'taro-ui';
import Advert from './../advert';
import Advert01 from './../advert/advert';
import Advert02 from './../advert/advert02';

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
          qrCode:"",
          bannerList:[],
          data:{},
          advertIndex:0
      };
  }

  init(){
    this.initSelectdImg();
    this.initImage();
    this.initData();
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

  initData(){
    var payload = {
      batchId:1
      // activityId:null
    };
    this.props.dispatchAdvertQuery(payload).then((response)=>{
        this.setState({
          data:response.content
        });
    })
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

  handleChangeAdvert = (item,index,e) => {
      this.handleChangeBg(index);
      const imgUrl = e.currentTarget.dataset.eTapAA.url;
      this.setState({
        imgSrc:imgUrl
      });
      this.showMask(imgUrl);
  }

  handleChangeBg(index){
    var that = this;
    switch(index){
      case 0:
        that.setState({
          advertIndex:0
        })
        return;
      case 1:
        that.setState({
          advertIndex:1
         })
        return;
      default:
        that.setState({
          advertIndex:0
        });
      }
  }

  showMask(imgUrl){
     this.state.imgList.map((item,index)=>{
        item.url === imgUrl ? item.isShow = true : item.isShow = false;
     });
  }

  render () {
    const {imgList,data,qrCode} = this.state;

    return (
      <View className="mp-advert">
         { advertIndex === 0  && <Advert data={data} qrCode={qrCode}/> }
         { advertIndex === 1 && <Advert01 data={data} qrCode={qrCode}/>}
         { advertIndex === 2 && <Advert02 data={data} qrCode={qrCode}/>}
          <View className="thumbnail-wrapper" >
              <View className="thumbnail">
              {
                  imgList.map((item,index)=>(
                      <View onClick={this.handleChangeAdvert.bind(this,item,index)}>
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
