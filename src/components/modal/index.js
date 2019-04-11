import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import _isFunction from 'lodash/isFunction'
import classNames from 'classnames'
import './index.scss'
import PropTypes from 'prop-types'

export default class Modal extends Component {
  constructor (props) {
    super(props);
    this.state = {
      _isOpened:this.props.isOpened
    }
  }

  componentWillReceiveProps(nextProps){
    const {_isOpened} = this.state;

    if(_isOpened != nextProps.isOpened){
      this.setState({
        _isOpened:nextProps.isOpened
      });
    }
  }

  onClose = (e) =>{
    if(this.props.closeOnClickOverlay){
      this.onCancel();
    }
  }

  onCancel = (e) =>{
    this.setState({
      _isOpened:false
    },
    this.props.onCancel())
  }

  onConfirm = (e) =>{
    if(_isFunction(this.props.onConfirm)){
      this.props.onConfirm();
    }
  }

  render () {
    const {_isOpened} = this.state;
    const {content,title,cancelText,confirmText} = this.props;

    const rootClass = classNames('mp-modal',{
      'mp-modal--active':_isOpened
    });

    const isRenderFooter = cancelText || confirmText;

    return (
      <View className={rootClass}>
            <View className="mp-modal__overlay" onClick={this.onClose}> </View>
            <View className="mp-modal__container">
               {
                 title && <View className="mp-modal__title">{title}</View>
               }
               {
                 content && <View className="mp-modal__content">{content}</View>
               }
               {
                isRenderFooter && (
                    <View  className="mp-modal__footer">
                                    <View className="mp-modal__action">
                                    {
                                      cancelText && <Button onClick={this.onCancel}>{cancelText}</Button>
                                    }
                                    {
                                      confirmText && <Button onClick={this.onConfirm}>{confirmText}</Button>
                                    }
                                  </View>
                                  </View>
                )
               } 
            </View>
      </View>
    )
  }
}

Modal.defaultProps = {
  closeOnClickOverlay:true
}

Modal.propTypes = {
  title:PropTypes.string,
  isOpened:PropTypes.bool,
  onClose:PropTypes.func,
  onCancel:PropTypes.func,
  onConfirm:PropTypes.func,
  cancelText:PropTypes.string,
  confirmText:PropTypes.string
}

