import {Component} from '@tarojs/taro';
import { View } from '@tarojs/components'
import './index.scss';
import { AtButton } from 'taro-ui';

export default class ToolBar extends Component{
    constructor(){
        super(...arguments);
    }
    
    render(){
        const {toolBar} = this.props;
        
        if(toolBar == null){
            return (<View></View>);
        }

        if(toolBar[0] && toolBar[1]){
            return (
                <View className="toolbar">
                      <AtButton onClick={toolBar[0].event} type='primary' size='small'>{toolBar[0].text}</AtButton> 
                      <Text className="margin40"></Text>
                      <AtButton onClick={toolBar[1].event} type='primary' size='small'>{toolBar[1].text}</AtButton> 
                      <Text className="margin40"></Text>
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