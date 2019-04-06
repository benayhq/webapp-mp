import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component{
  config = {
    navigationBarTitleText: '广告预览'
  }

  constructor(){
      super(...arguments);

      this.state = {
          imgSrc:'http://invitecard-1253442168.image.myqcloud.com/sharecard_tmp/2019-4-5/1554468983_1a277fade9b09ff199d377880f04137f.jpg',
          imgList:[
              {
                'url':'http://invitecard-1253442168.image.myqcloud.com/sharecard_tmp/2019-4-5/1554475555_14221cb40de9b78da775602fc2f19d48.jpg',
                isShow:true
              },
              {
                'url':'http://invitecard-1253442168.image.myqcloud.com/sharecard_tmp/2019-4-5/1554475567_79b0ebcd29004061dc0511df55fe44d1.jpg'
                ,isShow:false
              },
              {'url':'http://invitecard-1253442168.image.myqcloud.com/sharecard_tmp/2019-4-5/1554475577_3bd0b2fbc81292154d5e2c8e3fc9c6e1.jpg'
              ,isShow:false}
          ],
          mask:''
      };
  }

  componentWillMount () { }

  componentDidMount () { 
  }

  componentWillUnmount () { }
  
  componentDidShow () { }

  componentDidHide () { }

  onClick = (e,item) => {
      const imgUrl = item.currentTarget.dataset.eTapAA.url;
      this.setState({
        imgSrc:imgUrl
      });
      this.showMask(imgUrl);
  }

  showMask(imgUrl){
     this.state.imgList.map((item,index)=>{
        item.url === imgUrl ? item.isShow = true : item.isShow = false;
     });
  }

  render () {
    const {imgSrc,imgList,mask} = this.state;

    return (
      <View className="mp-advert">

          <View className="banner">
                <View className="img">
                        <image src={imgSrc}></image>
                </View>
          </View>

          <View className="thumbnail-wrapper" >
              <View className="thumbnail">
              {
                  imgList.map((item,index)=>(
                      <View onClick={this.onClick.bind(this,item)}>
                            <image key={index}  src={item.url}></image>
                            {
                              item.isShow
                              ?
                              <View className="mask">
                                  <Text className="mp-icon mp-icon-checkedItem"></Text>
                              </View>
                              :
                              ''
                            }
                      </View>
                  ))
              }
              </View>
          </View>
      </View>
    )
  }
}
