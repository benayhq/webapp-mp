import Taro, { Component } from '@tarojs/taro'
import { View, Text,Image,Button } from '@tarojs/components'
import './index.scss'
import {connect} from '@tarojs/redux';
import { TaroCanvasDrawer  } from 'taro-plugin-canvas'; 
import * as actions from '../store/actionCreators';
import {API_QRCODE} from './../../../constants/api';
import {getAuthInfo} from './../../../utils/storage';
import { AtInput } from 'taro-ui';
import Advert from './../advert';
import Advert01 from './../advert/advert';
import Advert02 from './../advert/advert02';
import Simple from './../demo'

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
          advertIndex:0,
          // 绘图配置文件
          config: null,
          // 绘制的图片
          shareImage: null,
          // TaroCanvasDrawer 组件状态
          canvasStatus: false,
          rssConfig: {
            width: 750,
            height: 950,
            backgroundColor: '#fff',
            debug: false,
            blocks: [
              {
                x: 0,
                y: 0,
                width: 750,
                height: 750,
                paddingLeft: 0,
                paddingRight: 0,
                borderWidth: 0,
                // borderColor: '#ccc',
                backgroundColor: '#EFF3F5',
                borderRadius: 0,
              },
              {
                x: 40,
                y: 40,
                width: 670,
                height: 670,
                paddingLeft: 0,
                paddingRight: 0,
                borderWidth: 0,
                // borderColor: '#ccc',
                backgroundColor: '#fff',
                borderRadius: 12,
              }
            ],
            texts: [
              {
                x: 80,
                y: 420,
                text: '国产谍战 真人演出,《隐形守护者》凭什么成为Steam第一?',
                fontSize: 32,
                color: '#000',
                opacity: 1,
                baseLine: 'middle',
                lineHeight: 48,
                lineNum: 2,
                textAlign: 'left',
                width: 580,
                zIndex: 999,
              },
              {
                x: 80,
                y: 590,
                text: '长按扫描二维码阅读完整内容',
                fontSize: 24,
                color: '#666',
                opacity: 1,
                baseLine: 'middle',
                textAlign: 'left',
                lineHeight: 36,
                lineNum: 1,
                zIndex: 999,
              },
              {
                x: 80,
                y: 640,
                text: '分享来自 「 RssFeed 」',
                fontSize: 24,
                color: '#666',
                opacity: 1,
                baseLine: 'middle',
                textAlign: 'left',
                lineHeight: 36,
                lineNum: 1,
                zIndex: 999,
              }
            ],
            images: [
              {
                url: './../../image/share.jpg',
                width: 750,
                height: 900,
                y: 0,
                x: 0,
                borderRadius: 12,
                zIndex: 10,
                // borderRadius: 150,
                // borderWidth: 10,
                // borderColor: 'red',
              },
              {
                url: 'https://pic.juncao.cc/cms/images/minapp.jpg',
                width: 110,
                height: 110,
                y: 570,
                x: 560,
                borderRadius: 100,
                borderWidth: 0,
                zIndex: 10,
              },
            ],
            lines: [
              {
                startY: 540,
                startX: 80,
                endX: 670,
                endY: 541,
                width: 1,
                color: '#eee',
              }
            ]
          }
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
    this.canvasDrawFunc();
  }

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

  // 调用绘画 => canvasStatus 置为true、同时设置config
  canvasDrawFunc = (config = this.state.rssConfig) => {
    this.setState({
      canvasStatus: true,
      config: config,
    })
    Taro.showLoading({
      title: '绘制中...'
    })
  }

  // 绘制成功回调函数 （必须实现）=> 接收绘制结果、重置 TaroCanvasDrawer 状态
  onCreateSuccess = (result) => {
    const { tempFilePath, errMsg } = result;
    Taro.hideLoading();
    if (errMsg === 'canvasToTempFilePath:ok') {
      this.setState({
        shareImage: tempFilePath,
        // 重置 TaroCanvasDrawer 状态，方便下一次调用
        canvasStatus: false,
        config: null
      })
    } else {
      // 重置 TaroCanvasDrawer 状态，方便下一次调用
      this.setState({
        canvasStatus: false,
        config: null
      })
      Taro.showToast({ icon: 'none', title: errMsg || '出现错误' });
      console.log(errMsg);
    }
    // 预览
    // Taro.previewImage({
    //   current: tempFilePath,
    //   urls: [tempFilePath]
    // })
  }

  // 绘制失败回调函数 （必须实现）=> 接收绘制错误信息、重置 TaroCanvasDrawer 状态
  onCreateFail = (error) => {
    Taro.hideLoading();
    // 重置 TaroCanvasDrawer 状态，方便下一次调用
    this.setState({
      canvasStatus: false,
      config: null
    })
    console.log(error);
  }

   // 保存图片至本地
  saveToAlbum = () => {
    const res = Taro.saveImageToPhotosAlbum({
      filePath: this.state.shareImage,
    });
    if (res.errMsg === 'saveImageToPhotosAlbum:ok') {
      Taro.showToast({
        title: '保存图片成功',
        icon: 'success',
        duration: 2000,
      });
    }
  }


  render () {
    const {imgList,data,qrCode} = this.state;

    return (
      <View className="mp-advert">
          <Image
            className="share-image"
            src={this.state.shareImage}
            mode='widthFix'
            lazy-load
          />
          {
            this.state.canvasStatus && (
              <TaroCanvasDrawer
                config={this.state.config} // 绘制配置
                onCreateSuccess={this.onCreateSuccess} // 绘制成功回调
                onCreateFail={this.onCreateFail} // 绘制失败回调
              />
            )
          }
          {/* { advertIndex === 0  && <Advert data={data} qrCode={qrCode}/> }  */}
         {/* { advertIndex === 1 && <Advert01 data={data} qrCode={qrCode}/>} */}
         {/* { advertIndex === 2 && <Advert02 data={data} qrCode={qrCode}/>} */}
          <View className="thumbnail-wrapper" >
              <View className="thumbnail">
              {
                  imgList.map((item,index)=>(
                    // <View onClick={this.handleChangeAdvert.bind(this,item,index)}>
                      <View onClick={this.canvasDrawFunc.bind(this, this.state.rssConfig)}>
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
