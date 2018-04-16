/**
 * 项目配置文件使用时复制当前目录命名为 config.js 使用
 */
module.exports = {
    // 管理员
    admin: 'lzan13',

    // 端口
    port: 9999,

    /**
     * session 配置
     */
    session: {
        secret: 'secret123',
        key: 'key123',
        maxAge: 7 * 24 * 60 * 60 * 1000
    },

    /**
     * token 配置
     */
    token: {
        secret: 'secret123',
        expires: 30 * 24 * 60 * 60
    },

    /**
     * 数据库配置
     */
    mongodb_uri: 'mongodb://localhost:27017/vnotes',
    mongodb_opts: {
        useMongoClient: true,
        autoIndex: false, // Don't build indexes
        reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
        reconnectInterval: 500, // Reconnect every 500ms
        poolSize: 10, // Maintain up to 10 socket connections, If not connected, return errors immediately rather than waiting for reconnect
        bufferMaxEntries: 0
    },

    /**
     * 邮箱配置
     */
    mail: {
        host: 'smtp.exmail.qq.com', // 主机地址
        port: 465,
        auth: {
            user: '邮箱账户',
            pass: '客户端登录码'
        }
    },
    mail_from: '"VNotes" <邮箱账户 同上>',
    mail_subject_activate: 'VNotes 账户激活',
    mail_content_activate: '<div style="width:100%; background-color:#f8f8f8; margin: 0; padding: 0;"><div style="width: 100%; height: 36px;"></div><div style="min-width: 360px; max-width: 600px; margin: 20px auto; box-shadow: 0px 1px 2px #a8a8a8; border-radius:4px; font-size: 13px;"><div style="width:100%; color: #ffffff; background-color: #298afe; border-top-left-radius: 4px; border-top-right-radius: 4px; font-size: 22px; text-align:center;"><div style="padding: 20px;">激活你的VNotes账户</div></div><div style="width: 100%; text-align: left;  background-color: #ffffff; "><div style="min-width: 320px; max-width: 500px; margin: auto; font-family: Roboto-Regular,Helvetica,Arial,sans-serif; color: #232323; line-height: 1.5; padding: 4px 0;"><div style="font-size: 18px; padding: 20px 10px;">尊敬的{0}，您好！</div><div style="padding: 10px;">感谢您注册VNotes，请点击下边的链接激活您的账户</div><div style="padding: 5px 10px;"><a href="http://localhost:52157/api/v1/accounts/activate?account={1}&code={2}">激活账户</a></div><div style="padding: 10px;">如果你并没进行此类操作请忽略此邮件！</div><div style="padding: 24px 10px;">By-VNotes团队</div></div></div><div style="min-width: 360px; max-width: 600px; padding: 5px; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; background-color: #f8f8f8; color: #898989">©️2017 VNotes.</div></div><div style="width: 100%; height: 36px;"></div></div>',
    mail_subject_autocode: 'VNotes 验证码',
    mail_content_autocode: '',

    /**
     * 七牛相关配置
     */
    qn_access_key: 'access key',
    qn_secret_key: 'secret key',
    qn_bucket_name: 'bucket name',

    /**
     * 请求结果状态码
     */
    code: {
        success: 0,
        // common code
        err_sys: 1000,
        err_sys_db: 1001,
        err_invalid_param: 1002,

        // permission error code
        err_token_invalid: 2000,
        err_token_expired: 2001,
        err_not_permission: 2002,

        // account error code
        err_account_exist: 3000,
        err_account_name_exist: 3001,
        err_account_not_exist: 3002,
        err_account_deleted: 3003,
        err_account_no_activated: 3004,
        err_invalid_activate_link: 3005,
        err_invalid_password: 3006,

        // note error code
        err_article_not_exist: 4001
    },

    /**
     * 默认参数
     */
    // 分页大小
    default_limit: 10,

    /**
     * 构建响应体，并将响应结果返回给接口调用者，结果包含状态以及请求得到的数据
     * {
     *    "code": 0,
     *    "msg": 'success',
     *    "data": {}
     * }
     */
    result: {code: 0, msg: 'success', data: {}}
};