'use strict';

var fileHost = "https://lovemeipin.oss-cn-shanghai.aliyuncs.com/"; //你的阿里云地址最后面跟上一个/   在你当前小程序的后台的uploadFile 合法域名也要配上这个域名

var isDev = false;

var devConfig = {
  //aliyun OSS config
  uploadImageUrl: '' + fileHost, // 默认存在根目录，可根据需求改
  AccessKeySecret: 'szXQCcOdK3A6vqxghTrr87bRaR8SzD', // AccessKeySecret 去你的阿里云上控制台上找
  OSSAccessKeyId: 'LTAIhbFtsrCiv0qO', // AccessKeyId 去你的阿里云上控制台上找
  timeout: 87600 //这个是上传文件时Policy的失效时间
};

var prodConfig = {
  //aliyun OSS config
  uploadImageUrl: '' + fileHost, // 默认存在根目录，可根据需求改
  AccessKeySecret: 'B8KMw7ZVDPdClsuHPNiFlIMM7MqG3Z', // AccessKeySecret 去你的阿里云上控制台上找
  OSSAccessKeyId: 'LTAIcRsDgQtAYprI', // AccessKeyId 去你的阿里云上控制台上找
  timeout: 87600 //这个是上传文件时Policy的失效时间
};

module.exports = prodConfig;