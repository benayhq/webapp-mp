import Taro, { Component } from '@tarojs/taro'
import { View, Text,Button,Picker } from '@tarojs/components'
import {connect} from '@tarojs/redux';
import {AtButton,AtInput,AtForm,AtImagePicker,AtMessage,AtToast} from 'taro-ui';
import './edit.scss';
import * as actions from './store/actionCreators';
import {getAuthInfo} from './../../utils/storage';
var uploadImage = require('./../../utils/uploadFile.js');
var util = require('../../utils/util.js');
var imgArraySrc = [];

@connect(state=>state.product,actions)
class EditProduct extends Component{

    config = {
        navigationBarTitleText: '产品'
    }

    constructor(){
        this.state = {
           files: [],
           selector: ['美国', '中国', '巴西', '日本'],
           selectorChecked: '美国',
           multiSelector: [],
           selectorValue: 0,
           mulitSelectorValues: [0, 0, 0],
           productName:'',
           productPrice:'',
           activePrice:'',
           preAmount:'',
           toastText:'',
           isOpened:false,
           status:'',
           duration:2000,
           location:'',
           productId:0
        };

   }

   init(){
    this.initCategory();
    this.initProduct();
   }

   initCategory(){
      var payload ={
      };
      var that = this;
      this.props.dispatchCategoryList(payload).then((response)=>{

        var list = response.content;
        var firstList = [],secondList = [],thirdList = [];

        list.map((category,index)=>{
          firstList.push(category.name);
          
          if(category.son && category.son.length > 0){
            category.son.map((categoryChild,index)=>{
              secondList.push(categoryChild.name);
              if(categoryChild.son && categoryChild.son.length > 0){
                  categoryChild.son.map((child,index)=>{
                    thirdList.push(child.name);
                  })
              }
            });
          }
        });
        this.setState({
          multiSelector:[firstList,secondList,thirdList]
        });
      });
   }



   handleAlert = (type,message) => {
      Taro.atMessage({
        'message': message,
        'type': type
      });
   }

   handleChooseImage = (files) =>{
      this.setState({
          files
      });
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

            this.props.dispatchUploadConfig(payload).then((response)=>{
                uploadImage(file, response.content.location,
                  function (result) {
                    imgArraySrc.push(result);
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

   componentDidMount(){
     this.init();
   }

   componentWillMount(){
     this.setState({
      productId:this.$router.params.productId
     });
   }

   async handleSaveProduct(){
      const {productName,productPrice,activePrice,files,preAmount,mulitSelectorValues,location,productId} = this.state;
      
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

      if(imgArraySrc.length === 0){
        this.handleAlert('error','请上传产品图片');
        return;
      }

      if(preAmount === ''){
        this.handleAlert('error','请输入预定金');
        return;
      }

      const result = await getAuthInfo();

      var payload = {
        "advance": preAmount,
        "agentId": result.id,
        "discountPrice": activePrice,
        "id": productId,
        "location": imgArraySrc[0],
        "name": productName,
        "price": productPrice,
        "projectId": 1,
        "projectLevel": 0,
        "projectName": productName
      };

      if(productId>0){
        console.log('payload',payload);
        this.props.dispatchUpdateProductInfo(payload).then((res)=>{
          if(res.result === 'success'){
            this.setState({
              isOpened:true,
              toastText:'保存成功',
              status: 'success'
            });
            Taro.navigateTo({
              url:'/pages/product/index'
            })
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
      else{
        this.props.dispatchCreateProduct(payload).then((res)=>{
          if(res.result === 'success'){
            this.setState({
              isOpened:true,
              toastText:'保存成功',
              status: 'success'
            });
            Taro.navigateTo({
              url:'/pages/product/index'
            })
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
    
    onFail (mes) {
        console.log(mes)
    }

    async getImgUrl(location){
      var payload = {
        location:location
      };
      const result = await this.props.dispatchDownLoadUrl(payload);
      return result.content;
    }

   async initProduct(){
      const {productId} = this.state;
      if(productId>0){
        var payload = {
          productId:productId
        }
        this.props.dispatchQueryProductInfo(payload).then((response)=>{
          var data = response.content;
          console.log('productinfo',data);
          if(data){
            this.getImgUrl(data.location).then((response)=>{
              this.setState({
                files:[
                  {url:response}
                ]
              });
              imgArraySrc.push(data.location);
            });
            this.setState({
              productName:data.name,
              productPrice:data.discountPrice,
              activePrice:data.price,
              preAmount:data.advance
            });
          }
        })
      }
   }

   onImageClick(index,file){
     this.setState({
       files:[]
     });
     imgArraySrc=[];
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
                        <View className='demo-list-item__value'>{  multiSelector[0][mulitSelectorValues[0]] &&  `${multiSelector[0][mulitSelectorValues[0]]} & ${multiSelector[1][mulitSelectorValues[1]]} & ${multiSelector[2][mulitSelectorValues[2]]}`}</View>
                      </View>
                    </Picker>
                  </View>
                </View>
              </View>
              
              <AtInput
                    name='productName'
                    title='名称'
                    type='text'
                    placeholder='产品名称品牌规格信息'
                    value={productName}
                    onChange={this.handleProductChange.bind(this)}
              />

              <AtInput
                    name='productPrice'
                    title='价格'
                    type='number'
                    placeholder='请输入产品原价'
                    value={productPrice}
                    onChange={this.handlePriceChange.bind(this)}
                />
                <AtInput
                    name='activePrice'
                    title='活动价'
                    type='number'
                    placeholder='请输入产品活动价格'
                    value={activePrice}
                    onChange={this.handleActivePriceChange.bind(this)}
                />
                 <AtImagePicker
                    files={files}
                    onChange={this.handleChooseImage.bind(this)}
                    onImageClick={this.onImageClick.bind(this)}
                />
                  <AtInput
                    name='preAmount'
                    title='预定金'
                    type='number'
                    placeholder='请输入预定金'
                    value={preAmount}
                    onChange={this.handlePreAmountChange.bind(this)}
                />
                </AtForm>
                <View className="mp-edit-product__warn-tips">
                    温馨提醒：
                </View>
                <View className="mp-edit-product__warn-info">
                  预定金优先由平台代为收取,客户当面核销后转入您的微信余额。
                </View>
                <View className="mp-edit-product__save">
                    <View onClick={this.handleSaveProduct}>保  存</View>
                </View>
            </View>
        )
    }

}
export default EditProduct;