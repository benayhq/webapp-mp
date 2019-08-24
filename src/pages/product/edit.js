import Taro, { Component } from '@tarojs/taro'
import { View, Text,Button,Picker } from '@tarojs/components'
import {connect} from '@tarojs/redux';
import {AtInput,AtForm,AtImagePicker,AtMessage,AtToast} from 'taro-ui';
import './edit.scss';
import * as actions from './store/actionCreators';
import {getAuthInfo} from './../../utils/storage';
var uploadImage = require('./../../utils/uploadFile.js');
var util = require('../../utils/util.js');
var imgArraySrc = [],columnIndex =0,firstValue=0,secondValue=0;

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
           productId:0,
           firstList:[],
           secondList:[],
           thirdList:[],
           initSeletedValue:'',
           initCategoryId:0,
           pid:0,
        };
   }

   init(){
    this.initCategory();
    this.initProduct();
   }

   async initCategory(){
      var payload ={
        pid:0,
      };
      var that = this;
      const response = await this.props.dispatchCategoryList(payload);
      var list = response.content;
      console.log('response list',list.subProjectNames);
      var firstList = [],secondList = [],thirdList = [];
      const parentId = list === null? 0 :list.pid;
      this.setState({
        pid:parentId
      });
      list.subProjectNames.map((category,index)=>{
        firstList.push(category);
      });
      this.setState({
        firstList:firstList,
        secondList:[],
        thirdList:[]
      });
      this.setState({
        multiSelector:[firstList,secondList,thirdList]
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
      const {productName,productPrice,activePrice,files,preAmount,initSeletedValue,mulitSelectorValues,location,productId,pid} = this.state;

      if(initSeletedValue === ''){
        this.handleAlert('error','请选择分类');
        return;
      }
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
        "projectId": pid,
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

    async handleMulitChange(e){

      const {firstList,secondList,thirdList,multiSelector,pid} = this.state;
      console.log('pid',pid);
      console.log('multiSelector[0][e.detail.value[0]]',multiSelector[0][e.detail.value[0]]);
      var listAll = await this.getCategroyList(multiSelector[0][e.detail.value[0]],0);
      console.log('listall',listAll);

      if(firstList.length>0){
        this.setState({
          mulitSelectorValues: e.detail.value,
          isOpened:false,
          initSeletedValue:multiSelector[0][e.detail.value[0]]
        })
      }
      if(secondList.length>0){
        this.setState({
          mulitSelectorValues: e.detail.value,
          isOpened:false,
          initSeletedValue:multiSelector[1][e.detail.value[1]]
        })
      }
      if(thirdList.length>0){
        this.setState({
          mulitSelectorValues: e.detail.value,
          isOpened:false,
          initSeletedValue:multiSelector[2][e.detail.value[2]]
        })
      }
    }

    async handleColumnChange(e){
      var list = null;
      if(e.detail.column===0){
        const {multiSelector,mulitSelectorValues,pid} = this.state;
        const selectedValue = multiSelector[e.detail.column][e.detail.value];
        var listAll = await this.getCategroyList(selectedValue,0);
        console.log('pid',pid);
        console.log('selectedValue',selectedValue);
        console.log('e.detail.column',e.detail.column);
        var firsts=[],seconds =[],thirds=[];
        const {firstList,secondList,thirdList} = this.state;
        list = listAll.content === null? [] : listAll.content.subProjectNames;
        console.log('listAll.content.pid',listAll.content.pid);
        console.log('columnIndex',columnIndex);
        firstValue = listAll.content === null? 0 :listAll.content.pid;
        // this.setState({
        //   pid:parentId
        // });
        // console.log('parentId',parentId);
        // columnIndex = e.detail.column;
        if(list && list.length>0){
          list.map((item)=>{
            seconds.push(item);
          });
          thirds = [];
          this.setState({
            secondList:seconds,
            thirdList:thirds
          });
        }
        else{
          seconds = [];
          thirds = [];
          this.setState({
            secondList:[],
            thirdList:thirds
          });
        }
        this.setState({
          pid:listAll.content.pid,
          multiSelector:[firstList,seconds,thirdList]
        });
      }
      if(e.detail.column === 1){
        const {multiSelector,mulitSelectorValues,pid} = this.state;
        const selectedValue = multiSelector[e.detail.column][e.detail.value];
        var listAll = await this.getCategroyList(selectedValue,firstValue);
        console.log('pid',pid);
        console.log('selectedValue',selectedValue);
        console.log('e.detail.column',e.detail.column);
        var firsts=[],seconds =[],thirds=[];
        const {firstList,secondList,thirdList} = this.state;
        list = listAll.content === null? [] : listAll.content.subProjectNames;
        secondValue = listAll.content === null? 0 :listAll.content.pid;
        console.log('listAll.content.pid',listAll.content.pid);
        console.log('columnIndex',columnIndex);
        if(list && list.length>0){
          list.map((item)=>{
            thirds.push(item);
          })
          this.setState({
            thirdList:thirds
          });
        }
        else{
          thirds = [];
          this.setState({
            thirdList:[]
          });
        }
        this.setState({
          pid:listAll.content.pid,
          multiSelector:[firstList,secondList,thirds]
        });
      }
      if(e.detail.column === 2){
        const {multiSelector,mulitSelectorValues,pid} = this.state;
        const selectedValue = multiSelector[e.detail.column][e.detail.value];
        var listAll = await this.getCategroyList(selectedValue,secondValue);
        console.log('pid',pid);
        console.log('selectedValue',selectedValue);
        console.log('e.detail.column',e.detail.column);
        var firsts=[],seconds =[],thirds=[];
        list = listAll.content === null? [] : listAll.content.subProjectNames;
        console.log('listAll.content.pid',listAll.content.pid);
        console.log('columnIndex',columnIndex);
        this.setState({
          pid:listAll.content.pid,
        });
      }
      // console.log('listAll.content.subProjectNames',listAll);
      // switch(e.detail.column){
      //   case 0:
            
      //     break;
      //   case 1:
      //     console.log('list.content',list)
           
      //     break;
      //   case 2:
      //     break;
      // }
    }

    async getCategroyList(name,pid){
      var payload = {
        name:name,
        pid:pid
      };
      const result  = await this.props.dispatchCategoryList(payload);
      return result;
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
              preAmount:data.advance,
              initSeletedValue:data.projectName,
              pid:data.projectId
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
          files,toastText,isOpened,status,duration,initSeletedValue} = this.state;

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
                    <Picker mode='multiSelector' range={multiSelector} onColumnChange={this.handleColumnChange} value={mulitSelectorValues} onChange={this.handleMulitChange}>
                      <View className='demo-list-item'>
                        <View className='demo-list-item__label'>分类</View>
                        <View className='demo-list-item__value'>{ initSeletedValue}</View>
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