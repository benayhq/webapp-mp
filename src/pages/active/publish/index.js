import Taro, { Component } from '@tarojs/taro'
import { View,Text,Picker, PickerView, PickerViewColumn,AtButton  } from '@tarojs/components'
import { AtImagePicker,AtInput,AtMessage,AtModal,
   AtModalHeader, AtModalContent, AtModalAction, AtToast } from 'taro-ui'
import ProductList from './productlist/index';
import {connect} from '@tarojs/redux';
import * as actions from '../store/actionCreators';
import {getAuthInfo} from './../../../utils/storage';
var productIds = [];
var uploadImage = require('./../../../utils/uploadFile.js');
var util = require('../../../utils/util.js');
var imgArraySrc = [];
import './index.scss';
import './productlist/index.scss';

@connect(state=>state.active,actions)
export default class Index extends Component {

  config = {
    navigationBarTitleText: '新增活动'
  }

  constructor(){
    super(...arguments);
    this.state = {
      files:[],
      selector: [['请选择', '美国', '中国', '巴西', '日本'], ['请选择', '美国', '中国', '巴西', '日本       ']],
      selectorChecked: '请选择',
      groupItemChecked:'请选择',
      groupItem:[],
      dateStart: '请选择',
      dateEnd: '请选择',
      products:[],
      activeAllName: '',
      weChatNumber:'',
      isOpened:false,
      docLocations:[],
      activeAllPrice:''
    };
    this.init();
  }

  async getImgUrl(location){
    var payload = {
      location:location
    };
    const result = await this.props.dispatchDownLoadUrl(payload);
    return result.content;
  }

  componentWillMount () {
    var productList = [];
    // console.log('this.$router.params.ids',this.$router.params.ids);
    if(this.$router.params.ids != undefined){
       productIds = this.$router.params.ids.split(',');
    }
      
    if(productIds.length>0){
        productIds.map((item,index)=>{
          console.log('item',item);
          var payload = {
            productId:item
          };
          this.props.dispatchQueryProductInfo(payload).then((res)=>{
            if(res.result === "success"){

              this.getImgUrl(res.content.location)
              .then(response=>{
                  res.content.location = response;
                  productList.push(res.content);
                  this.setState({
                    products:productList
                  });
              });
            }
          })
        });
    }
  }

  componentDidMount(){
    
    if(this.props.groupCount !== ''){
      this.setState({
        groupItemChecked:this.props.groupCount
      });
    }

    if(this.props.activeName !== ''){
      this.setState({
        activeName:this.props.activeName
      });
    }

    if(this.props.startTime !== ''){
      this.setState({
        dateStart:this.props.startTime
      });
    }

    if(this.props.endTime !== ''){
      this.setState({
        dateEnd:this.props.endTime
      });
    }

    if(this.props.activePrice !== ''){
      this.setState({
        activePrice:this.props.activePrice
      });
    }

    if(this.props.tempfiles.length>0){
      this.setState({
        files:this.props.tempfiles
      });
    }

    if(this.props.imgs.length > 0){
      var docLocations = [];
      this.props.imgs.map((item,key)=>{
        docLocations.push(item);
      })
      this.setState({
        docLocations:docLocations
      });
    }

  }

  init(){
    this.initGroup();
  }

  initGroup(){
    var groups = [];
    for(var i =1; i<15; i++){
      groups.push(i);
    }
    this.setState({
      groupItem: groups
    });
  }

  HandlePickerChange (files){
      this.setState({ files });
      this.props.dispatchCacheTempFiles(files);

      var that = this;
      var tempFilePaths = files;
      var nowTime = util.formatTime(new Date());
        //支持多图上传
        for (var i = 0; i < tempFilePaths.length; i++) {
            //显示消息提示框
            wx.showLoading({
              title: '上传中' + (i + 1) + '/' +tempFilePaths.length,
              mask: true
            });

            let file = tempFilePaths[i].url;

            var payload ={
              documentType:'ACTIVITY',
              fileName:'ACTIVITY.png'
            };

            var that = this;

            this.props.dispatchUploadConfig(payload).then((response)=>{
                uploadImage(file, response.content.location,
                  function (result) {
                    imgArraySrc.push(result);
                    that.setState({
                      docLocations:imgArraySrc
                    });
                    that.props.dispatchSaveImg(imgArraySrc);
                    console.log("======上传成功图片地址为：", result);
                    wx.hideLoading();
                  }, function (result) {
                    imgArraySrc = [];
                    console.log("======上传失败======", result);
                    wx.hideLoading()
                  }
                )
            });
      }
  }

  handleUploadLoader = () =>{

    var payload = {
      documentType:'PRODUCT',
      fileName:'name'
    };

    this.props.dispatchUploadFile(payload).then((res)=>{
      console.log('res',res);
    })
  }

  handlePickerViewChange(e){
    const val = e.detail.value;
    console.log("val",val);
  }

  handlePickerChange(e){
    let selectedValue = `${this.state.selector[0][e.detail.value[0]] } / ${this.state.selector[0][e.detail.value[1]]}`;
    this.setState({
      selectorChecked:selectedValue
    });
  }

  handlePickerSelectGroupChange(e){
    this.props.dispatchGroupCount(parseInt(e.detail.value)+1);
    this.setState({
      groupItemChecked:parseInt(e.detail.value)+1
    });
  }

  handlePickerColumnChange(e){
    console.log('e',e);
  }

  handleToUpload(){
    console.log('handleToUpload');
  }

  onDateStartChange = e =>{
    this.setState({
      dateStart:e.detail.value
    });
    this.props.dispatchStartTime(e.detail.value);
  }

