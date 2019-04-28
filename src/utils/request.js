// import Taro from '@tarojs/taro'
// import Taro from '@tarojs/taro';

// export default async function fetch(options){
//     const {url,payload,methed='GET',contentType} = options;
//     const header = {};
//     if(methed === 'POST'){
//         header['content-type'] = contentType == '' ? 'application/json' : 'application/x-www-form-urlencoded';
//     }
//     return Taro.request({
//         url,
//         method,
//         data:payload,
//         header
//     }).then(async(res)=>{
//         const {code,data} = res.data;
//         return data;
//     });
// }