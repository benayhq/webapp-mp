import Taro, { Component } from '@tarojs/taro'
import { View, Text,Image,Button } from '@tarojs/components'
import './index.scss'
import TaroCanvasDrawer from './../../../components/taro-plugin-canvas'; // 拷贝文件到component的引入方式
import {connect} from '@tarojs/redux';
import * as actions from '../store/actionCreators';
import {API_QRCODE} from './../../../constants/api';
import {getAuthInfo} from './../../../utils/storage';
import { base64src } from './../../../utils/base64src'; 

@connect(state=>state,actions)
export default class Index extends Component{
  config = {
    navigationBarTitleText: '广告预览'
  }

  constructor(props) {
    super(props);

    this.state = {
      config: null,
      qrCode:'',
      data:null,
      shareImage: null,
      canvasStatus: false,
      bannerConfig:{},
      imgList:[]
    }

  }

  componentWillMount(){
  }

  init(){
    this.initImage();
  }

  getQrCode(payload){
    return new Promise((resolve,reject)=>{
      this.props.dispatchQueryQrCode(payload)
      .then(
        (result)=>{
          resolve(result);
        }
      )
      .catch(err=>{
        console.log(err);
        reject(err);
      })
    })
  }

  getBase64Src(base64){
    return new Promise((resolve,reject)=>{
      base64src('data:image/png;base64,'+base64,res=>{
        console.log('getBase64Src',res);
        resolve(res);
      })
    });
  }

  renderCanvas(templateId){

    var payload = {
      auto_color: true,
      is_hyaline: true,
      line_color: {"r":0,"g":0,"b":0},
      page: "pages/user/index",
      scene: "productId=10",
      width: 100,
      height: 100
    };

    this.getQrCode(payload).then(response=>{
      this.getBase64Src(response).then((imgUrl)=>{
        this.getActivityData().then(data=>{
          const config = this.buildConfig(templateId,{
            data:data.content,
            img:imgUrl
          });
          console.log('config',config);
          Taro.showLoading({
            title: '绘制中...'
          });
          this.setState({
            bannerConfig:config
          });
          setTimeout(()=>{
            this.setState({
              canvasStatus: true
            });
          },1000);
        });
      });
    });
  }
  
