import Taro from '@tarojs/taro';

export default function jump(options){
  const { url, payload={}, method = 'navigateTo' } = options;

  Taro[method]({
    url:urlStringify(url,payload)
  });
}

function urlStringify(url, payload, encode = true) {
  
  const arr = Object.keys(payload).map(key =>
    `${key}=${encode ? encodeURIComponent(payload[key]) : payload[key]}`
  )

  return arr.length ? `${url}?${arr.join('&')}` : url
}
