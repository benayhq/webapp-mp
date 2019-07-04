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
    // this.props.dispatchSelectProduct(this.state.checkedList);
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