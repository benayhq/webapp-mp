import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss';
import CheckBox from './../../components/checkbox';
import * as actions from './store/actionCreators';
import {getAuthInfo} from './../../utils/storage';
import {connect} from '@tarojs/redux';

@connect(state=>state.product,actions)
class Index extends Component{
  config = {
    navigationBarTitleText: '选择往期产品'
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
      pageSize:10
    };

    var responseList = [];
    const resultProductList = await this.props.dispatchProductList(payload);

    resultProductList.content.map((item)=>{
      // dev/product/1/PRODUCT_1559989778724.png'
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

    console.log('productList222eeee',this.state.newFilterList);
    return;


    // .then((res)=>{
    //   if(res && res.result === "success"){
    //     res.content.map((item,index)=>{
    //       response.push({
    //         value: item.id,
    //         label: item.projectName,
    //         data:{
    //           price:item.price,
    //           marketPrice:item.discountPrice,
    //           prePrice:item.advance,
    //           imgUrl:item.location,
    //           desc: item.name,
    //         },
    //         disabled: false
    //       });
    //     }) 
    //   }
    //   console.log('response',response);
    // });

    // this.setState({
    //   productList:response
    // })
  }
  
  handleSaveItem(){
    console.log('checkedList',);
    var params = this.state.checkedList;
    Taro.navigateTo({
            url:'/pages/active/publish/index?ids='+params.join(',')
    })
  }

  render () {
    const {newFilterList} = this.state;
    return (
      <View className="mp-product">
                <CheckBox
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