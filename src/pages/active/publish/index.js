import Taro, { Component } from '@tarojs/taro'
import { View,Text,Picker } from '@tarojs/components'
import { AtImagePicker,AtInput,AtMessage } from 'taro-ui'
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
import {Region} from './../../../components/'

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
      productIds:[],
      isOpened:false,
      docLocations:[],
      activeAllPrice:'',
      isShowPublic:false,
      region:'请选择省市区'
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
    if(this.$router.params.ids != undefined){
       productIds = this.$router.params.ids.split(',');
       this.setState({
          productIds:productIds
       })
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

    this.init();
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

    if(this.props.address !== ''){
      this.setState({
        region:this.props.address
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

  async initGroup(){
    var groups = [];
    for(var i =1; i<15; i++){
      groups.push(i);
    }
    this.setState({
      groupItem: groups
    });

    const result = await this.getAuthInfo();
    this.setState({
      region:result.areaCode === "" ? "请选择省市区" : result.areaCode,
    });
    if(result.cellphone === null || result.cellphone === ""){
      this.setState({
        isShowPublic:false
      });
    }
    else{
      this.setState({
        isShowPublic:true
      });
    }
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
            // TODO: bug 修复.
            // wx.showLoading({
            //   title: '上传中' + (i + 1) + '/' +tempFilePaths.length,
            //   mask: true
            // });
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

    this.props.dispatchUploadFile(payload);
  }

  handlePickerViewChange(e){
    const val = e.detail.value;
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

  onGetRegion(region) {
    console.log('region',region);
    this.props.disptachServiceAddress(region);
    // 参数region为选择的省市区
    this.setState({region});
    return region;
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

  async onPublish(){
    const {activeName,groupItemChecked,dateStart,dateEnd,docLocations,weChatNumber,region} = this.state;
    console.log('region',region);
    if(activeName === '' || activeName === undefined){
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
    if(region === '请选择省市区'){
      this.handleAlert('error','请选择省市区')
      return;
    }
    if(docLocations.length <= 0){
      this.handleAlert('error','请选择上传主图')
      return;
    }
    // if(docLocations.length>9){
    //   this.handleAlert('error','限制只能上传9张图片')
    //   return;
    // }
    const result = await getAuthInfo();
    let payload = {
      "areaCode": region,
      "docLocations": docLocations,
      "id": 0,
      "name": activeName,
      "people": groupItemChecked,
      "productIds": productIds,
      "startD": dateStart + " 00:00:00",
      "endD":dateEnd + " 59:59:59",
      "userId": result.id,
      "wechatId": weChatNumber
    };

    try{
      this.props.dispatchCreateActive(payload).then((res)=>{
        if(res && res.result === "success" && res.content !=null){
          Taro.navigateTo({
            url:`/pages/active/share/index?activeId=${res.content}`
          })
        }else{
          this.handleAlert('error',res.error);
        }
      })
    }
    catch(e){
      console.log('e',e);
    }
  }

  async getPhoneNumber(e) {
    if(e.detail.errMsg==="getPhoneNumber:ok"){
      var that = this;
      const {activeName,groupItemChecked,dateStart,dateEnd,docLocations,region} = this.state;
      if(activeName === '' || activeName === undefined){
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
      if(region === '请选择省市区'){
        this.handleAlert('error','请选择省市区')
        return;
      }
      if(docLocations.length <= 0){
        this.handleAlert('error','请选择上传主图')
        return;
      }
      if (e.detail.encryptedData && e.detail.iv) {
            let payload = {
              iv: e.detail.iv,
              phone: e.detail.encryptedData
            };
            const result = await this.props.dispatchWeixinDecrypt(payload);
            var object = JSON.parse(result.content);
            if(object.phoneNumber){
              let params = {
                  cellphone:object.phoneNumber
              };
              await this.props.UpdateUserInfo(params);
              const data = await this.props.GetUserInfo({});
              const result = data.content;
              Taro.setStorage({key:'userinfo',data:result});
              that.onPublish();
            }
            else{
              Taro.showToast({
                title: '网络异常',
                icon: 'none',
                duration: 3000,
                mask: true
              });
            }
        } else {
          Taro.showToast({
            title: '取消授权成功',
            icon: 'success',
            duration: 3000,
            mask: true
          });
        }
    }
  }

  handleActiveChange(activeName){
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
      url:'../../../packageA/pages/product/edit'
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

  selectProduct(){
    Taro.navigateTo({
        url:'../../../packageA/pages/product/index?productIds='+this.state.productIds
      })
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

 getWindowHeight(showTabBar = true,products){
    const info = Taro.getSystemInfoSync();
    const { windowHeight}  = info;

    return `${windowHeight+(products.length * 89)}px`
 }

  render () {

    const {activeName,dateEnd,dateStart,products,isOpened,isShowPublic} = this.state;
    console.log('isShowPublic',isShowPublic);
    const isAutoScrollItem = products.length === 0 ? "scroll-product-hidden" : "scroll-product";
    return (
      <View className="mp-active">
        <ScrollView scrollY style={{ height: this.getWindowHeight(true,products) }}>
        <AtMessage/>
          <View className="item" style="border:none;">
              <Text>活动名称</Text>
              <AtInput border={false} 
              value={activeName}
              onChange={this.handleActiveChange.bind(this)}
              placeholder="请输入活动名称" />
          </View> 

          <View className="item">
              <Picker range={this.state.groupItem} 
              onChange={this.handlePickerSelectGroupChange}>
                    <View className='picker'>
                          <Text>成团人数</Text> 
                          <Text className="time-tuan"> {this.state.groupItemChecked} </Text>  
                          <Text className='at-icon at-icon-chevron-right group-count'></Text>
                    </View>
              </Picker>
          </View>

          <View className="item">
              <Picker mode='date' onChange={this.onDateStartChange}>
                  <View className='picker'>
                    <Text>开始时间</Text> 
                    <Text className="time">{dateStart}</Text>  
                    <Text className='at-icon at-icon-chevron-right group-count'></Text>
                  </View>
              </Picker>
          </View>

        <View className="item" style="border:none;">
              <Picker mode='date' onChange={this.onDateEndChange}>
                  <View className='picker'>
                  <Text>结束时间</Text>  
                  <Text className="time">{dateEnd}</Text>  
                  <Text className='at-icon at-icon-chevron-right group-count'></Text>
                  </View>
              </Picker>
        </View>

        <View className="item">
            <Text>活动地点</Text>
            <Text className="time"></Text>  
            <Region onGetRegion={this.onGetRegion.bind(this)} />
            <Text className='at-icon at-icon-chevron-right group-address'></Text>
        </View>

        <View className="mp-publish-product">
           <View className="publish-item">
                  <Text>活动图片</Text>
           </View>
           <AtImagePicker
            multiple
            className="uploadImage"
            files={this.state.files}
            onChange={this.HandlePickerChange.bind(this)}
          />
        </View>

        <View className="mp-publish-product">
           <View className="publish-item">
                  <Text>活动产品</Text>
                  <Text onClick={this.selectProduct}>选择我的产品</Text>
           </View>
           <View className="pulbish-create" onClick={this.createProduct}>
                  <Text className="mp-icon mp-icon-plus"></Text>
                  <Text>新增产品</Text>
           </View>
           <ProductList products={products}/>
        </View>

      </ScrollView>
        <View className="publish">
          {
            isShowPublic?(<View onClick={this.onPublish}>立即发布</View>) : (<Button className="getPhone" formType='submit' openType='getPhoneNumber' 
            onGetPhoneNumber={this.getPhoneNumber.bind(this)}>
            立即发布 </Button>)
          }
        </View>
      </View>
    )
  }
}
