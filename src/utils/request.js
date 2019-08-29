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

async function getSessionId(){
    // const result = Taro.getStorage({key:'userinfo'}).then(res => {return res.data.sessionId}).catch(() => '')
    // return result;
    const result = Taro.getStorage({key:'sessionId'}).then(res => {return res.data}).catch(() => '')
    return result;
}


export default async function fetch(options){

    const {url,payload,method='GET',contentType} = options;
    const sessionId = await getSessionId();
    const header ={};
    header['Authorization'] = sessionId;
    if(method === 'POST'){
        header['content-type'] = contentType ? contentType : 'application/json';
    }
    return Taro.request({
        url,
        method,
        data:payload,
        header:header
    }).then(async(res)=>{
        if(res.data && res.data.result === "login"){
            Taro.navigateTo({
                url: '/pages/user/index'
            });
            return;
        }
        if(url === API_USER_LOGIN){
            await updateStorage(res.data);
        }
        return res.data;
    }).catch((err)=>{
        const defaultMsg = err.code === CODE_AUTH_EXPIRED ? '登录失效' : '请求异常';
        console.log('err',err);
        return Promise.reject({message:defaultMsg,...err}); 
    })
}
