import Taro,{Component} from '@tarojs/taro';
import {View,Text,Swiper,SwiperItem,ScrollView} from '@tarojs/components';
import './detail.scss';
import { AtButton,AtFab,AtModal, AtModalHeader, AtModalContent, AtModalAction,AtToast} from 'taro-ui';
import {Popup,Loading,Modal} from './../../components'
import Spec from './spec/index';
import Contact from './contact/index';
import {getWindowHeight} from './../../utils/style';
import TuanList from './tuan/index';
import {connect} from '@tarojs/redux';
import * as actions from './store/actionCreators';
import Gallery from './gallery';
const ICON = 'check'

var commentArray=[],totalCommentCount=0,pageNumberCount=0;

@connect(state=>state,actions)
export default class Detail extends Component{
    config = {
        navigationBarTitleText: '活动详情'
    }

    state = {
        isOpened: false,
        categoryDialog: false,
        visible: false,
        bSpec: true,
        bContact: false,
        showOrderDialog:false,
        data:{},
        commentList:[],
        bannerList:[],
        comments:[],
        activeId:'',
        referId:'',
        source:'',
        commentText:'查看全部评论',
        isShare:false,
        isForwarding:false,
        loaded:false,
    }

    init(){
        this.initLogin();
    }

    async initLogin(){
        var user = await this.getAuthInfo();
        if(user && user.id>0) return;
        this.autoLogin();
    }

    async getAuthInfo(){
        const result = Taro.getStorage({key:'userinfo'}).then(res => {return res.data});
        return result;
    }

    autoLogin(){
        var that = this;
        const {referId,source} = this.state;
        wx.login({
            success(res) {
                var payload = {
                    code:res.code,
                    referId:referId,
                    source:source
                };
                that.props.WeChatLogin(payload).then((res)=>{
                    Taro.setStorage({key:'userinfo',data:res.content});
                });
            }
        });
    }

    loadData(){
        console.log('loadData');
        var payload ={
            activityId:this.state.activeId
        };
        this.props.dispatchActiveInfo(payload).then(res=>{
            console.log('res.content',res.content);
            this.setState({
                data:res.content
            });

            var commentItemList =[];

            //  获取评论图片.
            if(res.content && res.content.commentVo && res.content.commentVo.location.length>0){
                res.content.commentVo.location.map((item)=>{
                    this.getImgUrl(item).then((responseItem)=>{
                        console.log('responseItem getImgUrl',responseItem);
                        commentItemList.push(responseItem);
                    }).then(()=>{
                        this.setState({
                            commentList:commentItemList
                        })
                    })
                })
            }

            var bannerItemList =[];

            // 获取banner 图片.
            if(res.content &&  res.content.docInfo && res.content.docInfo.length > 0){
                res.content.docInfo.map((item)=>{
                    this.getImgUrl(item.location).then((response)=>{
                        console.log('response getImgUrl',response);
                        bannerItemList.push(response);
                    }).then(()=>{
                        this.setState({
                            bannerList:bannerItemList,
                            loaded:true
                        });
                    })
                })
            }
        });
    }

    componentDidMount(){
        console.log('componentDidMount');
        this.initLogin();
        this.loadData();
    }

    componentWillMount(){
        console.log('this.$router.params',this.$router.params);
        //  let activeId = this.$router.params.activeId,
        let activeId = this.$router.params.activeId  === undefined?48:this.$router.params.activeId,
            referId = this.$router.params.refId  === undefined?2:this.$router.params.refId,
            source = this.$router.params.sc === undefined ? "":this.$router.params.sc;  // advert
            if (activeId && referId ) {
            // wx.showToast({
            //     title: activeId+referId,
            //     icon: 'success',
            //     duration: 2000
            // });
            activeId = decodeURIComponent(activeId);
            referId =  decodeURIComponent(referId);
            source =  decodeURIComponent(source);
        };

        // console.log('scene',source);
        this.setState({
            activeId:activeId,
            referId:referId,
            source:source
        });
    }

    openDialog(){
        this.setState({
            visible: true,
            bContact: true,
            bSpec:false,
            showOrderDialog:false
        })
    }

    openCategoryDialog(){
        this.setState({
            visible: true,
            bSpec:true,
            bContact: false,
            showOrderDialog:false
        });
    }

