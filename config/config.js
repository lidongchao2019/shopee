const config = {
    SUCCESS: { code: 2000, msg: '操作成功' },
    FAIL: { code: 4000, msg: '操作失败' },

    USER_LOGIN: { code: 2001, msg: '注册成功' },
    USER_REGISTER: { code: 2002, msg: '登录成功' },
    RESULT_NULL: { code: 2003, msg: '没有数据' },

    PARAM_MISSING: { code: 4101, msg: '缺少参数' },
    PARAM_NULL: { code: 4102, msg: '参数值不能为空' },
    PARAM_PAGE_INVALID: { code: 4103, msg: '页码参数无效' },
    PARAM_GOODSID_INVALID: { code: 4104, msg: '商品参数无效' },
    PARAM_NUM_INVALID: { code: 4105, msg: '数量参数无效' },
    PARAM_INVALID: { code: 4106, msg: '参数无效' },

    USER_EXIST: { code: 4201, msg: '用户名已存在' },
    USER_NOT_EXIST: { code: 4202, msg: '用户名不存在' },
    USER_PWD_ERROR: { code: 4203, msg: '密码错误' },
    USER_EXPIR: { code: 4204, msg: '登录时间过期' },
    USER_ERROR: { code: 4205, msg: '用户身份错误' },

    JWT_SECRET: 'itheima',
    JWT_EXPIR: '2h'

}

module.exports = config;