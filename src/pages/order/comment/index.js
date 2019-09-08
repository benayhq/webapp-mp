import Taro,{Component} from '@tarojs/taro';
import { View } from '@tarojs/components'
import { AtTextarea,AtRate,AtImagePicker,AtButton,AtMessage } from 'taro-ui';
import './index.scss';
var uploadImage = require('./../../../utils/uploadFile.js');
var util = require('../../../utils/util.js');
import {connect} from '@tarojs/redux';
import * as actions from '../store/actionCreators';
var imgArraySrc = [];

@connect(state=>state,actions)
export default class Comment extends Taro.Component{
    config = {
        navigationBarTitleText: '发表评价'
    }

    constructor(){
        super(...arguments);
        this.state = {
            commentValue: '',
            envValue:0,
            serveValue:0,
            profValue:0,
            effectValue:0,
            files: [],
            location:[]
        };
    }



    handleAlert(type,message){
      Taro.atMessage({
        'message': message,
        'type': type
      });
    }

    onChange(files){
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
                      console.log("======上传失败======", result);
                      wx.hideLoading()
                    }
                  )
              });
         }
    }

    onFail (mes) {
        console.log(mes)
    }

    onImageClick (index, file) {
        console.log(index, file);
    }

    handleChange(event){
        this.setState({
          commentValue: event.target.value
        })
    }

    handleEnvChange(value){
        this.setState({
            envValue: value
        })
    }

    handleServeChange(value){
        this.setState({
            serveValue: value
          })
    }

    handleProfChange(value){
        this.setState({
            profValue: value
          }) 
    }

    handleEffectChange(value){
        this.setState({
            effectValue: value
        });
    }

    async getImgUrl(location){
        var payload = {
          location:location
        };
        const result = await this.props.dispatchCreateOrderDownLoadUrl(payload);
        return result.content;
    }

    handleComment(){
        const {commentValue,envValue,serveValue,profValue,effectValue,files,location} = this.state;

        if(envValue === 0 || serveValue === 0 || profValue ===0 || effectValue === 0){
          this.handleAlert('error','请填写评分');
          return;
        }

        if(commentValue === ''){
          this.handleAlert('error','请发表你的想法');
          return;
        }

        if(files.length === 0){
          this.handleAlert('error','请上传图片');
          return;
        }

        var payload = {
            docLocations:imgArraySrc,
            effectStar:effectValue,
            environmentStar:envValue,
            professionStar:profValue,
            reservationId:this.$router.params.orderId,
            serviceStar:serveValue,
            message:commentValue
        };
        
        imgArraySrc = [];
     
        this.props.dispatchCreateComment(payload).then((response)=>{
           Taro.navigateTo({
              url:`./../../../pages/order/index?status=&index=0`
           })
        });
    }

    uploadImage(){
      
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
                    documentType:'ACTIVITY',
                    fileName:'ACTIVITY.png'
                  };
    
                  that.props.dispatchUploadConfig(payload).then((response)=>{
                    console.log('dispatchUploadConfig',response.content.location);
                      //上传图片
                      //图片路径可自行修改
                      uploadImage(file, response.content.location,
                        function (result) {
                          that.setState({
                            location:[result]
                          });

                          console.log("======上传成功图片地址为：", result);

                          that.getImgUrl(result).then((response)=>{
                              console.log('response',response);
                          })
                          wx.hideLoading();
                        }, function (result) {
                          console.log("======上传失败======", result);
                          wx.hideLoading()
                        }
                      )
                  });
              }
            }
        })
    }

    render(){
        const {envValue,commentValue,serveValue,effectValue,profValue} = this.state;

        return (
            <View className="mp-order-comment">
              <AtMessage/>
                <View className="serve">
                    <View className="environ">
                        <Text>环境:</Text>
                        <AtRate
                        max="5"
                        value={envValue} 
                        onChange={this.handleEnvChange.bind(this)} />
                    </View>

                    <View className="environ">
                        <Text>服务:</Text>
                        <AtRate
                        max="5"
                        value={serveValue} 
                        onChange={this.handleServeChange.bind(this)} />
                    </View>

                    <View className="environ">
                        <Text className="profession">专业:</Text>
                        <AtRate
                        max="5"
                        value={profValue} 
                        onChange={this.handleProfChange.bind(this)} />
                    </View>

                    <View className="environ">
                        <Text>效果:</Text>
                        <AtRate
                        max="5"
                        value={effectValue} 
                        onChange={this.handleEffectChange.bind(this)} />
                    </View>
                </View>
                <View className="space"></View>
                <View className="comment">
                    <AtTextarea
                        height={400}
                        value={commentValue}
                        onChange={this.handleChange.bind(this)}
                        maxLength={300}
                        placeholder='亲，您对此次服务满意吗？您的评价会帮助我们选择更好的服务！'
                    />
                </View>
                <View className="upload-map">
                    <AtImagePicker
                        multiple
                        mode='top'
                        onFail={this.onFail.bind(this)}
                        onImageClick={this.onImageClick.bind(this)}
                        files={this.state.files}
                        onChange={this.onChange.bind(this)}
                    />
                </View>
                <View className="submit">
                    <AtButton type='primary' onClick={this.handleComment.bind(this)}>发表评论</AtButton>
                </View>
            </View>
        )
    }
}