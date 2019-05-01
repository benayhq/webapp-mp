import Taro, { Component } from '@tarojs/taro'
import { View, Text,Button } from '@tarojs/components'
import {connect} from '@tarojs/redux';
import {AtButton,AtInput,AtForm,AtImagePicker} from 'taro-ui';
import './edit.scss';

class EditProduct extends Component{

    config = {
        navigationBarTitleText: '编辑产品'
    }

    constructor(){
        this.state = {
            files: [{
                url: 'https://storage.360buyimg.com/mtd/home/111543234387022.jpg',
              },
              {
                url: 'https://storage.360buyimg.com/mtd/home/111543234387022.jpg',
              },
              {
                url: 'https://storage.360buyimg.com/mtd/home/111543234387022.jpg',
              }]
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

    render(){
        return (
            <View className="mp-edit-product">
                <AtForm>
                <AtInput
                    name='value1'
                    title='分类'
                    type='text'
                    placeholder='请选择产品类型'
                    value={this.state.value1}
                    onChange={this.handleChange.bind(this)}
                />
                <AtInput
                    name='value2'
                    title='名称'
                    type='number'
                    placeholder='产品名称品牌规格信息'
                    value={this.state.value2}
                    onChange={this.handleChange.bind(this)}
                />
                <AtInput
                    name='value3'
                    title='价格'
                    type='text'
                    placeholder='请输入产品原价'
                    value={this.state.value3}
                    onChange={this.handleChange.bind(this)}
                />
                <AtInput
                    name='value4'
                    title='活动价'
                    type='text'
                    placeholder='请输入产品活动价格'
                    value={this.state.value3}
                    onChange={this.handleChange.bind(this)}
                />
                 <AtImagePicker
                    files={this.state.files}
                    onChange={this.onChange.bind(this)}
                />
                  <AtInput
                    name='value3'
                    title='预定金'
                    type='text'
                    placeholder='请输入预定金'
                    value={this.state.value3}
                    onChange={this.handleChange.bind(this)}
                />
                </AtForm>

                <View className="mp-edit-product__warn-tips">
                    温馨提醒：
                </View>
                <View className="mp-edit-product__warn-info">
                预定金优先由平台代为收取,客户当面核销后转入您的微信余额。
                </View>
            </View>
        )
    }
}
export default EditProduct;