  buildConfig(templateId,configData){
    var response = configData.data,imgUrl = configData.img;
    console.log('response',response);
    // todo: 调用后台接口动态渲染模板.
    switch(templateId){
      case 1:
        return {
            width: 750,
            height: 750,
            backgroundColor: '#fff',
            debug: true,
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
            images: [
              {
                url: 'http://i1.fuimg.com/693434/ed131e39996b083e.png',
                width: this.getScreenW(),
                height: this.getScreenH(),
                y: 0,
                x: 0,
                borderRadius: 12,
                zIndex: 10,
              },
              {
                y: this.factorHeight(1500),
                x: this.factorWidth(560),
                url: imgUrl,
                width: 180,
                height:180,
                borderRadius: 100,
                borderWidth: 0,
                zIndex: 99,
              },
              {
                x: this.factorWidth(320),
                y: this.factorHeight(730),
                url: response.inviterProfileUrl,
                width:90,
                height:90,
                borderRadius: 90,
                zIndex: 999
              }
            ],
            texts: [
              {
                x: this.factorWidth(530),
                y: this.factorHeight(780),
                text: response.agentName,
                fontSize: 28,
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
                x: this.factorWidth(530),
                y: this.factorHeight(850),
                text: '邀您参与拼团,仅剩1个名额',
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
                x: this.factorWidth(330),
                y: this.factorHeight(1050),
                text: response.acitivityName,
                fontSize: 42,
                color: '#000',
                opacity: 1,
                baseLine: 'middle',
                textAlign: 'left',
                lineHeight: 36,
                lineNum: 1,
                zIndex: 999,
              }
              ,
              {
                x: this.factorWidth(580),
                y: this.factorHeight(1250),
                text: 'vivi 医美咨询师',
                fontSize: 28,
                color: '#666',
                opacity: 1,
                lineHeight: 36,
                lineNum: 1,
                zIndex: 999,
              }
              ,
              {
                x: this.factorWidth(450),
                y: this.factorHeight(1400),
                text: '长按识别小程序码加入拼团',
                fontSize: 28,
                color: '#000',
                opacity: 1,
                lineHeight: 36,
                lineNum: 1,
                zIndex: 999,
              }
            ]
        };
      case 2:
          return {
            width: 750,
            height: 750,
            backgroundColor: '#fff',
            debug: true,
            images: [
              {
                url: 'http://i1.fuimg.com/693434/27a892904e8d6cc3.png',
                width: this.getScreenW(),
                height: this.getScreenH(),
                y: 0,
                x: 0,
                borderRadius: 12,
                zIndex: 10,
              },
              {
                x: this.factorWidth(120),
                y: this.factorHeight(2100),
                url: imgUrl,
                width: 180,
                height:180,
                borderRadius: 100,
                borderWidth: 0,
                zIndex: 99,
              },
              {
                x: this.factorWidth(120),
                y: this.factorHeight(1540),
                url: response.inviterProfileUrl,
                width:90,
                height:90,
                borderRadius: 90,
                zIndex: 999
              },
              {
                url:'http://i1.fuimg.com/693434/001ceee2d4ed561f.png',
                x: this.factorWidth(470),
                y: this.factorHeight(2250),
                lineHeight: 36,
                lineNum: 1,
                zIndex: 999,
                width: 180,
                height:50,
              }
            ],
            texts: [
              {
                x: this.factorWidth(340),
                y: this.factorHeight(1580),
                text: response.agentName,
                fontSize: 28,
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
                x: this.factorWidth(340),
                y: this.factorHeight(1650),
                text: '邀您参与拼团,仅剩1个名额',
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
                x: this.factorWidth(120),
                y: this.factorHeight(1850),
                text: response.acitivityName,
                fontSize: 42,
                color: '#000',
                opacity: 1,
                baseLine: 'middle',
                textAlign: 'left',
                lineHeight: 36,
                lineNum: 1,
                zIndex: 999,
              }
              ,
              {
                x: this.factorWidth(120),
                y: this.factorHeight(2000),
                text: 'vivi医美咨询师',
                fontSize: 28,
                color: '#000',
                opacity: 1,
                lineHeight: 36,
                lineNum: 1,
                zIndex: 999,
              }
              ,
              {
                x: this.factorWidth(470),
                y: this.factorHeight(2200),
                text: '长按识别小程序码加入拼团',
                fontSize: 28,
                color: '#000',
                opacity: 1,
                lineHeight: 36,
                lineNum: 1,
                zIndex: 999,
              }
            ]
        };
      case 3:
          return {
              width: 750,
              height: 750,
              backgroundColor: '#fff',
              debug: true,
              images: [
                {
                  url: 'http://i2.tiimg.com/693434/21d537be2c4009cf.png',
                  width: this.getScreenW(),
                  height: this.getScreenH(),
                  y: 0,
                  x: 0,
                  borderRadius: 12,
                  zIndex: 10,
                },
                {
                  x: this.factorWidth(530),
                  y: this.factorHeight(1500),
                  url: imgUrl,
                  width: 180,
                  height:180,
                  borderRadius: 100,
                  borderWidth: 0,
                  zIndex: 99,
                },
                {
                  x: this.factorWidth(120),
                  y: this.factorHeight(1060),
                  url: response.inviterProfileUrl,
                  width:90,
                  height:90,
                  borderRadius: 90,
                  zIndex: 999
                },
                {
                  url:'http://i1.fuimg.com/693434/001ceee2d4ed561f.png',
                  x: this.factorWidth(560),
                  y: this.factorHeight(2150),
                  lineHeight: 36,
                  lineNum: 1,
                  zIndex: 999,
                  width: 180,
                  height:50,
                }
              ],
              texts: [
                {
                  x: this.factorWidth(340),
                  y: this.factorHeight(1100),
                  text: response.agentName,
                  fontSize: 28,
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
                  x: this.factorWidth(340),
                  y: this.factorHeight(1170),
                  text: '邀您参与拼团,仅剩1个名额',
                  fontSize: 24,
                  color: '#666',
                  opacity: 1,
                  baseLine: 'middle',
                  textAlign: 'left',
                  lineHeight: 36,
                  lineNum: 1,
                  zIndex: 999,
                },
                // {
                //   x: this.factorWidth(120),
                //   y: this.factorHeight(1850),
                //   text: response.acitivityName,
                //   fontSize: 42,
                //   color: '#000',
                //   opacity: 1,
                //   baseLine: 'middle',
                //   textAlign: 'left',
                //   lineHeight: 36,
                //   lineNum: 1,
                //   zIndex: 999,
                // }
                // ,
                // {
                //   x: this.factorWidth(120),
                //   y: this.factorHeight(2000),
                //   text: 'vivi医美咨询师',
                //   fontSize: 28,
                //   color: '#000',
                //   opacity: 1,
                //   lineHeight: 36,
                //   lineNum: 1,
                //   zIndex: 999,
                // }
                // ,
                {
                  x: this.factorWidth(560),
                  y: this.factorHeight(2100),
                  text: '长按识别小程序码',
                  fontSize: 28,
                  color: '#000',
                  opacity: 1,
                  lineHeight: 36,
                  lineNum: 1,
                  zIndex: 999,
                }
              ]
          };
      case 4:
          return {
            width: 750,
            height: 750,
            backgroundColor: '#fff',
            debug: true,
            images: [
              {
                url: 'http://i2.tiimg.com/693434/1c3f990b9b25bc6b.png',
                width: this.getScreenW(),
                height: this.getScreenH(),
                y: 0,
                x: 0,
                borderRadius: 12,
                zIndex: 10,
              },
              {
                x: this.factorWidth(330),
                y: this.factorHeight(700),
                url: imgUrl,
                width: 180,
                height:180,
                borderRadius: 100,
                borderWidth: 0,
                zIndex: 99,
              },
              {
                x: this.factorWidth(120),
                y: this.factorHeight(100),
                url: response.inviterProfileUrl,
                width:90,
                height:90,
                borderRadius: 90,
                zIndex: 999
              }
            ],
            texts: [
              {
                x: this.factorWidth(340),
                y: this.factorHeight(140),
                text: response.agentName,
                fontSize: 28,
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
                x: this.factorWidth(340),
                y: this.factorHeight(220),
                text: '邀您参与拼团,仅剩1个名额',
                fontSize: 24,
                color: '#666',
                opacity: 1,
                baseLine: 'middle',
                textAlign: 'left',
                lineHeight: 36,
                lineNum: 1,
                zIndex: 999,
              }
            ]
        };
      default:
          return {
            width: 750,
            height: 750,
            backgroundColor: '#fff',
            debug: true,
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
            images: [
              {
                url: 'http://i1.fuimg.com/693434/ed131e39996b083e.png',
                width: this.getScreenW(),
                height: this.getScreenH(),
                y: 0,
                x: 0,
                borderRadius: 12,
                zIndex: 10,
              },
              {
                y: this.factorHeight(1500),
                x: this.factorWidth(560),
                url: imgUrl,
                width: 180,
                height:180,
                borderRadius: 100,
                borderWidth: 0,
                zIndex: 99,
              },
              {
                x: this.factorWidth(320),
                y: this.factorHeight(730),
                url: response.inviterProfileUrl,
                width:90,
                height:90,
                borderRadius: 90,
                zIndex: 999
              }
            ],
            texts: [
              {
                x: this.factorWidth(530),
                y: this.factorHeight(780),
                text: response.agentName,
                fontSize: 28,
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
                x: this.factorWidth(530),
                y: this.factorHeight(850),
                text: '邀您参与拼团,仅剩1个名额',
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
                x: this.factorWidth(330),
                y: this.factorHeight(1050),
                text: response.acitivityName,
                fontSize: 42,
                color: '#000',
                opacity: 1,
                baseLine: 'middle',
                textAlign: 'left',
                lineHeight: 36,
                lineNum: 1,
                zIndex: 999,
              }
              ,
              {
                x: this.factorWidth(580),
                y: this.factorHeight(1250),
                text: 'vivi 医美咨询师',
                fontSize: 28,
                color: '#666',
                opacity: 1,
                lineHeight: 36,
                lineNum: 1,
                zIndex: 999,
              }
              ,
              {
                x: this.factorWidth(450),
                y: this.factorHeight(1400),
                text: '长按识别小程序码加入拼团',
                fontSize: 28,
                color: '#000',
                opacity: 1,
                lineHeight: 36,
                lineNum: 1,
                zIndex: 999,
              }
            ]
        };
    }
  }

