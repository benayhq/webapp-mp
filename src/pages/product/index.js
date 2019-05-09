import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import {connect} from '@tarojs/redux';
import * as actions from './../../actions/product';
import './index.scss';
import { AtCheckbox,AtButton } from 'taro-ui'
import CheckBox from './../../components/checkbox';

@connect(state=>state.productList,actions)
class Index extends Component{
  config = {
    navigationBarTitleText: '选择往期产品'
  }

  constructor(){
      super(...arguments);
      this.state = {
        checkedList: ['list2']
      };

      this.checkboxOption = [{
          value: 'list1',
          label: 'iPhone X',
          data:{
            price:3000,
            marketPrice:3000,
            prePrice:200,
            imgUrl:'https://storage.360buyimg.com/mtd/home/111543234387022.jpg',
            desc: '【玻尿酸瘦脸针】瑞典进口 可打嘟嘟唇微笑'
          },
          disabled: false
        },{
          value: 'list2',
          label: 'HUAWEI P20',
          data:{
            price:3000,
            marketPrice:3000,
            prePrice:200,
            imgUrl:'https://storage.360buyimg.com/mtd/home/111543234387022.jpg',
            desc: '【玻尿酸瘦脸针】瑞典进口 可打嘟嘟唇微笑'
          },
          disabled: false
        },{
          value: 'list3',
          label: 'OPPO Find X',
          data:{
            price:3000,
            marketPrice:3000,
            prePrice:200,
            imgUrl:'https://storage.360buyimg.com/mtd/home/111543234387022.jpg',
            desc: '【玻尿酸瘦脸针】瑞典进口 可打嘟嘟唇微笑'
          },
          disabled: false
        },{
          value: 'list4',
          label: 'vivo NEX',
          data:{
            price:3000,
            marketPrice:3000,
            prePrice:200,
            imgUrl:'https://storage.360buyimg.com/mtd/home/111543234387022.jpg',
            desc: '【玻尿酸瘦脸针】瑞典进口 可打嘟嘟唇微笑'
          },
          disabled: false
      }];
  }

  handleChange (value) {
    console.log('value',value);
    this.setState({
      checkedList: value
    })
  }

  componentDidMount(){
    this.init();
  }

  init(){
    this.initProductList();
  }

  initProductList(){
    var payload = {
      id:'222'
    };
    this.props.GetProdcutList(payload).then((res)=>{
        console.log("res",res);
    });
    console.log("initProductList",);
  }

  render () {


    return (
      <View className="mp-product">
                <CheckBox
                  options={this.checkboxOption}
                  selectedList={this.state.checkedList}
                  onChange={this.handleChange.bind(this)}

                />
                <View className="mp-product__save">
                   <View>保  存</View>
                </View>
      </View>
    )
  }
}

export default Index;