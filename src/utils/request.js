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
    const {url,payload,method='GET',contentType} = options;
    const header ={};
    if(method === 'POST'){
        header['content-type'] = contentType ? contentType : 'application/json';
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
        const defaultMsg = err.code === CODE_AUTH_EXPIRED ? '登录失效' : '请求异常';
        return Promise.reject({message:defaultMsg,...err}); 
    })
}
