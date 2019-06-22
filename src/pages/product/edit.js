import Taro, { Component } from '@tarojs/taro'
import { View, Text,Button,Picker } from '@tarojs/components'
import {connect} from '@tarojs/redux';
import {AtButton,AtInput,AtForm,AtImagePicker,AtMessage,AtToast} from 'taro-ui';
import './edit.scss';
import * as actions from './store/actionCreators';
import {getAuthInfo} from './../../utils/storage';
var uploadImage = require('./../../utils/uploadFile.js');
var util = require('../../utils/util.js');

@connect(state=>state.product,actions)
class EditProduct extends Component{
  
    config = {
        navigationBarTitleText: '新增产品'
    }

    constructor(){
        this.state = {
           files: [],
           selector: ['美国', '中国', '巴西', '日本'],
           selectorChecked: '美国',
           multiSelector: [['饭', '粥', '粉'], ['猪肉', '牛肉']],
           selectorValue: 0,
           mulitSelectorValues: [0, 0],
           productName:'',
           productPrice:'',
           activePrice:'',
           preAmount:'',
           toastText:'',
           isOpened:false,
           status:'',
           duration:2000,
           location:''
        };
    }

   handleAlert = (type,message) => {
      Taro.atMessage({
        'message': message,
        'type': type
      });
   }

   handleChooseImage = () =>{
      var that = this;

      wx.chooseImage({
        count: 1, // 默认最多一次选择9张图
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res){
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          var tempFilePaths = res.tempFilePaths;
          var nowTime = util.formatTime(new Date());

          //支持多图上传
          for (var i = 0; i < res.tempFilePaths.length; i++) {
              //显示消息提示框
              wx.showLoading({
                title: '上传中' + (i + 1) + '/' + res.tempFilePaths.length,
                mask: true
              });

              let file = res.tempFilePaths[i];

              var payload ={
                documentType:'PRODUCT',
                fileName:'PRODUCT.png'
              };
              
              that.props.dispatchUploadConfig(payload).then((response)=>{
                    uploadImage(file,response.content.location,
                      function (result) {
                          that.setState({
                            location:result
                          });
                          console.log("======上传成功图片地址为：", result);
                          wx.hideLoading();
                      },function (result){
                          console.log("======上传失败======", result);
                          wx.hideLoading()
                      }
                    );
              });
          }
        }
    })
   }

   async handleSaveProduct(){
      const {productName,productPrice,activePrice,files,preAmount,mulitSelectorValues,location} = this.state;

      if(productName===''){
        this.handleAlert('error','名称不能为空');
        return;
      }
      if(productPrice === ''){
        this.handleAlert('error','价格不能为空');
        return;
      }
      if(activePrice === ''){
        this.handleAlert('error','活动价不能为空');
        return;
      }
      if(location === ''){
        this.handleAlert('error','请上传产品图片');
        return;
      }
      if(preAmount === ''){
        this.handleAlert('error','请输入预定金');
        return;
      }

      const result = await getAuthInfo();

      console.log('files',files);
      console.log('mulitSelectorValues[0]',1);

      var payload = {
        "advance": preAmount,
        "agentId": result.id,
        "discountPrice": activePrice,
        "id": 0,
        "location": location,
        "name": productName,
        "price": productPrice,
        "projectId": 1,
        "projectLevel": 0,
        "projectName": productName,
        "status": "string"
      };

      console.log('payload',payload);

      this.props.dispatchCreateProduct(payload).then((res)=>{
        if(res.result === 'success'){
          this.setState({
            isOpened:true,
            toastText:'添加成功',
            status: 'success'
          });
          // Taro.navigateTo({
          //   url:'/pages/product/index'
          // })
        }
        else{
          this.setState({
            isOpened:true,
            toastText:res.error,
            status: 'error'
          })
        }
      });
    }
    
    handleProductChange(productName){
      this.setState({
        productName
      });
      return productName
    }

    handlePriceChange(productPrice){
      this.setState({
        productPrice
      })
      return productPrice;
    }

    handleActivePriceChange(activePrice){
      this.setState({
        activePrice
      })
      return activePrice;
    }

    handleMulitChange = e => {
      this.setState({
        mulitSelectorValues: e.detail.value,
        isOpened:false
      })
    }

    handlePreAmountChange(preAmount){
      this.setState({
        preAmount
      })
      return preAmount;
    }

    onChange (files) {
        this.setState({
          files
        })
    }
    
    onFail (mes) {
        console.log(mes)
    }

    onImageClick (index, file) {
        console.log(index, file)
    }

    render(){

        const {productName,productPrice,activePrice,preAmount,
          files,toastText,isOpened,status,duration} = this.state;

        return (
            <View className="mp-edit-product">
               <AtMessage/>
               <AtToast 
               isOpened={isOpened} 
               text={toastText} 
               status={status} 
               duration={duration}
               icon="{icon}"></AtToast>
             <AtForm>

              <View className='panel'>
                <View className='panel__content'>
                  <View className='example-item'>
                    <Picker mode='multiSelector' range={multiSelector} value={mulitSelectorValues} onChange={this.handleMulitChange}>
                      <View className='demo-list-item'>
                        <View className='demo-list-item__label'>分类</View>
                        <View className='demo-list-item__value'>{`${multiSelector[0][mulitSelectorValues[0]]} & ${multiSelector[1][mulitSelectorValues[1]]}`}</View>
                      </View>
                    </Picker>
                  </View>
                </View>
              </View>

              <AtInput
                    name='productName'
                    title='名称'
                    type='number'
                    placeholder='产品名称品牌规格信息'
                    value={productName}
                    onChange={this.handleProductChange.bind(this)}
              />

              <AtInput
                    name='value3'
                    title='价格'
                    type='text'
                    placeholder='请输入产品原价'
                    value={productPrice}
                    onChange={this.handlePriceChange.bind(this)}
                />
                <AtInput
                    name='value4'
                    title='活动价'
                    type='text'
                    placeholder='请输入产品活动价格'
                    value={activePrice}
                    onChange={this.handleActivePriceChange.bind(this)}
                />
                 <AtImagePicker
                    files={files}
                    onChange={this.onChange.bind(this)}
                />
                  <AtInput
                    name='preAmount'
                    title='预定金'
                    type='text'
                    placeholder='请输入预定金'
                    value={preAmount}
                    onChange={this.handlePreAmountChange.bind(this)}
                />
                <AtButton type='primary' onClick={this.handleChooseImage.bind(this)}>上传图片</AtButton>
                </AtForm>

                <View className="mp-edit-product__warn-tips">
                    温馨提醒：
                </View>

                <View className="mp-edit-product__warn-info">
                  预定金优先由平台代为收取,客户当面核销后转入您的微信余额。
                </View>

                <Button onClick={this.handleSaveProduct}>保存</Button>
            </View>
        )
    }
}
export default EditProduct;