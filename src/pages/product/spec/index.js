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
        
        this.getImgUrl(nextProps.products[0].productDocumentLocation).then(res=>{
            this.setState({
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

            let productItems = [];

            nextProps.products.map((item,key)=>{
                productItems.push({
                    productDocumentLocation:item.productDocumentLocation,
                    productName:item.productName,
                    productDiscountPrice:item.productDiscountPrice,
                    productPrice:item.productPrice,
                    productAdvance:item.productAdvance,
                    isChecked:false,
                    productId:item.productId
                })
            });

            this.setState({
                productItems:productItems
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

    handleChangeCategory(product){
       this.setState({
            productId:product.productId,
            isOpended:false
       });

       var newProducts = this.state.productItems.map(item=>{
           item.isChecked = product.productId === item.productId;
           return item;
       });

       this.getImgUrl(product.productDocumentLocation).then(res=>{
                this.setState({
                    categoryItem:{
                        productDocumentLocation:res,
                        productName:product.productName,
                        productDiscountPrice:product.productDiscountPrice,
                        productPrice:product.productPrice,
                        productAdvance:product.productAdvance
                    }
                })
        });

        this.setState({
            productItems:newProducts
        });
    }

    jumpUrl = (url) =>{
        Taro.navigateTo({
            url: url
        })
    }

    handleSubmitOrder(e){
        const {productId} = this.state;
        if(productId === 0){
            this.setState({
                isOpended:true
            })
            return;
        }
        console.log('productId',productId);
        console.log('this.props.activityName',this.props.activityName);
        jump({url:'/pages/order/submit/index?productId='+productId+'&activityName='+this.props.activityName});
    }

    render(){
        const {prefix,isChange,categoryItem,productItems,icon,text} = this.state;

        return (
            <View>
                {
                    this.props.products && 
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
                                    <Text className={prefix + '__order-price'}>{categoryItem.productDiscountPrice}</Text>
                                    <Text className={prefix + '__order-marketprice'}>{categoryItem.productPrice}</Text>
                                </View>
                                <View>
                                    <Text className={prefix + '__order-money'}>定金: {categoryItem.productAdvance} </Text>
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
                    拼 团
                </View>

                <AtToast isOpened={isOpended} text={text} duration={1000}></AtToast>
            </View>
        )
    }
}