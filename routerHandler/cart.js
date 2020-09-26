function add(req, res) {

    //导入相关模块
    const db = require('../config/db');
    const CONFIG = require('../config/config');

    //接收参数并验证合法性
    const params = {
        gid: req.require.gid,
        price: req.require.price,
        num: req.require.num,
        userid: ''
    };

    //判断商品ID是否有效
    let sqlStr = "select id from goods where id=?";
    db.query(sqlStr, [gid], (err, rst) => {
        if (rst.length == 0) {
            return rst.send(CONFIG.PARAM_GOODSID_INVALID);
        }
    });

    //判断商品是否已添加
    sqlStr = "select * from cart where gid=? and userid=?";
    db.query(sqlStr, [gid, userid], (err, rst) => {
        if (rst.length > 0) {
            return rst.send({});
        }
    });

    //添加至购物车
    sqlStr = "insert into cart set ?";
    db.query(sqlStr, [], (err, rst) => {
        if (err) {
            return rst.send(CONFIG.FAIL);
        }
        return rst.send();
    });
}

function getlist(req, res) {
    let CONFIG = require('../config/config');
    let db = require('../config/db');

    let userid = '';

    let sqlStr = `select * from where uid=${userid} and goods.id=cart.uid`;
}

function remove(req, res) {

}

function edit(req, res) {

}

module.exports = {
    add,
    getlist,
    remove,
    edit
}