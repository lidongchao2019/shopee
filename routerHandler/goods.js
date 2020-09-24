function getlist(req, res) {

    let CONFIG = require('../config/config');
    let db = require('../config/db');

    let page = req.query.page || 1;
    let search = req.query.search || '';


    let total = 0;
    let offset = 0;
    let pageCount = 0;
    let pageSize = 6;


    //查询数据总行数
    let sqlStr = `select count(*) as num from goods where name like '%${search}%'`;
    db.query(sqlStr, (err, rst) => {
        total = rst[0].num;
        offset = (page - 1) * pageSize;
        pageCount = Math.floor(total / pageSize);

    });

    //查询当前页数据
    sqlStr = `select * from goods where name like '%${search}%' limit ${offset},${pageSize}`;
    db.query(sqlStr, (err, rst) => {
        res.send(rst);
    });



}

function getinfo(req, res) {

    let CONFIG = require('../config/config');
    let db = require('../config/db');

    let id = req.query.id;
    if (id == NULL) {
        return res.send(CONFIG.PARAM_MISSING);
    }
    if (id == '') {
        return res.send(CONFIG.PARAM_NULL);
    }
    let sqlStr = `select * from goods where id=${id}`;

    db.query(sqlStr, (err, rst) => {
        if (err) {
            return res.send(CONFIG.FAIL);
        }
        if (rst.length > 0) {
            CONFIG.SUCCESS.data = rst[0];
            return res.send(CONFIG.SUCCESS);
        } else {
            return res.send(CONFIG.RESULT_NULL);
        }
    });
}

module.exports = {
    getlist,
    getinfo
}