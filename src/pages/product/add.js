import Taro, { Component } from '@tarojs/taro'
import { View, Text,Button } from '@tarojs/components'
import {connect} from '@tarojs/redux';
import {AtButton} from 'taro-ui'
import './add.scss';

@connect(state=>state.product,null)
class CreateProduct extends Component{

    config = {
        navigationBarTitleText: '新增产品'
    }
    
    constructor(){
        this.state = {
            productList:[
                {
                    productId:0,
                    price:3000,
                    marketPrice:3000,
                    prePrice:200,
                    imgUrl:'https://storage.360buyimg.com/mtd/home/111543234387022.jpg',
                    desc: '【玻尿酸瘦脸针】瑞典进口 可打嘟嘟唇微笑'
                },
                {
                    productId:1,
                    price:3000,
                    marketPrice:3000,
                    prePrice:200,
                    imgUrl:'https://storage.360buyimg.com/mtd/home/111543234387022.jpg',
                    desc: '【玻尿酸瘦脸针】瑞典进口 可打嘟嘟唇微笑'
                },
                {
                    productId:2,
                    price:3000,
                    marketPrice:3000,
                    prePrice:200,
                    imgUrl:'https://storage.360buyimg.com/mtd/home/111543234387022.jpg',
                    desc: '【玻尿酸瘦脸针】瑞典进口 可打嘟嘟唇微笑'
                }
            ]
        }
        this.handleEditProduct = this.handleEditProduct.bind(this);
    }

    handleEditProduct(){
        console.log('handleEditProduct');
        Taro.navigateTo({
            url:'/pages/product/edit'
        })
    }

    render(){
        const {productList} = this.state;

        return (
            <View className="mp-own-product">
                {
                    productList.map((product)=>{
                        return (
                            <View className='mp-own-product__item'>
                                <View className="mp-own-product__product">
                                    <View>
                                        <image
                                        style="width:101px; height:101px;margin-top:6px; margin-left:9px; margin-right:9px;"
                                        mode="scaleToFill"
                                        src={product.imgUrl}
                                        ></image>
                                    </View>
                                    <View>
                                        <Text className="mp-own-product__title">{product.desc}</Text>
                                        <View className="mp-own-product__content">
                                            <Text className="mp-own-product__price">￥{product.price}</Text>
                                            <Text className="mp-own-product__marketPrice">￥{product.marketPrice}</Text>
                                        </View>
                                        <View>
                                             <Text className="mp-own-product__preprice">预定金: </Text>
                                             <Text className="mp-own-product__pureText">
                                               ￥{product.prePrice}
                                             </Text>
                                        </View>
                                    </View>
                                </View>
                                <View className="mp-own-product__action">
                                    <Button onClick={this.handleEditProduct.bind(this)}>编辑</Button>
                                    <Button >删除</Button>
                                </View>
                            </View>
                        )
                    })
                }
            </View>
        )
    }
}

export default CreateProduct;