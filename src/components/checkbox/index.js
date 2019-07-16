import Taro,{Component} from '@tarojs/taro';
import {View,Text} from '@tarojs/components';
import classNames from 'classnames'
import PropTypes from 'prop-types';

import './index.scss';

export default class CheckBox extends Component{
    constructor (props) {
        super(props)
    }

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

    handleProductEdit(){
        Taro.navigateTo({
            url:'/pages/product/edit'
        });
    }

    handleProductDelete(id){
        console.log('e',this.props);
        this.props.onDelete(id);
    }

    render(){
        const {
            className,
            customStyle,
            selectedList,
            options,
            onDelete
        } = this.props;

        const rootCls = classNames('mp-checkbox',className);

        return (
            <View className={rootCls} style={customStyle}>
                {
                    options.map((option,idx) => {
                        const { value,disabled,label,data} = option;


                        const optionCls = classNames('mp-checkbox__option',{
                            'mp-checkbox__option--selected':!selectedList.includes(value)
                        });

                        return  <View className={optionCls} key={value}>
                            <View className="mp-checkbox__option-wrap">
                                <View className="mp-checkbox__option-cnt">
                                    <View className="mp-checkbox__icon-cnt" onClick={this.handleClick.bind(this, idx)}>
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

                                   <View className="mp-checkbox__action">
                                      <Text className='mp-icon mp-icon-edit' onClick={this.handleProductEdit.bind(this)}></Text>
                                      <Text className='mp-icon mp-icon-delete' onClick={this.handleProductDelete.bind(this,value)}></Text>
                                   </View>
                                </View>
                              
                            </View>
                        
{/*                             
                            <AtModal
                            isOpened
                            title='标题'
                            cancelText='取消'
                            confirmText='确认'
                            onClose={ this.handleClose }
                            onCancel={ this.handleCancel }
                            onConfirm={ this.handleConfirm }
                            content='是否删除?'
                            /> */}
                        </View>
                    })
                }
            </View>
        )
    }
}
// CheckBox.defaultProps = {
//     customStyle:'',
//     className:'',
//     data:[],
//     options:[],
//     selectedList:[],
//     onChange () {},
//     delItem (){}
// };

// CheckBox.propTypes = {
//     customStyle: PropTypes.oneOfType([
//         PropTypes.object,
//         PropTypes.string
//     ]),
//     className: PropTypes.oneOfType([
//         PropTypes.array,
//         PropTypes.string
//     ]),
//     data: PropTypes.array,
//     options: PropTypes.array,
//     selectedList: PropTypes.array,
//     onChange: PropTypes.func,
//     delItem:PropTypes.func
// }