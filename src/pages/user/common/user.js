
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
                text:'待付款'
            },
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
                url:'http://i2.tiimg.com/693434/35232d302546d311.png'
            },
            {
                icon:'mp-user__controlpanel-icon mp-icon mp-icon-collect',
                text:'我的收藏',
                url:'http://i2.tiimg.com/693434/c8f79b2803080f4d.png'
            },
            {
                icon:'mp-user__controlpanel-icon mp-icon mp-icon-people',
                text:'历史咨询师',
                url:'http://i2.tiimg.com/693434/bd428f0847831ca6.png'
            },
            {
                icon:'mp-user__controlpanel-icon mp-icon mp-icon-coupon',
                text:'优惠券',
                url:'http://i2.tiimg.com/693434/34d934d38b42f2b8.png'
            },
            {
                icon:'mp-user__controlpanel-icon mp-icon mp-icon-about',
                text:'关于我们',
                url:'http://i2.tiimg.com/693434/4c346b64b120bfb3.png'
            },
            {
                icon:'mp-user__controlpanel-icon mp-icon mp-icon-service',
                text:'客户服务',
                url:'http://i2.tiimg.com/693434/f60b1369c18e6712.png'
            }
        ];
    }
}