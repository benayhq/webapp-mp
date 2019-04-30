import fetch from './request';

export function createAction(options){
    const {url,payload,method,fetchOptions,cb,type,contentType} = options;
    console.log('dispatch',type);
    return (dispatch) => {
        return fetch({url,payload,method,contentType, ...fetchOptions}).then((res)=>{
            dispatch({type,payload: cb ? cb(res) : res})
            return res
        })
    }
}