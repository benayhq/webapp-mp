import Taro, { Component } from '@tarojs/taro'
import { View, Text,Image,Button } from '@tarojs/components'
import './index.scss'
import TaroCanvasDrawer from './../../../components/taro-plugin-canvas'; // 拷贝文件到component的引入方式
import {connect} from '@tarojs/redux';
import * as actions from '../store/actionCreators';
import {getAuthInfo} from './../../../utils/storage';

@connect(state=>state,actions)
export default class Index extends Component{
  config = {
    navigationBarTitleText: '生成海报'
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
      imgList:[],
      activeId:0
    }
  }

  componentWillMount(){
    // console.log('this.$router.params',this.$router.params);
    this.setState({
      activeId:this.$router.params.activeId
    })
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


  async getAuthInfo(){
    const result = Taro.getStorage({key:'userinfo'}).then(res => {return res.data});
     return result;
  }

  async getCanvas(templateId){
      let userInfo = await getAuthInfo();
      // page: "pages/product/detail",
      var payload = {
        auto_color: true,
        is_hyaline: true,
        line_color: {"r":0,"g":0,"b":0},
        page: "pages/product/detail",
        scene: `activeId=${this.state.activeId}&refId=${userInfo.id}&sc=advert`,
        width: 100,
        height: 100
      };

      this.getQrCode(payload).then(response=>{
        console.log('response',response);
          this.getActivityData().then(data=>{
            const config = this.buildConfig(templateId,{
              data:data.content,
              img:response.content
            });
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
  }
  
  buildConfig(templateId,configData){
    var response = configData.data,imgUrl = configData.img;
    console.log('configData.data',configData.data);
    response.inviterProfileUrl = 'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqgQbxxNe21poPOytoOu6icmqbNTSSdCYiaJ6ibDSIVyMf4kLJOlx3A6iaGDjGRBzH14811yt7jYGfibMg/132';
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
                url: 'https://lovemeipin.oss-cn-shanghai.aliyuncs.com/common/share_01.png',
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
                text: response.inviterName,
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
                url: 'https://lovemeipin.oss-cn-shanghai.aliyuncs.com/common/share_02.png',
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
                url:'https://lovemeipin.oss-cn-shanghai.aliyuncs.com/common/share_02.png',
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
                text: response.inviterName,
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
                  url: 'https://lovemeipin.oss-cn-shanghai.aliyuncs.com/common/share-03.png',
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
                  url:'https://lovemeipin.oss-cn-shanghai.aliyuncs.com/common/share-03.png',
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
                  text: response.inviterName,
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
                url: 'https://lovemeipin.oss-cn-shanghai.aliyuncs.com/common/share-04.png',
                width: this.getScreenW(),
                height: this.getScreenH(),
                y: 0,
                x: 0,
                borderRadius: 12,
                zIndex: 10,
              },
              // {
              //   x: this.factorWidth(330),
              //   y: this.factorHeight(700),
              //   url: imgUrl,
              //   width: 180,
              //   height:180,
              //   borderRadius: 100,
              //   borderWidth: 0,
              //   zIndex: 99,
              // },
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
                text: response.inviterName,
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
                url: 'https://lovemeipin.oss-cn-shanghai.aliyuncs.com/common/share_01.png',
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
                text: response.inviterName,
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
      activityId:this.state.activeId
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
        'https://lovemeipin.oss-cn-shanghai.aliyuncs.com/common/share_01.png',
        'https://lovemeipin.oss-cn-shanghai.aliyuncs.com/common/share_02.png',
        'https://lovemeipin.oss-cn-shanghai.aliyuncs.com/common/share-03.png',
        'https://lovemeipin.oss-cn-shanghai.aliyuncs.com/common/share-04.png'
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
    this.getCanvas(id);
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
    Taro.saveImageToPhotosAlbum({
      filePath: this.state.shareImage,
    });
    Taro.showToast({
      title: '保存图片成功',
      icon: 'success',
      duration: 1000,
    })
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
            (
              <TaroCanvasDrawer
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
