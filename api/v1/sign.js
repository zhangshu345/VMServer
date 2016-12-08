/**
 * Created by lzan13 on 2016/12/8.
 * 登录注册以及验证相关接口模块
 */

/**
 * 获取事件代理模块儿，解决回调嵌套问题
 */
var EventProxy = require('eventproxy');

/**
 * 七牛 sdk
 */
var qiniu = require('qiniu');

/**
 * 获取配置文件
 */
var config = require('../app.config');

/**
 * 处理获取七牛上传 Token 请求
 * @param req
 * @param res
 */
exports.upToken = function (req, res) {
    // 配置七牛相关的 Access Key 和 Secret Key
    qiniu.conf.ACCESS_KEY = config.qn_access_key;
    qiniu.conf.SECRET_KEY = config.qn_secret_key;
    //要上传的空间
    var bucket = config.qn_bucket_name;
    // 上传文件的 key，在客户端上传文件时自定义规则生成的 md5 值
    var key = req.query.key;

    // 构建上传策略函数
    function uptoken(bucket) {
        var putPolicy = new qiniu.rs.PutPolicy(bucket + ":" + key);
        return putPolicy.token();
    }

    // 生成上传 Token
    token = uptoken(bucket, key);
    return token;
};