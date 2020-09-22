function register(req, res) {

    const db = require('../config/db');

    //生成数据
    const param = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        r_date: ''
    }
    console.log(param);

    //判断参数是否有效
    if (!param.username || !param.password || !param.email) {
        return res.send({ code: 2, msg: '参数不完整，请检查' });
    }

    //检查用户名是否已存在
    let sqlStr = "select id from member where username=?";
    db.query(sqlStr, [param.username], (err, rst) => {
        if (rst) {
            return res.send({ code: 2, msg: '用户名已存在' });
        }
    });

    //注册用户
    sqlStr = "insert into member(username,password,email,r_date) values(?,?,?,?)";
    db.query(sqlStr, [param.username, param.password, param.email, param.r_date], (err, rst) => {
        if (err) {
            return res.send({ code: 0, msg: '注册失败' });
        }
        if (rst.affectedRows === 1) {
            return res.send({ code: 1, msg: '注册成功' });
        }
    });
}

function login(req, res) {

    const db = require('../config/db');
    const param = {
        username: req.body.username,
        password: req.body.password
    };
    let sqlStr = "select * from username=?";
    db.query(sqlStr, [param.username], (err, rst) => {
        console.log(rst);
        res.send({ code: 1, msg: '登录成功' });
    });
}

module.exports = {
    register,
    login
}