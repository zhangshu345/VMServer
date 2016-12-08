/**
 * Created by lzan13 on 2016/12/8.
 */
var express = require('express');

// 获取项目路由
var router = express.Router();

// 获取注册与登录相关控制器
var signController = require('../controls/sign');

/**
 * 获取七牛 uploadToken 路由
 */
router.get('/upload_token', signController.upToken());

// 模块出口
module.exports = router;
