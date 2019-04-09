import {Component} from '@tarojs/taro';
import {View} from '@tarojs/components';
import _isFunction from 'lodash/isFunction';
import './index.scss';

export default class Modal extends Component{

    constructor(){
        super(...arguments);
        const {isOpened} = this.props;

        this.state = {
            rootClass: isOpened ? 'mp-modal' : 'mp-modal-close'
        };
    }

    handleClose(){
        this.setState({
            rootClass:'mp-modal-close'
        });

        if(_isFunction(this.props.onClose)){
            this.props.onClose();
        }
    }

    handleCancelClick(){
        if(_isFunction(this.props.onCancel())){
            console.log('handleCancelClick');
        }
    }

    handleConfrimClick(){
        if(_isFunction(this.props.onConfirm())){
            console.log('handleConfrimClick');
        }
    }

    render(){

        return (
            <View className={this.state.rootClass} onClick={this.handleClose.bind(this)}>
                <View className="mp-modal__wrapper">
                    <View className="mp-modal__title">{this.props.title}</View>
                    <View className="mp-modal__content">{this.props.content}</View>
                    <View className="mp-modal__footer">
                        <View className="cancel" onClick={this.handleCancelClick.bind(this)}>{this.props.cancelText}</View>
                        <View className="confrim" onClick={this.handleConfrimClick.bind(this)}>{this.props.confirmText}</View>
                    </View>
                </View>
            </View>
        )
    }
}