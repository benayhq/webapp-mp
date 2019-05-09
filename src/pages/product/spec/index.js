import Taro,{Component} from '@tarojs/taro';
import {View,Text,Image} from '@tarojs/components';
import './index.scss';
import classNames from 'classnames'

export default class Spec extends Component{

    static defaultProps ={
        data:{},
        selected:{},
        onSelect: ()=>{}
    }

    constructor(props){
        super(props);
        this.state = {
            prefix:'.mp-spec',
            isChange:false
        }
    }

    handleChangeCategory(){
        this.setState({
            isChange:!this.state.isChange
        })
    }

    render(){
        const {prefix,isChange} = this.state;

        const categoryClass = classNames({
            'mp-spec__category':true,
            'mp-spec__category-green':isChange
        })

        return (
            <View>
                <View className={prefix+'__img'}>
                    <image style="height:100px;width:100px;margin:0 auto;"
                            mode="scaleToFill"
                            src={'https://storage.360buyimg.com/mtd/home/111543234387022.jpg'}>
                    </image>
                    
                    <View className={prefix + '__desc'}>
                        <View>
                            玻尿酸瘦脸针】瑞典进口 可打嘟嘟唇微笑唇 塑造心形脸
                        </View>
                        <View>
                            <Text className={prefix + '__order-price'}>￥3000</Text>
                            <Text className={prefix + '__order-marketprice'}>￥3000</Text>
                        </View>
                        <View>
                            <Text className={prefix + '__order-money'}>定金：￥200</Text>
                        </View>
                    </View>

                </View>

                <View className={prefix + '__title'}>
                        品牌与说明
                </View>

                <View>
                    <View onClick={this.handleChangeCategory.bind(this)} className={categoryClass}>瑞兰2号 2支</View>
                </View>

                <View className={prefix + '__bottom'}>
                    确 定
                </View>
            </View>
        )
    }
}