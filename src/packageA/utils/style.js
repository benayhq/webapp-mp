import Taro from '@tarojs/taro';

export function getWindowHeight(showTabBar = true){
    const info = Taro.getSystemInfoSync();

    const { windowHeight,statusBarHeight,titleBarHeight }  = info;

    return `${windowHeight}px`
}