    toggleVisible = () =>{
        this.setState({
            visible:!this.state.visible
        })
    }

    close(){
        this.setState({
            isOpened:false
        })
    }

    showMpDialog(){
        this.setState({
            showOrderDialog:true
        })
    }

    handleShare(){
        this.setState({
            isShare:true
        })
        // wx.showShareMenu({
        //     withShareTicket: true
        // })
    }

    handleAllComment(data){
        var products = [];
        data.activityProducts.map((item)=>{
            products.push(item.productId);
        });
        var payload ={
            pageNo:pageNumberCount,
            pageSize:10,
            activityProductIds:products
        };
        var that = this;
        totalCommentCount = commentArray.length;
        pageNumberCount++;

        this.props.dispatchCommentInfo(payload,).then((response)=>{
            if(response.content.length>0){
                response.content.map((item,index)=>{
                    commentArray.push(item);
                    if(item.docLocations.length>0){
                        item.docLocations.map((img)=>{
                            this.getImgUrl(img).then((response)=>{
                                commentArray[index].docLocations = [];
                                commentArray[index].docLocations.push(response);
                            })
                        })
                    }
                });
            };
            if(commentArray.length>0){
                setTimeout(() => {
                    that.setState({
                        comments:commentArray
                    });
                }, 1000);
            }
        });

        if(totalCommentCount>0){
            setTimeout(() => {
                if(totalCommentCount === commentArray.length){
                    that.setState({
                        commentText:'加载完毕'
                    });
                }
            }, 1000);
        }
    }

    async getImgUrl(location){
        var payload = {
          location:location
        };
        const result = await this.props.dispatchDownLoadUrl(payload);
        return result.content;
    }

    handleCancelShare(){
        this.setState({
            isShare:false
        });
    }

    handleCreatePosters(){
        Taro.navigateTo({
            url:`/pages/active/share/index?activeId=${this.state.activeId}`
          })
    }

    onShareAppMessage(ops){

        if (ops.from === 'button') {
            var that = this;
            that.setState({
                isShare:false
            });
            setTimeout(()=>{
                wx.showToast({
                    title: "转发成功",
                    icon: 'success',
                    duration: 3000
                });
            },3000)
        }

        return {
          title: this.state.data.activityName,
          path: `pages/product/detail?activeId=${this.state.activeId}&refId=${this.state.referId}`,  // 路径，传递参数到指定页面。
          imageUrl:this.state.bannerList[0].item, // 分享的封面图
          success: function (res) {
          },
          fail: function (res) {
          }
        }
      }

    handleJumpHome(){
        Taro.navigateTo({
            url:`../../pages/user/index`
          })
    }
    
