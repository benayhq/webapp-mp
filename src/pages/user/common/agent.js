export default class Agent{

    getUserInfo(){
        return {
            userName:'Shawn',
            level:'一级代理商',
            levelText:'提升等级',
            amount: 10000.00
        }
    }

    getList(){
        return [
            {
                icon:'mp-user__ordernav-icon mp-icon mp-icon-waittuan',
                text:'待成团'
            },
            {
                icon:'mp-user__ordernav-icon mp-icon mp-icon-consumption',
                text:'待消费'
            },
            {
                icon:'mp-user__ordernav-icon mp-icon mp-icon-comment',
                text:'待评价'
            },
            {
                icon:'mp-user__ordernav-icon mp-icon mp-icon-refund',
                text:'退款'
            }
        ]
    }

    getPanelList(){
        return [
            {
                icon:'mp-user__controlpanel-icon mp-icon mp-icon-active',
                text:'我的活动',
                url:''
            },
            {
                icon:'mp-user__controlpanel-icon mp-icon mp-icon-product',
                text:'往期产品',
                url:''
            },
            {
                icon:'mp-user__controlpanel-icon mp-icon mp-icon-customer',
                text:'我的客户',
                url:''
            },
            {
                icon:'mp-user__controlpanel-icon mp-icon mp-icon-account',
                text:'历史账单',
                url:''
            },
            {
                icon:'mp-user__controlpanel-icon mp-icon mp-icon-invite',
                text:'邀请好友',
                url:''
            },
            {
                icon:'mp-user__controlpanel-icon mp-icon mp-icon-close',
                text:'手动核销',
                url:''
            },
            {
                icon:'mp-user__controlpanel-icon mp-icon mp-icon-appoint',
                text:'预约日程',
                url:''
            }
        ];
    }
}