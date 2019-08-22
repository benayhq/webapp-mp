export default class Agent{

    getUserInfo(){
        return {
            userName:'Shawn',
            level:'一级代理商',
            levelText:'提升等级',
            amount: '100000.00'
        }
    }

    getList(){
        return [
            {
                icon:'mp-user__ordernav-icon mp-icon mp-icon-waittuan',
                text:'待付款',
                status:'UNPAY',
                count:0
            },
            {
                icon:'mp-user__ordernav-icon mp-icon mp-icon-waittuan',
                text:'待成团',
                status:'BATING',
                count:0
            },
            {
                icon:'mp-user__ordernav-icon mp-icon mp-icon-consumption',
                text:'待消费',
                status:'CONSUMPTION',
                count:0
            },
            {
                icon:'mp-user__ordernav-icon mp-icon mp-icon-comment',
                text:'待评价',
                status:'COMMENTING',
                count:0
            }
            // {
            //     icon:'mp-user__ordernav-icon mp-icon mp-icon-refund',
            //     text:'退款'
            // }
        ]
    }

    getPanelList(){
        return [
            {
                icon:'mp-user__controlpanel-icon mp-icon mp-icon-active',
                text:'我的活动',
                url:'https://lovemeipin.oss-cn-shanghai.aliyuncs.com/common/打折优惠@2x.png',
                pageUrl:'pages/user/active/index'
            },
            {
                icon:'mp-user__controlpanel-icon mp-icon mp-icon-product',
                text:'往期产品',
                url:'https://lovemeipin.oss-cn-shanghai.aliyuncs.com/common/商品@2x.png',
                pageUrl:'pages/user/product/index'
            },
            {
                icon:'mp-user__controlpanel-icon mp-icon mp-icon-service',
                text:'',
                url:'https://lovemeipin.oss-cn-shanghai.aliyuncs.com/common/icon-headset2@2x.png',
                pageUrl:''
            },
            {
                icon:'mp-user__controlpanel-icon mp-icon mp-icon-customer',
                text:'我的客户',
                url:'https://lovemeipin.oss-cn-shanghai.aliyuncs.com/common/friend_add_fill@2x.png',
                pageUrl:'pages/user/customer/index'
            }
            // {
            //     icon:'mp-user__controlpanel-icon mp-icon mp-icon-account',
            //     text:'历史账单',
            //     url:'http://i1.fuimg.com/693434/8b8887045d45017c.png'
            // },
            // {
            //     icon:'mp-user__controlpanel-icon mp-icon mp-icon-invite',
            //     text:'邀请好友',
            //     url:'http://i1.fuimg.com/693434/151afe89b9f8782e.png'
            // },
            // {
            //     icon:'mp-user__controlpanel-icon mp-icon mp-icon-close',
            //     text:'手动核销',
            //     url:'http://i1.fuimg.com/693434/04c8def9fab6bb32.png'
            // },
            // {
            //     icon:'mp-user__controlpanel-icon mp-icon mp-icon-appoint',
            //     text:'预约日程',
            //     url:'http://i1.fuimg.com/693434/bfc05223fd41d1a3.png'
            // }
        ];
    }
}