import Taro,{Component} from '@tarojs/taro';
import {View,Picker} from '@tarojs/components';
import { AtInput, AtForm ,AtImagePicker,AtButton,AtMessage} from 'taro-ui';
import './edit.scss';
import * as actions from '../store/actionCreators';
import {connect} from '@tarojs/redux';
import _ from 'lodash';

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

    handleSaveUserInfo = () =>{
        const {nickName} = this.state;

        if(_.isEmpty(nickName)){
            this.handleAlert('error','呢称不能为空');
        }

        return;

        this.getAuthInfo().then(userinfo=>{
            console.log('res',userinfo);
            var payload = {
                nickname:'eee',
                openId:'eee',
                wechatId:'eee',
                cellphone:'e',
                address:'eee',
                wechatQrcode:'eee',
                address:'eee',
                id:userinfo.id
            };
            this.props.UpdateUserInfo(payload).then(res=>{
                console.log('response',res);
            });
        });
        return;
        console.log('handleSaveUserInfo');
    }

    render(){
        const {nickName} = this.state;

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
                        value={this.state.value6}
                        onChange={this.handleChange.bind(this)}
                    />
                    <AtInput
                        name='value1'
                        title='微信'
                        type='text'
                        placeholder='客户通过微信与您联系'
                        value={this.state.value1}
                        onChange={this.handleChange.bind(this)}
                    />
                    <AtInput
                        name='value1'
                        title='服务地址'
                        type='text'
                        placeholder='服务地址'
                        value={this.state.value1}
                        onChange={this.handleChange.bind(this)}
                    />
                    <AtInput 
                        name='value1'
                        title='地址'
                        type='text'
                        placeholder='(选填)'
                        value={this.state.value1}
                        onChange={this.handleChange.bind(this)}
                    />
                    <View className="qrCode">
                        <Text className="label">二维码</Text>
                    </View>
                    <AtImagePicker
                            className="uploadPicker"
                            files={this.state.files}
                            onChange={this.onChange.bind(this)}
                    />
                    <AtButton type='primary' onClick={this.handleSaveUserInfo.bind(this)}>保存</AtButton>
                </AtForm>
            </View>
        );
    }
}


export default Edit;