  getActivityData(){
    var payload = {
      batchId:1
    };
    return new Promise((resolve,reject)=>{
      this.props.dispatchAdvertQuery(payload)
      .then(
        (result)=>{
          resolve(result);
        }
      )
      .catch(err=>{
        console.log(err);
        reject(err);
      })
    });
  }

  getScreenW(){
    const sysInfo = Taro.getSystemInfoSync();
    const screenWidth = sysInfo.screenWidth;
    return screenWidth * 2;
  }

  getScreenH(){
    const sysInfo = Taro.getSystemInfoSync();
    const screenHeight = sysInfo.screenHeight;
    return screenHeight * 2;
  }

  factorWidth(px){
    const sysInfo = Taro.getSystemInfoSync();
    const screenWidth = sysInfo.screenWidth;
    return px * screenWidth / 750;
  }

  factorHeight(px){
    const sysInfo = Taro.getSystemInfoSync();
    const screenHeight = sysInfo.screenHeight;
    return px * screenHeight / 1334;
  }

  componentDidMount(){
    this.init();
    this.canvasDrawFunc(1);
  }

  initImage(){
    var listImg = [
        'http://i2.tiimg.com/693434/9303c878fd23d918.png',
        'http://i2.tiimg.com/693434/6e5b1cb48e6fd139.png',
        'http://i2.tiimg.com/693434/7e8ed643f74d44b5.png',
        'http://i2.tiimg.com/693434/aea0dccce4c6ee48.png'
      ]
      ,
      thumbNails=[]
      ,
      index = 0;

      listImg.map((item,key)=>{
        index ++;
        thumbNails.push({
          id:index,
          url:item,
          isShow:key === 0 ? true : false
        });
        this.setState({
          imgList:thumbNails
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

  canvasDrawFunc = (id,event) => {
    this.renderCanvas(id);
    this.showMask(id);
  }

  showMask(id){
    this.state.imgList.map((item,index)=>{
       item.id === id ? item.isShow = true : item.isShow = false;
    });
  }

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

  onCreateFail = (error) => {
    Taro.hideLoading();
    // 重置 TaroCanvasDrawer 状态，方便下一次调用
    this.setState({
      canvasStatus: false,
      config: null
    })
    console.log(error);
  }

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

  render() {
    const {imgList,qrCode} = this.state;

    return (
      <View className="mp-advert">
          <Image
            className='shareImage'
            src={this.state.shareImage}
            mode='widthFix'
            lazy-load
          />
          {
            // 由于部分限制，目前组件通过状态的方式来动态加载
            this.state.canvasStatus &&
            (<TaroCanvasDrawer
              config={this.state.bannerConfig} // 绘制配置
              onCreateSuccess={this.onCreateSuccess} // 绘制成功回调
              onCreateFail={this.onCreateFail} // 绘制失败回调
            />
            )
          }
           <View className="thumbnail-wrapper" >
              <View className="thumbnail">
              {
                  imgList.map((item,index)=>(
                    // <View onClick={this.handleChangeAdvert.bind(this,item,index)}>
                      <View onClick={this.canvasDrawFunc.bind(this,item.id)}>
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
          <View className="image-save" onClick={this.saveToAlbum}>
                保存至相册
          </View>
      </View>
    )
  }
}
