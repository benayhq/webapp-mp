
export default class User{
    constructor(){
    }

    getUserInfo(){
        return {
            userName:'Shawn',
            level:'普通会员',
            levelText:''
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
        ];
    }

    getPanelList(){
        return [
            {
                icon:'mp-user__controlpanel-icon mp-icon mp-icon-footer',
                text:'浏览历史',
                url:'https://lovemeipin.oss-cn-shanghai.aliyuncs.com/common/icon-footprint@2x.png',
                pageUrl:'pages/user/history/index'
            },
            {
                icon:'mp-user__controlpanel-icon mp-icon mp-icon-people',
                text:'历史咨询师',
                url:'https://lovemeipin.oss-cn-shanghai.aliyuncs.com/common/icon-portrait@2x.png',
                pageUrl:'pages/user/consultant/index'
            },
            {
                icon:'mp-user__controlpanel-icon mp-icon mp-icon-service',
                text:'',
                url:'https://lovemeipin.oss-cn-shanghai.aliyuncs.com/common/icon-headset2@2x.png',
                pageUrl:''
                // 客户服务
            }
        ];
    }
}