  onChangeActivePrice = val =>{
    this.setState({
      activePrice:val
    });
    this.props.dispatchActivePrice(val);
  }

  handleAlert(type,message){
    Taro.atMessage({
      'message': message,
      'type': type
    });
  }
  
  async onPublish(e){
    const {activeName,groupItemChecked,dateStart,dateEnd,docLocations,weChatNumber} = this.state;

    if(activeName === ''){
      this.handleAlert('error','请填写活动名称')
      return;
    }
    if(groupItemChecked === '请选择'){
        this.handleAlert('error','请选择成团人数')
        return;
    }
    if(dateStart == '请选择'){
      this.handleAlert('error','请选择开始时间')
      return;
    }
    if(dateEnd == '请选择'){
      this.handleAlert('error','请选择结束时间')
      return;
    }
    if(docLocations.length <= 0){
      this.handleAlert('error','请选择上传主图')
      return;
    }
    const result = await getAuthInfo();
    
    let payload =  {
      "areaCode": "string",
      "docLocations": docLocations,
      "endD":dateEnd,
      "id": 0,
      "name": activeName,
      "people": groupItemChecked,
      "productIds": productIds,
      "startD": dateStart,
      "userId": result.id,
      "wechatId": weChatNumber
    };

    if(result.wechatId === 0 || result.wechatId === null){
      this.setState({
        isOpened:true
      })
      return;
    }

    this.props.dispatchCreateActive(payload).then((res)=>{
      if(res && res.result === "success" && res.content !=null){
        Taro.navigateTo({
          url:`/pages/active/share/index?activeId=${res.content}`
        })
      }else{
        this.setState({
          isOpened:true
        });
        this.handleAlert('error',res.error);
      }
    });
  }

  handleActiveChange(activeName){
    console.log('activeName',activeName);

    this.props.disptachActiveName(activeName);
    this.setState({
      activeName
    });
    return activeName;
  }

  onDateEndChange = e => {
    this.setState({
      dateEnd: e.detail.value
    });
    this.props.dispatchEndTime(e.detail.value);
  }
  
  createProduct(){
    Taro.navigateTo({
      url:'/pages/product/edit'
    })
  }

  handleWeChatChange(weChatNumber){
    this.setState({
      weChatNumber
    });
    return weChatNumber
  }

  handleCancel(){
    this.setState({
      isOpened:false
    })
  }

  async getAuthInfo(){
    const result = await Taro.getStorage({key:'userinfo'}).then(res => {return res.data});
    return result;
  }

  handleConfirm(){
    this.setState({
      isOpened:false
    });

    this.getAuthInfo().then(userinfo=>{
      var payload = {
          openId:userinfo.openId,
          wechatId:this.state.weChatNumber,
          id:userinfo.id
      };

      this.props.UpdateUserInfo(payload).then(res=>{
          console.log('response',res);
      });
    });
  }

  render () {
    const {activeName,dateEnd,dateStart,products,weChatNumber,isOpened} = this.state;

    return (
      <View className="mp-active">
        <AtMessage/>

        <View className="item">
            <Text>活动名称</Text>
            <AtInput border={false} 
            value={activeName}
            onChange={this.handleActiveChange.bind(this)}
            placeholder="请输入活动名称" />
        </View> 

        <View className="item">
            <Picker mode='selector' range={this.state.groupItem} 
            onChange={this.handlePickerSelectGroupChange}>
                  <View className='picker'>
                    <Text className="mp-publish mp-icon-arrow" ></Text> <Text>成团人数</Text> 
                    <Text className="time"> {this.state.groupItemChecked} </Text>  
                  </View>
            </Picker>
        </View>

        <View className="item">
            <Picker mode='date' onChange={this.onDateStartChange}>
                <View className='picker'>
                  <Text className="mp-publish mp-icon-arrow" ></Text> <Text>开始时间</Text> 
                  <Text className="time">{dateStart}</Text>  
                </View>
            </Picker>
        </View>

        <View className="item">
            <Picker mode='date' onChange={this.onDateEndChange}>
                <View className='picker'>
                 <Text className="mp-publish mp-icon-arrow" ></Text> <Text>结束时间</Text>  
                 <Text className="time">  {dateEnd}</Text>  
                </View>
            </Picker>
        </View>

        <AtImagePicker
          className="uploadImage"
           files={this.state.files}
           onChange={this.HandlePickerChange.bind(this)}
        />

        <View className="mp-publish-product">
                     <ProductList products={products}/>
                     {/* <View className="publish-active">
                            <Text>活动价</Text>
                              <AtInput border={false} 
                                          value={activePrice}
                                          onChange={this.onChangeActivePrice.bind(this)}
                                          placeholder="请输入活动优惠价" />
                      </View> */}
                      <View className="pulbish-create">
                      <Text className="mp-icon mp-icon-plus"></Text>
                      <Text onClick={this.createProduct}>新增产品</Text>
          </View>
        </View>

        <View className="publish">
            <View onClick={this.onPublish}>立即发布</View>
        </View> 

        <AtModal isOpened={isOpened}>
          <AtModalHeader>完善信息</AtModalHeader>
          <AtModalContent>
              <AtInput  placeholder='请输入微信号'   onChange={this.handleWeChatChange.bind(this)} value={weChatNumber}/>
          </AtModalContent>
          <AtModalAction> 
            <Button onClick={this.handleCancel}>取消</Button> 
            <Button onClick={this.handleConfirm}>确定</Button>
          </AtModalAction>
        </AtModal>

      </View>
    )
  }
}
