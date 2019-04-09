export default class Order{
    constructor(){

    }

    getStatuInfo(order){
        switch(order.status){
            case "待付款":
                return {
                    title:'订单仍未支付',
                    tip:'剩余23小时59分自动关闭',
                    icon:'mp-icon mp-icon-order-waitpay success',
                    qrCode:false,
                    status:'waitPay',
                    assemble:{
                        text:'拼团中'
                    },
                    toolBar:[{
                        text:'取消订单',
                        event:'this.handleCancelOrder.bind(this)'
                    },{
                        text:'立即支付',
                        event:'Pay'
                    }]
                }
            case "":
                return {
                }
        }
    }

    handleCancelOrder(){
        console.log('handleCancelOrder');
    }
} 