function register(req, res) {

    const db = require('../config/db');
    const RESULT = require('../config/config');

    //生成数据
    const param = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        r_date: ''
    }

    //检查用户名是否已存在
    let sqlStr = "select id from member where username=?";
    db.query(sqlStr, [param.username], (err, rst) => {

        //如果存在该用户
        if (rst.length > 0) {
            return res.send(RESULT.USER_EXIST);
        }
        //注册用户
        sqlStr = "insert into member set ?";
        db.query(sqlStr, param, (err, rst) => {
            if (err) {
                return res.send(RESULT.FAIL);
            }
            if (rst.affectedRows === 1) {
                return res.send(RESULT.SUCCESS);
            }
        });
    });
}

function login(req, res) {

    const db = require('../config/db');
    const RESULT = require('../config/config');

    const param = {
        username: req.body.username,
        password: req.body.password
    };
    let sqlStr = "select password from member where username=?";
    db.query(sqlStr, [param.username], (err, rst) => {
        if (err) {
            console.log(err);
            res.send(RESULT.FAIL);
        }
        if (rst.length > 0) {
            if (rst[0].password == param.password) {
                //导入jwt模块，生成jwt字符串
                const jwt = require('jsonwebtoken');
                let jwtStr = jwt.sign({ username: param.username }, RESULT.JWT_SECRET, { expiresIn: RESULT.JWT_EXPIR });

                //将jwt字符串写入返回值
                RESULT.USER_LOGIN.jwt = jwtStr;

                //返回结果
                return res.send(RESULT.USER_LOGIN);
            } else {
                res.send(RESULT.USER_PWD_ERROR);
            }

        } else {
            res.send(RESULT.USER_NOT_EXIST);
        }

    });
}

module.exports = {
    register,
    login
}