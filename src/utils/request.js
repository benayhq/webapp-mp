import Taro from '@tarojs/taro'
import {API_USER_LOGIN} from './../constants/api'

const CODE_SUCCESS = '200';
const CODE_AUTH_EXPIRED = '500';

function getStorage(key){
    return Taro.getStorage({key})
            .then(res=>res.data)
            .catch(()=>'')
}

function updateStorage(data={}){
    console.log('data.content',data);
        Taro.setStorage({
            key: 'uid',data: data.content['id'] || ''
        })
}

export default async function fetch(options){
    const {url,payload,method = 'GET' ,showToast=true } = options;
    const header = {};

    if(method === 'POST'){
        header['content-type'] = 'application/json';
    }
    
    return Taro.request({
        url,
        method,
        data:payload,
        header:header
    }).then(async(res)=>{
        if(url === API_USER_LOGIN){
            await updateStorage(res.data);
        }
        return res.data;
    }).catch((err)=>{
        console.log('err',err);
        
        const defaultMsg = err.code === CODE_AUTH_EXPIRED ? '登录失效':'请求异常';
        if(showToast){
            Taro.showToast({
                title:err.err.errorMsg || defaultMsg,
                icon:'none'
            })
        }
        if(err.code === CODE_AUTH_EXPIRED){
            console.log('CODE_AUTH_EXPIRED');
            // Taro.navigateTo({
            //     url:'/pages/user-login/user-login'
            // })
        }
        return Promise.reject({ message: defaultMsg, ...err})
    });
}