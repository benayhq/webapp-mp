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
                isOpened:true,
                title:'标题',
                content:'内容',
                cancelText:'取消',
                confirmText:'确认',
                closeOnClickOverlay:false
            }
        }
    }

    handleOrderClick(event){
        var self = this;
        switch(event){
            case "Cancel":
            self.setState({
                modal:{
                    isOpened:true,
                    title:'标题',
                    content:'内容',
                    cancelText:'取消',
                    confirmText:'确认',
                    closeOnClickOverlay:true
                }
            })
            break;
        }
    }

    onClose(e){
        console.log('onClose parent',e);
    }

    onConfirm(){
        console.log('callback onConfirm');
        this.onCancel();
    }

    toggleVisible = () => {
        console.log('onConfirm');
    }

    onCancel(){
        this.setState({
            modal:{
                isOpened:false
            }
        })
        console.log('onCancel');
    }
    
    render(){
        const {toolBar} = this.props;
        console.log("toolBart",toolBar);

        if(toolBar == null){
            return (<View>
            </View>);
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
                        closeOnClickOverlay={this.modal.closeOnClickOverlay}
                        onClose={this.onClose}
                        onConfirm={this.onConfirm}
                        onCancel={this.onCancel}
                        />
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