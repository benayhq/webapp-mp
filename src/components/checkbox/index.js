import Taro,{Component} from '@tarojs/taro';
import {View,Text} from '@tarojs/components';
import classNames from 'classnames'
import PropTypes from 'prop-types';
import './index.scss';

export default class CheckBox extends Component{

    handleClick(idx){
        const {selectedList,options} = this.props;
        const option = options[idx];
        const {disabled,value} = option;

        if (disabled) return;

        const seletecdSet = new Set(selectedList);
        if(!seletecdSet.has(value)){
            seletecdSet.add(value);
        }else{
            seletecdSet.delete(value)
        }

        this.props.onChange([...seletecdSet]);
    }

    render(){
        const {
            className,
            customStyle,
            selectedList,
            options
        } = this.props;

        const rootCls = classNames('mp-checkbox',className);

        return (
            <View className={rootCls} style={customStyle}>
                {
                    options.map((option,idx) => {
                        const { value,disabled,label,data} = option;

                        console.log('data.location',data.imgUrl);

                        const optionCls = classNames('mp-checkbox__option',{
                            'mp-checkbox__option--selected':!selectedList.includes(value)
                        });

                        return  <View className={optionCls} key={value} onClick={this.handleClick.bind(this, idx)}>
                            <View className="mp-checkbox__option-wrap">
                                <View className="mp-checkbox__option-cnt">
                                    <View className="mp-checkbox__icon-cnt">
                                        <Text className="mp-icon mp-icon-check"></Text>    
                                    </View>
                                    {
                                        data.imgUrl && 
                                        <View>
                                            <image
                                            style="width:90px; height:90px;margin-top:8px; margin-left:5px; margin-right:5px;"
                                            mode="scaleToFill"
                                            src={data.imgUrl}
                                            ></image>
                                        </View>
                                   }
                                   <View className='mp-checkbox__title'>
                                        <View>
                                            <Text style='margin-left:10px;display:block;'>{data.location}{data.desc}</Text>
                                            <View>
                                                <Text className='mp-checkbox__price'> ￥{data.price} </Text>
                                                <Text className='mp-checkbox__marketprice'> {data.marketPrice} </Text>
                                            </View>
                                            <View className='mp-checkbox__preprice'> 预定金:{data.prePrice} </View>
                                        </View>
                                   </View>
                                </View>
                            </View>
                        </View>
                    })
                }
            </View>
        )
    }
}

CheckBox.defaultProps = {
    customStyle:'',
    className:'',
    data:[],
    options:[],
    selectedList:[],
    onChange () {},
};

CheckBox.propTypes = {
    customStyle: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string
    ]),
    className: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string
    ]),
    data: PropTypes.array,
    options: PropTypes.array,
    selectedList: PropTypes.array,
    onChange: PropTypes.func
}