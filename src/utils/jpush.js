var JMessage=require('./jmessage-wxapplet-sdk-1.4.0.min.js');

class JPush{
    static getInstance(){
        if(!this.instance){
            this.instance = new JMessage({debug:true}); 
        }
        return this.instance;
    }
}

export default JPush;