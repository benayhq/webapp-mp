import Taro from '@tarojs/taro'
export const getAuthInfo = () =>{
    const result = Taro.getStorage({key:'userinfo'}).then(res => {return res.data});
     return result;
}

