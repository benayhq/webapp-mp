import Taro, { Component } from '@tarojs/taro'
import { View,Text,Picker, PickerView, PickerViewColumn  } from '@tarojs/components'
import './index.scss'
import { AtImagePicker } from 'taro-ui'
import ProductList from './productlist/index';


export default class Index extends Component {
  constructor(){
    super(...arguments)

    this.state = {
      files:[{
        url:'https://storage.360buyimg.com/mtd/home/111543234387022.jpg'
      },{
url:'https://storage.360buyimg.com/mtd/home/111543234387022.jpg'
      },{
url:'https://storage.360buyimg.com/mtd/home/111543234387022.jpg'
      }],
      selector: [['请选择', '美国', '中国', '巴西', '日本'], ['请选择', '美国', '中国', '巴西', '日本       ']],
      selectorChecked: '请选择',
      groupItemChecked:'请选择',
      groupItem:[],
      dateStart: '2018-04-21',
      dateSel: '2018-04-22'
    };
    this.init();
  }

  init(){
    this.initGroup();
  }

  initGroup(){
    var groups = [];
    for(var i =1; i<15; i++){
      groups.push(i);
    }
    
    this.setState({
      groupItem: groups
    });
  }

  onChange (files){
    this.setState({
      files
    })
  }
  
  handlePickerViewChange(e){
    const val = e.detail.value;
    console.log("val",val);
  }

  handlePickerChange(e){
    let selectedValue = `${this.state.selector[0][e.detail.value[0]] } / ${this.state.selector[0][e.detail.value[1]]}`;
    
    this.setState({
      selectorChecked:selectedValue
    });
  }

  handlePickerSelectGroupChange(e){
    this.setState({
      groupItemChecked:e.detail.value
    })
  }

  handlePickerColumnChange(e){
    console.log('e',e);
  }

  onDateStartChange = e =>{
    this.setState({
      dateStart:e.detail.value
    })
  }

  onPublish(e){
    Taro.navigateTo({
      url:'/pages/active/share/index'
    })
  }
  
  onDateEndChange = e => {
    this.setState({
      dateSel: e.detail.value
    });
  }

  createProduct(){
    Taro.navigateTo({
      url:'/pages/product/index'
    })
  }

  config = {
    navigationBarTitleText: '新增活动'
  }

  render () {

    return (
      <View className="mp-active">

        <View className="item">
            <Text>活动名称</Text>
            <input  placeholder="请输入活动名称" />
        </View>

        <View className="item">
            <Picker mode='selector' range={this.state.groupItem} 
            onChange={this.handlePickerSelectGroupChange}>
                  <View className='picker'>
                    <Text className="mp-publish mp-icon-arrow" ></Text> <Text>成团人数</Text> 
                    <Text className="time"> {this.state.groupItemChecked} </Text>  
                  </View>
            </Picker>
        </View>

        <View className="item">
            <Picker mode='date' onChange={this.onDateStartChange}>
                <View className='picker'>
                  <Text className="mp-publish mp-icon-arrow" ></Text> <Text>开始时间</Text> 
                  <Text className="time">{this.state.dateStart}</Text>  
                </View>
            </Picker>
        </View>

        <View className="item">
            <Picker mode='date' onChange={this.onDateEndChange}>
                <View className='picker'>
                 <Text className="mp-publish mp-icon-arrow" ></Text> <Text>结束时间</Text>  
                 <Text className="time">  {this.state.dateSel}</Text>  
                </View>
            </Picker>
        </View>
{/* 
        <View className="item">
            <Picker mode='multiSelector' range={this.state.selector} 
            onChange={this.handlePickerChange}
            onColumnChange={this.handlePickerColumnChange.bind(this)}>
                  <View className='picker'>
                    <Text className="mp-publish mp-icon-arrow" ></Text> <Text>活动地点</Text> 
                    <Text className="time"> {this.state.selectorChecked} </Text>  
                  </View>
            </Picker>
        </View> */}

        <AtImagePicker
          className="uploadImage"
           files={this.state.files}
           onChange={this.onChange.bind(this)}
        />

        <ProductList/>

        <View className="publish">
            <View onClick={this.onPublish}>立即发布</View>
        </View>

      </View>
    )
  }
}
