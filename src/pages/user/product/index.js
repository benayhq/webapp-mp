import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss';
import * as actions from './../../product/store/actionCreators';
import {getAuthInfo} from './../../utils/storage';
import {connect} from '@tarojs/redux';
import Empty from './../../../components/empty';

@connect(state=>state.product,actions)
export default class Index extends Component{
    constructor(props){
        super(...arguments);
        this.state = {
            newFilterList:[]
        }
    }
    
    config = {
        navigationBarTitleText: '往期产品'
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
        var products = [],promises=[];
        const resultProductList = await this.props.dispatchProductList(payload);

        resultProductList.content.map(async(item)=>{
          const promise = this.getImgUrl(item.location);
          promises.push(promise);
          products.push({
              value: item.id,
              label: item.projectName,
              price:item.price,
              marketPrice:item.discountPrice,
              prePrice:item.advance,
              imgUrl:'',
              desc: item.name,
              disabled: false
          });
        });

        Promise.all(promises).then((result)=>{
          if(result){
            result.map((item,key)=>{
              products[key].imgUrl = item;
            })
          }
        }).then((response)=>{
          this.setState({
            newFilterList:products
          })
        });
    }

    handleProductEdit(id,event){
      Taro.navigateTo({
          url:'/pages/product/edit?productId='+id
      });
  }

    render(){
        const {newFilterList} = this.state;
        let renderTemplate =null;
        if(newFilterList.length === 0){
          renderTemplate =  <Empty/>
        }
        else{
          renderTemplate = (
            newFilterList && newFilterList.map((item)=>{
              console.log('item',item);
                return (<View className="mp-user__product" onClick={this.handleProductEdit.bind(this,item.value)}> 
                <View>
                    <image className="icon-header" src={item.imgUrl} ></image>
                </View>
                <View>
                    <View className="mp-user__product-desc">{item.desc}</View>
                    <View className="mp-user__product-price">￥{item.price} <Text className="mp-user__product-marketprice">￥{item.marketPrice}</Text></View>
                    <View className="mp-user__product-prePrice">预定金:  {item.prePrice}</View>
                    
                </View>
                <view class="item-extra__icon item-extra__icon">
                  <View className="product-edit"> 编 辑 </View>
                  <text class="at-icon at-icon item-extra__icon-arrow item-extra__icon-arrow at-icon-chevron-right at-icon-chevron-right product-appointer">
                  </text>
                </view>
            </View>)
            })
          )
        }
        return (
            <View>
              {renderTemplate}
            </View>
        )
    }
}