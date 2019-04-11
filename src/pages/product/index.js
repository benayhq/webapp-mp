import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import ProductItem from '../../components/product/index';
import './index.scss';

export default class Index extends Component{
  config = {
    navigationBarTitleText: '我的产品'
  }

  constructor(){
      super(...arguments);
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }
  
  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View>
        <ProductItem/>
      </View>
    )
  }
}
