import Taro,{Component} from '@tarojs/taro';
import {View,Picker} from '@tarojs/components';
import { AtInput, AtForm ,AtImagePicker,AtButton,AtMessage} from 'taro-ui';
import './edit.scss';
import * as actions from '../store/actionCreators';
import {connect} from '@tarojs/redux';
import _ from 'lodash';
var imgArraySrc = [];
var util = require('../../../utils/util.js');
var uploadImage = require('./../../../utils/uploadFile.js');

@connect(state=>state.user,actions)
 class Edit extends Component{
    config = {
        navigationBarTitleText: '个人信息'
    }

    constructor(){
        super(...arguments);
        this.state = {
            selector: ['美国', '中国', '巴西', '日本'],
            selectorChecked: '美国',
            timeSel: '12:01',
            dateSel: '2018-04-22',
            files: [],
            nickName:'',
            userName:'',
            cellPhone:'',
            weixin:'',
            serviceAddress:'',
            address:'',
            qrCode:''
        };
    }

    handleUploadChange(files) {
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

    onFail (mes) {
        console.log(mes)
    }

    onImageClick (index, file) {
        console.log(index, file)
    }

    async getAuthInfo(){
        const result = await Taro.getStorage({key:'userinfo'}).then(res => {return res.data});
        return result;
    }
    
    handleAlert = (type,message) => {
        Taro.atMessage({
          'message': message,
          'type': type
        });
    }

    handleNickNameChange(nickName){
        this.setState({
            nickName:nickName
        });
        return nickName;
    }

    handleUserNameChange(userName){
        this.setState({
            userName:userName
        });
        return userName;
    }

    handleMobileChange(cellPhone){
        this.setState({
            cellPhone:cellPhone
        })
        return cellPhone;
    }

    handleWeChatChange(weixin){
        this.setState({
            weixin:weixin
        });
        return weixin;
    }

    handleServiceAddressChange(serviceAddress){
        this.setState({
            serviceAddress:serviceAddress
        });
        return serviceAddress;
    }

    handleAddressChange(address){
        this.setState({
            address:address
        });
        return address;
    }

    handleSaveUserInfo = () =>{
        const {nickName,cellPhone,weixin,serviceAddress
        ,address} = this.state;

        if(_.isEmpty(nickName)){
            this.handleAlert('error','呢称不能为空');
        }

        if(_.isEmpty(cellPhone)){
            this.handleAlert('error','手机号不能为空');
        }

        if(_.isEmpty(weixin)){
            this.handleAlert('error','微信号不能为空');
        }

        if(_.isEmpty(serviceAddress)){
            this.handleAlert('error','服务地址不能为空');
        }

        if(imgArraySrc.length === 0){
            this.handleAlert('error','请上传图片');
        }
        this.getAuthInfo().then(userinfo=>{
            // console.log('res',userinfo);

            var payload = {
                nickname:nickName,
                openId:userinfo.openId,
                wechatId:weixin,
                cellphone:cellPhone,
                address:address,
                wechatQrcode:imgArraySrc[0],
                areaCode:'eee',
                id:userinfo.id
            };
            
            this.props.UpdateUserInfo(payload).then(res=>{
                console.log('response',res);
            });
        });
    }

    render(){
        const {nickName,userName,cellPhone,weixin,serviceAddress,address,qrCode} = this.state;

        return (
            <View className="mp-edit-user">
                    <AtMessage/>
                <AtForm>
                    <AtInput
                        name='value1'
                        title='呢称'
                        type='text'
                        placeholder='Shawn'
                        value={nickName}
                        onChange={this.handleNickNameChange.bind(this)}
                    />
                        <AtInput
                            name='value1'
                            title='姓名'
                            type='text'
                            placeholder='(选填)'
                            value={userName}
                            onChange={this.handleUserNameChange.bind(this)}
                        />
                      <AtInput
                        name='value6'
                        title='手机号码'
                        type='phone'
                        placeholder='请输入常用手机号'
                        value={cellPhone}
                        onChange={this.handleMobileChange.bind(this)}
                    />
                    <AtInput
                        name='value1'
                        title='微信'
                        type='text'
                        placeholder='客户通过微信与您联系'
                        value={weixin}
                        onChange={this.handleWeChatChange.bind(this)}
                    />
                    <AtInput
                        name='value1'
                        title='服务地址'
                        type='text'
                        placeholder='服务地址'
                        value={serviceAddress}
                        onChange={this.handleServiceAddressChange.bind(this)}
                    />
                    <AtInput 
                        name='value1'
                        title='地址'
                        type='text'
                        placeholder='(选填)'
                        value={address}
                        onChange={this.handleAddressChange.bind(this)}
                    />
                    <View className="qrCode">
                        <Text className="label">二维码</Text>
                    </View>
                    <AtImagePicker
                            className="uploadPicker"
                            files={this.state.files}
                            onChange={this.handleUploadChange.bind(this)}
                    />
                    <View className="user-submit">
                            <AtButton type='primary' onClick={this.handleSaveUserInfo.bind(this)}>保存</AtButton>
                    </View>
                </AtForm>
            </View>
        );
    }
}

export default Edit;