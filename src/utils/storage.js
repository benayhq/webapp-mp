import Taro from '@tarojs/taro'

export default function set(key,value,time){
        try{
            if(!time || isNaN(time)){
                time = 60 * 60 * 24 * 7;
            }
            var cacheExpireDate = (new Date() -1) + time * 1000;
            var cacheVal = {val:value, exp: cacheExpireDate};
            Taro.setStorage({key:key,data:JSON.stringify(cacheVal)});
        }catch(e){
            console.log(e);
        }
        return null;
}

export default function remove(key){
    Taro.removeStorage(key);
}

export default function get(key){
        try{
            var cacheVal = Taro.getStorage(key);
            var result = JSON.parse(cacheVal);
            var now = new Date() - 1;
            // 缓存不存在
            if(!result){
                return null;
            }
            // 缓存过期
            if(now > result.exp){
                remove(key);
                return "";
            }
            return result.val;
        }
        catch(e)
        {
            remove(key);
            return null;
        }
}

