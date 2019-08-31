import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss';
import CheckBox from './../../components/checkbox';
import * as actions from './store/actionCreators';
import {getAuthInfo} from './../../utils/storage';
import {connect} from '@tarojs/redux';
import { AtMessage } from "taro-ui"

@connect(state=>state.product,actions)
class Index extends Component{
  config = {
    navigationBarTitleText: '产品列表'
  }

  constructor(){
      super(...arguments);
      this.state = {
        checkedList: [],
        productList:[],
        newFilterList:[]
      };
  }

  handleChange (value) {
    this.setState({
      checkedList: value
    })
  }

  componentDidMount(){
    this.init();
  }

  init(){
    this.initProductList();
    this.getImgUrl("");
  }

  async getImgUrl(location){
    var payload = {
      location:location
    };
    const result = await this.props.dispatchDownLoadUrl(payload);
    return result.content;
  }

  async initProductList(){
    var that = this;
    var payload = {
      pageNo:0,
      pageSize:1000
    };
    
    var responseList = [];
    const resultProductList = await this.props.dispatchProductList(payload);

    console.log('resultProductList',resultProductList);
    resultProductList.content.map((item)=>{
      this.getImgUrl(item.location)
      .then(response=>{
        responseList.push({
            value: item.id,
            label: item.projectName,
            data:{
              price:item.price,
              marketPrice:item.discountPrice,
              prePrice:item.advance,
              imgUrl:response,
              desc: item.name,
            },
            disabled: false
        });
        if(responseList.length === resultProductList.content.length){
          that.setState({
            newFilterList:responseList
          })
        }
      });
    });
  }
  
  handleSaveItem(){
    var params = this.state.checkedList;
    if(params.length>0){
      Taro.navigateTo({
        url:'/pages/active/publish/index?ids='+params.join(',')
      });
    }
    else{
      Taro.atMessage({
        'message': '请选择产品',
        'type': 'error',
      })
    }
  }

  handleDelItem(id){
    let payload = {
      productId:id
    };
    this.props.dispatchDeleteProduct(payload).then((response)=>{
      this.init();
    });
  }

  render () {
    const {newFilterList} = this.state;
    
    return (
      <View className="mp-product">
            <AtMessage/>
            <CheckBox
              onDelete={this.handleDelItem.bind(this)}
              options={newFilterList}
              selectedList={this.state.checkedList}
              onChange={this.handleChange.bind(this)}
            />
            <View className="mp-product__save">
                <View onClick={this.handleSaveItem}>保  存</View>
            </View>
      </View>
    )
  }

}

export default Index;