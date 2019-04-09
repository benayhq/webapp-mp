import {Component} from '@tarojs/taro';
import { View } from '@tarojs/components'
import './index.scss';
import { AtButton } from 'taro-ui';
import Modal from './../../../components/modal/';

export default class ToolBar extends Component{
    constructor(){
        super(...arguments);
        this.state = {
            modal:{
                isOpened:false,
                title:'标题',
                content:'内容',
                cancelText:'取消',
                confirmText:'确认',
            }
        }
    }

    handleOrderClick(event){
        var self = this;
        switch(event){
            case "Cancel":
            self.setState({
                modal:{
                    isOpened:true
                }
            },function(){
                console.log('this.state.modal.isOpened',this.state.modal.isOpened);
            })
            break;
        }
    }

    onClose(){
        console.log('onClose');
    }

    onConfirm(){
        console.log('onConfirm');
    }
    
    render(){
        const {toolBar} = this.props;

        if(toolBar == null){
            return (<View></View>);
        }

        if(toolBar[0] && toolBar[1]){
            return (
                <View className="toolbar">
                      <AtButton onClick={this.handleOrderClick.bind(this,toolBar[0].event)} type='primary' size='small'>{toolBar[0].text}</AtButton> 
                      <Text className="margin40"></Text>
                      <AtButton onClick={toolBar[1].event} type='primary' size='small'>{toolBar[1].text}</AtButton> 
                      <Text className="margin40"></Text>
                      <Modal 
                        title={this.modal.title} 
                        content={this.modal.content} 
                        isOpened={this.modal.isOpened}
                        cancelText={this.modal.cancelText}
                        confirmText={this.modal.confirmText}
                        onClose={this.onClose.bind(this)}
                        onConfirm={this.onConfirm.bind(this)}/>
                </View>
            )
        }
        
        if(toolBar[0]){
            return (
                <View className="toolbar">
                      <AtButton onClick={toolBar[0].event} type='primary' size='small'>{toolBar[0].text}</AtButton> 
                      <Text className="margin40"></Text>
                </View>
            )
        }

        if(toolBar[1]){
            return (
                <View className="toolbar">
                      <AtButton onClick={toolBar[1].event} type='primary' size='small'>{toolBar[1].text}</AtButton> 
                      <Text className="margin40"></Text>
                </View>
            )
        }

    }
}