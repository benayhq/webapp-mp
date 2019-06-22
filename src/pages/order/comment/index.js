import {Component} from '@tarojs/taro';
import { View } from '@tarojs/components'
import { AtTextarea,AtRate,AtImagePicker,AtButton } from 'taro-ui';
import './index.scss';

export default class Comment extends Component{
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
            files: []
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

    handleChange (event) {
        this.setState({
          value: event.target.value
        })
    }

    handleEnvChange(event){
        this.setState({
            envValue: event.target.value
          })
    }


    handleServeChange(event){
        this.setState({
            serveValue: event.target.value
          })
    }

    handleProfChange(event){
        this.setState({
            profValue: event.target.value
          }) 
    }

    handleEffectChange(event){
        this.setState({
            effectValue: event.target.value
          }) 
    }

    render(){

        const {rateValue,commentValue} = this.state;

        return (
            <View className="mp-order-comment">
                <View className="product">333</View>
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
                        value={commentValue}
                        onChange={this.handleChange.bind(this)}
                        maxLength={500}
                        placeholder='发表你的想法...'
                    />
                </View>
                <View className="upload-map">
                     <AtImagePicker
                        files={this.state.files}
                        onChange={this.onChange.bind(this)}
                    />
                </View>
                <View className="submit">
                    <AtButton type='primary'>发表评论</AtButton>
                </View>
            </View>
        )
    }
}