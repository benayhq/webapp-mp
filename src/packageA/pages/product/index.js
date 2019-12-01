import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss';
import CheckBox from './../../components/checkbox';
import * as actions from './store/actionCreators';
import {getAuthInfo} from './../../utils/storage';
import {connect} from '@tarojs/redux';
import { AtMessage } from "taro-ui"
import {getWindowHeight} from './../../utils/style'

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
        newFilterList:[],
        productIds:[]
      };
  }

  componentWillMount(){
    const productIds = this.$router.params.productIds;
    console.log('productIds',productIds);
    this.setState({
      checkedList:productIds
    })
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
      pageSize:1000
    };
    var responseList = [];
    const {productIds} = this.state;
    console.log('productIds',productIds);
    var historys = [],that = this,promises=[];
    const response = await this.props.dispatchProductList(payload);

    if(response.content){
      response.content.map((item,index)=>{
        const promise = that.getImgUrl(item.location)
        promises.push(promise);
        historys.push(item);
      });
    }
    Promise.all(promises).then((imageResponse)=>{
      console.log('imageResponse',imageResponse);
        historys.map((item,key)=>{
          responseList.push({
            value: item.id,
            label: item.projectName,
            data:{
              price:item.price,
              marketPrice:item.discountPrice,
              prePrice:item.advance,
              imgUrl:imageResponse[key],
              desc: item.name,
            },
            disabled: false
          });
        });
    }).then((response)=>{
        that.setState({
           newFilterList:responseList
        });
    })
  }
  
  handleSaveItem(){
    var params = this.state.checkedList;
    console.log('this.state.checkedList',this.state.checkedList);
    if(params.length>0){
      Taro.navigateTo({
        url:'/pages/active/publish/index?ids='+params
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

  getWindowHeight(showTabBar = true,newFilterList){
    const info = Taro.getSystemInfoSync();
    const { windowHeight}  = info;
    return `${windowHeight-90}px`
  }

  render () {
    const {newFilterList,productIds} = this.state;
    
    return (
      <View>
        <ScrollView scrollY style={{ height: this.getWindowHeight(true),'margin-bottom':'190px'}}> 
              <AtMessage/>
              <CheckBox
                productIds={productIds}
                onDelete={this.handleDelItem.bind(this)}
                options={newFilterList}
                selectedList={this.state.checkedList}
                onChange={this.handleChange.bind(this)}
              />
        </ScrollView>
        <View className="mp-product__save">
          <View onClick={this.handleSaveItem}>保  存</View>
        </View>
      </View>
    )
  }
}

export default Index;