import Taro, { Component } from '@tarojs/taro'

export const handleAlert = (type,message) => {
    Taro.atMessage({
      'message': message,
      'type': type
    });
}
