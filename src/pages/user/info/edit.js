import {Component} from '@tarojs/taro';
import {View,Picker} from '@tarojs/components';
import { AtInput, AtForm ,AtImagePicker} from 'taro-ui';
import './edit.scss';

export default class Edit extends Component{
    constructor(){
        super(...arguments);
        this.state = {
            selector: ['美国', '中国', '巴西', '日本'],
            selectorChecked: '美国',
            timeSel: '12:01',
            dateSel: '2018-04-22',
            files: [
             ]
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


    config = {
        navigationBarTitleText: '个人信息'
    }

    render(){
        return (
            <View className="mp-edit-user">
                <AtForm>
                    <AtInput
                        name='value1'
                        title='呢称'
                        type='text'
                        placeholder='Shawn'
                        value={this.state.value1}
                        onChange={this.handleChange.bind(this)}
                    />
                    <AtInput
                        name='value1'
                        title='姓名'
                        type='text'
                        placeholder='(选填)'
                        value={this.state.value1}
                        onChange={this.handleChange.bind(this)}
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
                </AtForm>
            </View>
        );
    }
}
