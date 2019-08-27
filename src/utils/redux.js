import fetch from './request';

export function createAction(options){
    const {url,type,payload,method,fetchOptions,cb,contentType} = options;
    
    console.log('url',url);
    console.log('options',options)

    return (dispatch) => {
       return fetch({url,payload,method,contentType,...fetchOptions})
                .then((res)=>{
                    dispatch({type,payload:cb ? cb(res) : res})
                    return res;
       });
    }
}