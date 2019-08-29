import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss';
import * as actions from './../../product/store/actionCreators';
import {getAuthInfo} from './../../utils/storage';
import {connect} from '@tarojs/redux';

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
        
        var responseList = [];
        const resultProductList = await this.props.dispatchProductList(payload);

        resultProductList.content.map((item)=>{
          this.getImgUrl(item.location)
          .then(response=>{
            responseList.push({
                value: item.id,
                label: item.projectName,
                price:item.price,
                marketPrice:item.discountPrice,
                prePrice:item.advance,
                imgUrl:response,
                desc: item.name,
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


    render(){
        const {newFilterList} = this.state;

        return (
            <View>
                 {
                     newFilterList && newFilterList.map((item)=>{
                         return (<View className="mp-user__product"> 
                            <View>
                                <image className="icon-header" src={item.imgUrl} ></image>
                            </View>
                            <View>
                                <View className="mp-user__product-desc">{item.desc}</View>
                                <View className="mp-user__product-price">￥{item.price} <Text className="mp-user__product-marketprice">￥{item.marketPrice}</Text></View>
                                <View className="mp-user__product-prePrice">预定金:  {item.prePrice}</View>
                            </View>
                        </View>)
                     })
                 }
            </View>
        )
    }
}