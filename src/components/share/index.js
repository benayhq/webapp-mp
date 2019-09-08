import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import {AtFloatLayout} from 'taro-ui';
import _isFunction from 'lodash/isFunction'

export default class Share extends Component{
  constructor(){
      super(...arguments);
  }

  handleClose(){
      if(_isFunction(this.props.onClose)){
          this.props.onClose();
      }
  }

  handleCreatePosters(){
    Taro.navigateTo({
        url:`/pages/active/share/index?activeId=${this.props.activeId}`
    })
  }

  onShareAppMessage(ops){
    // console.log('....share....');
    // debugger;
    Taro.showToast({
      title:'fdsafdsaf'
    });
    // return;
    return {
      title:'测试测试',
      path:'/pages/user/index',  // 路径，传递参数到指定页面。
      imageUrl:'', // 分享的封面图
      success: function (res) {},
      fail: function (res) {
      }
    }
    return;

   var that = this;
　　// 设置菜单中的转发按钮触发转发事件时的转发内容
　　var shareObj = {
　　　　title: "转发的标题",        // 默认是小程序的名称(可以写slogan等)
　　　　path: 'pages/user/index',        // 默认是当前页面，必须是以‘/’开头的完整路径
　　　　imageUrl: '',     //自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径，支持PNG及JPG，不传入 imageUrl 则使用默认截图。显示图片长宽比是 5:4
　　　　success: function(res){
　　　　　　// 转发成功之后的回调
　　　　　　if(res.errMsg == 'shareAppMessage:ok'){
　　　　　　}
　　　　},
　　　　fail: function(){
　　　　　　// 转发失败之后的回调
　　　　　　if(res.errMsg == 'shareAppMessage:fail cancel'){
　　　　　　　　// 用户取消转发
　　　　　　}else if(res.errMsg == 'shareAppMessage:fail'){
　　　　　　　　// 转发失败，其中 detail message 为详细失败信息
　　　　　　}
　　　　}
　　  };

    if (ops.from === 'button') {
        var eData = options.target.dataset;
　　　　console.log( eData.name );     // shareBtn
　　　　// 此处可以修改 shareObj 中的内容
　　　　shareObj.path = 'pages/user/index';
      }
      Taro.showToast({
        title:eData.name
      });

      Taro.showToast({
        title:shareObj.path
      });
      // 返回shareObj
　　return shareObj;
     
    }


  render () {
    const {isOpened} = this.props

    return (
      <View>
        <AtFloatLayout isOpened={isOpened}  title="分  享" onClose={this.handleClose.bind(this)}>
            <View className="mp-share-haibao">
                <View>
                    <View  className="mp-haibao mp-icon mp-icon-wechat"> 
                        <button catchtap='onShareAppMessage' style="margin-bottom:20px;margin-top: -65px;opacity:0;height:73px;" className="shareBtn" open-type="share" type="primary">
                        发送给朋友
                        </button>
                    </View>
                    <View>发送给朋友</View>
                </View>
                <View onClick={this.handleCreatePosters.bind(this)}>
                    {/* <View className="mp-icon mp-icon-friend"></View> */}
                    <image style="width:48px;height:48px;position:relative;left:75px;top:6px;" src="https://lovemeipin.oss-cn-shanghai.aliyuncs.com/common/circleoffriends.png"/>
                    <View style="margin-top:10px;">生成分享海报</View>
                </View>
            </View>
        </AtFloatLayout>
      </View>
    )
  }
}
