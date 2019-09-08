import Taro,{Component} from '@tarojs/taro';
import {View,Text,Image} from '@tarojs/components';
import './index.scss';
import classNames from 'classnames'
import {connect} from '@tarojs/redux';
import * as actions from '../store/actionCreators';
import jump from '../../utils/jump';
import { AtToast } from "taro-ui"

@connect(state=>state.user,actions)
export default class Spec extends Component{
    
    static defaultProps ={
        data:{},
        selected:{},
        onSelect: ()=>{}
    }

    constructor(props){
        super(...arguments)
        this.state = {
            prefix:'.mp-spec',
            isChange:false,
            productId:0,
            activeId:0,
            categoryItem:{
                productDocumentLocation:'',
                productName:'',
                productDiscountPrice:'',
                productPrice:'',
                productAdvance:''
            },
            productItems:[],
            text:'请选择品类',
            isOpended:false
        };
    }

    componentWillReceiveProps(nextProps,props){
        console.log('nextProps',nextProps.products[0]);
        let that = this;
        this.setState({
            activeId:nextProps.products[0].activityId
        });
        
        this.getImgUrl(nextProps.products[0].productLocation).then(res=>{
            console.log('response3333',res);
            that.setState({
                categoryItem:{
                    productDocumentLocation:res,
                    productName:nextProps.products[0].productName,
                    productDiscountPrice:nextProps.products[0].productDiscountPrice,
                    productPrice:nextProps.products[0].productPrice,
                    productAdvance:nextProps.products[0].productAdvance,
                    productId:nextProps.products[0].productId
                }
            })
        });

        if(nextProps.products && nextProps.products.length>0){
            let products = [],promises = [];
            nextProps.products.map(async(item,key)=>{
                const promise = this.getImgUrl(item.productLocation);
                promises.push(promise);
                products.push({
                    productDocumentLocation:'',
                    productName:item.productName,
                    productDiscountPrice:item.productDiscountPrice,
                    productPrice:item.productPrice,
                    productAdvance:item.productAdvance,
                    isChecked:false,
                    productId:item.productId
                })
            });

            Promise.all(promises).then((result)=>{
                if(result){
                    result.map((imgUrl,key)=>{
                        products[key].productDocumentLocation = imgUrl;
                    });
                }
            }).then((response)=>{
                that.setState({
                    productItems:products
                });
            });
        }
    }

    async getImgUrl(location){
        var payload = {
          location:location
        };
        const result = await this.props.dispatchDownLoadUrl(payload);
        return result.content;
    }

    async handleChangeCategory(product){
       this.setState({
            productId:product.productId,
            isOpended:false
       });

       var newProducts = this.state.productItems.map(item=>{
           item.isChecked = product.productId === item.productId;
           return item;
       });

       this.setState({
            categoryItem:{
                productDocumentLocation:product.productDocumentLocation,
                productName:product.productName,
                productDiscountPrice:product.productDiscountPrice,
                productPrice:product.productPrice,
                productAdvance:product.productAdvance,
                productItems:newProducts
            }
       })
    }

    jumpUrl = (url) =>{
        Taro.navigateTo({
            url: url
        })
    }

    handleSubmitOrder(e){
        const {productId,activeId} = this.state;
        if(productId === 0){
             wx.showToast({
                title: "请选择商品类目",
                icon:'none',
                duration: 1000
            })
            this.setState({
                isOpended:true
            })
            return;
        }
        this.setState({
            productId:0
        });
        Taro.navigateTo({
            url:'/pages/order/submit/index?activeId='+activeId+'&productId='+productId+'&activityName='+this.props.activityName
        })
    }

    render(){
        const {prefix,categoryItem,productItems} = this.state;
        return (
            <View>
                {
                    categoryItem && 
                        <View className={prefix+'__img'}>
                            <image style="height:80px;width:80px;margin:0 auto;padding-left:10px;padding-top:5px;"
                                    mode="scaleToFill"
                                    src={categoryItem.productDocumentLocation}>
                            </image>
                            <View className={prefix + '__desc'}>
                                <View>
                                    {categoryItem.productName}
                                </View>
                                <View>
                                    <Text className={prefix + '__order-price'}>￥ {categoryItem.productDiscountPrice}</Text>
                                    <Text className={prefix + '__order-marketprice'}>￥ {categoryItem.productPrice}</Text>
                                </View>
                                <View>
                                    <Text className={prefix + '__order-money'}>定金: ￥ {categoryItem.productAdvance} </Text>
                                </View>
                            </View>
                    </View>
                }
                <View className={prefix + '__title'}>
                    品牌与说明
                </View>
                {
                    productItems && productItems.map(product=>(
                        <View>
                            <View onClick={this.handleChangeCategory.bind(this,product)} className={product.isChecked?'mp-spec__category-green':'mp-spec__category'}>{product.productName}</View>
                        </View>
                    ))
                }
                <View className={prefix + '__bottom'} onClick={this.handleSubmitOrder.bind(this)}>
                    确 认
                </View>
            </View>
        )
    }
}