    render(){
        const {data,commentList,bannerList,activeId,isForwarding,comments,commentText} = this.state;
        const height = getWindowHeight(false);
        const { isOpened,bSpec,bContact,showOrderDialog,loaded} = this.state;

        let renderTemplate = null;
        if(!loaded){
            renderTemplate = <Loading/>
        }
        else{
            renderTemplate =   <View className='mp-activedetail'>
            <ScrollView
            scrollY
            style={{ height }}>
                 <Gallery list={bannerList} />
                <View className="mp-activedetail__user">
                    <Text>好友 </Text>
                    <Text> {data.nickname} </Text>
                    <Text> 发起的拼团,还差 </Text>
                    <Text> {data.remainPeople} </Text>
                    <Text>人成团</Text>
                </View>

                <View className="mp-activedetail__price">
                    <View>
                        <Text className="mp-activedetail__title">￥{data.displayPrice}</Text>
                        <Text className="mp-activedetail__subtitle">￥{data.displayDiscountPrice}</Text>
                    </View>
                    <View className="mp-activedetail__desc">{data.activityName}</View>
                    <View>
                        <Text className="mp-activedetail__address"></Text>
                        <Text className="mp-activedetail__tel">已咨询：{data.consultPeople}</Text>
                    </View>
                </View>

                <View className="mp-activedetail__service">
                    <View>服务承诺</View>
                    <View>正品保证 ·</View>
                    <View>预付款可退 ·</View>
                    <View>预付款可退</View>
                </View>
                {/* <View className="mp-activedetail__consultation">
                    <Text>咨询产品</Text>
                    <Text>艾美玻尿酸 0.8ml 2支</Text>
                </View> */}
              
                <View className="mp-activedetail__person">
                    <View className="mp-activedetail__header">
                            <image
                            mode="scaleToFill"
                            src={data.profileUrl}
                            ></image>
                    </View>
                    <View className="mp-activedetail__content">
                        <View>
                        {data.username}
                        </View>
                        <View>
                        {data.commentScore}分（{ data &&  data.commentPeople !=null ? data.commentPeople:0}人评）
                        </View>
                        <View>
                        {/* 服务区域：上海市 黄浦区  {activeId} */}
                        </View>
                    </View>
                </View>
                {
                    data.batchPeople > 0 && (
                        <View className="mp-activedetail__join">
                            <View className="mp-activedetail__first">
                                <Text className="mp-activedetail__etitle">{data.batchPeople}人在拼单，可直接参与</Text>
                                <Text className="mp-activedetail__all" onClick={this.showMpDialog.bind(this)} > 
                                    {/* 查看全部 */}
                                    <Text className="mp-icon mp-icon-arrow1"></Text>
                                </Text>
                            </View>
                            {
                                data.activityBatchVos && data.activityBatchVos.map(batch=>(
                                    <View className="mp-activedetail__second"> 
                                        <View>
                                            <image
                                                className="mp-activedetail__second-image"
                                                mode="scaleToFill"
                                                src={batch.profileUrl}>
                                            </image>
                                        </View>
                                        <View>{batch.publishName}</View>
                                        <View className="mp-activedetail__joinperson">
                                            <View className="mp-activedetail__counter">还差 {batch.remainPeople} 人拼成</View>
                                            <View className="mp-activedetail__time">剩余20:50:14</View>
                                        </View>
                                        <View>
                                            <View className="mp-activedetail__second__buyAction" onClick={this.openCategoryDialog.bind(this)}>
                                                参与拼团
                                            </View>
                                        </View>
                                    </View>
                                ))
                            }
                        </View>
                    )
                }

                <View className="mp-activedetail__comment">
                    <View className="mp-activedetail__comment-title">
                        <Text style="width:10px; height:35px; line-height:35px;left:-14px; top:4px;position:relative;background:#7DD6D0; display:inline-block;"></Text>
                        <Text style="width:150px; height:35px; line-height:35px;left:-7px; top:-5px; position:relative;display:inline-block;">评价 ({data.commentPeople === null ? 0 : data.commentPeople})</Text>
                    </View>
                    {
                        comments.length === 0 && data.commentVo && (
                                <View className="mp-activedetail__comment-content">

                                <View className="mp-activedetail__comment-content-left">
                                        <image
                                                mode="scaleToFill"
                                                src={data.commentVo.profileUrl}>
                                        </image>
                                </View>
                            
                                <View className="mp-activedetail__comment-content-right">
                                    <View className="mp-activedetail__comment-username">{data.commentVo.name}</View>
                                        <View className="mp-activedetail__comment-tag">
                                            <Text> 环境：{`${data.commentVo.environmentStar}.0`}  </Text>
                                            <Text> 专业度：{`${data.commentVo.professionStar}.0`} </Text>
                                            <Text> 服务：{`${data.commentVo.serviceStar}.0`} </Text>
                                            <Text> 效果：{`${data.commentVo.effectStar}.0`} </Text>
                                        </View>
                                        {/* <View className="mp-activedetail__comment-desc">
                                            【玻尿酸瘦脸针】瑞典进口 可打嘟嘟唇塑造心形脸
                                        </View> */}
                                        <View className="mp-activedetail__comment-description">
                                        {data.commentVo.message}
                                            {/* <View className="mp-activedetail__comment-time">
                                                2018年03月15日
                                            </View> */}
                                            <View>
                                                {
                                                    commentList && commentList.map(comment=>(
                                                        <image style="width:80px;height:80px;margin:10px 20px 10px 0px;border-radius:5px;"
                                                            mode="scaleToFill"
                                                            src={comment}>
                                                        </image>
                                                    ))
                                                }
                                            </View>
                                    </View>
                                </View>
                        
                        
                                </View>
                            )
                    }
                    {
                        comments.length > 0 && (
                            comments.map((item)=>{
                                return (
                                    <View className="mp-activedetail__comment-content">
                                        <View className="mp-activedetail__comment-content-left">
                                                <image
                                                        mode="scaleToFill"
                                                        src={item.profileUrl}>
                                                </image>
                                        </View>
                                        <View className="mp-activedetail__comment-content-right">
                                            <View className="mp-activedetail__comment-username">{item.name}</View>
                                                <View className="mp-activedetail__comment-tag">
                                                    <Text> 环境：{`${item.environmentStar}.0`}  </Text>
                                                    <Text> 专业度：{`${item.professionStar}.0`} </Text>
                                                    <Text> 服务：{`${item.serviceStar}.0`} </Text>
                                                    <Text> 效果：{`${item.effectStar}.0`} </Text>
                                                </View>
                                                <View className="mp-activedetail__comment-description">
                                                {item.message}
                                                    <View>
                                                        {
                                                            item.docLocations && item.docLocations.map(comment=>(
                                                                <image style="width:80px;height:80px;margin:10px 20px 10px 0px;border-radius:5px;"
                                                                    mode="scaleToFill"
                                                                    src={comment}>
                                                                </image>
                                                            ))
                                                        }
                                                    </View>
                                            </View>
                                        </View>
                                    </View>
                                )
                            })
                        )
                    }
                    {
                        data.commentVo && (
                                <View className="mp-activedetail__query-all-comment" onClick={this.handleAllComment.bind(this,data)}>
                                    {commentText}
                                    {/* <Text className="mp-icon mp-icon-arrow1"></Text> */}
                                </View>
                        )
                    }
                </View>
                <View className="mp-activedetail__consultation">
                </View>
                
                <View className="mp-activedetail__footer">
                
                    <View>
                        <View className="mp-activedetail__orderpay_footer">预定金: 
                            <Text style="color:rgba(235,47,150,1);">￥{data.advance}</Text>
                        </View>
                        <View className="mp-activedetail__orderpay_face_footer">当面付: ￥{data.cashAdvance} </View>
                    </View>
                    <View className="mp-activedetail__home_footer"  onClick={this.handleJumpHome.bind(this)} >
                        <View className="mp-icon mp-icon-home"></View> 
                    </View>
                    <View className="mp-activedetail__zixun_footer"  onClick={this.openDialog.bind(this)}>
                        <View className="mp-icon mp-icon-telphone"></View> 
                    </View>
                    <View className="mp-activedetail__action__footer" onClick={this.openCategoryDialog.bind(this)}>
                        参与拼团
                    </View>
                </View>
             
               
                <View className="mp-share" onClick={this.handleShare.bind(this)}>
                   <View>
                        <View className="mp-icon mp-icon-share"></View>
                   </View>
                </View>
            </ScrollView>


            <AtModal isOpened={this.state.isShare}>
                <AtModalContent>
                    <View className="mp-share-haibao">
                        {/* <View onClick={this.handleSendFriend.bind(this)}>
                            <View className="mp-haibao mp-icon mp-icon-wechat"></View>
                            <View>发送给朋友</View>
                        </View> */}
                      
                        <View>
                            <View  className="mp-haibao mp-icon mp-icon-wechat"> 
                                <button style="margin-bottom:20px;margin-top: -65px;opacity:0;height:73px;" className="shareBtn" open-type="share" type="primary">
                                发送给朋友
                                </button>
                            </View>
                            <View>发送给朋友</View>
                        </View>
                        <View onClick={this.handleCreatePosters.bind(this)}>
                            <View className="mp-icon mp-icon-haibao"></View>
                            <View>生成海报</View>
                        </View>
                    </View>
                </AtModalContent>
                <AtModalAction> <Button onClick={this.handleCancelShare.bind(this)}>取 消</Button> </AtModalAction>
            </AtModal>

            <Popup 
            visible={this.state.visible}
            onClose={this.toggleVisible}>
                {
                    bContact && <Contact cellphone={data.cellphone} weChatId={data.weChatId} weChatQrCode={data.weChatQrCode}/>
                }
                {
                    bSpec && <Spec activityName={data.activityName} products={data.activityProducts}/>
                }
            </Popup>

            {/* <Modal isOpened={showOrderDialog}>
                <TuanList/>
            </Modal> */}
         </View>
        }

        return (
            <View>
                {renderTemplate}
            </View>
        )
    }
}
