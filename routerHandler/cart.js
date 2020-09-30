 async function add(req, res) {

     //导入相关模块
     const db = require('../config/db');
     const CONFIG = require('../config/config');

     //接收参数并验证合法性
     const params = {
         gid: req.query.gid,
         price: req.query.price,
         num: req.query.num,
         uid: ''
     };

     //判断商品ID是否有效
     let sqlStr = `select id from goods where id=${params.gid}`;
     db.query(sqlStr, (err, rst) => {
         console.log(rst.length);
         if (rst.length == 0) {
             return res.send(CONFIG.PARAM_GOODSID_INVALID);
         }
     });

     //判断商品是否已添加
     sqlStr = `select * from cart where gid=${params.gid} and uid=${params.uid}`;
     db.query(sqlStr, (err, rst) => {
         if (rst.length > 0) {
             return res.send({});
         }
     });

     //添加至购物车
     sqlStr = "insert into cart set ?";
     db.query(sqlStr, params, (err, rst) => {
         if (err) {
             return res.send(CONFIG.FAIL);
         }
         return res.send();
     });
 }

 function getlist(req, res) {
     let CONFIG = require('../config/config');
     let db = require('../config/db');

     let userid = '';

     let sqlStr = `select * from where uid=${userid} and goods.id=cart.uid`;
     db.query(sqlStr, (err, rst) => {

     });
 }

 function remove(req, res) {
     let CONFIG = require('../config/config');
     let db = require('../config/db');

     let uid = 1;
     let gid = req.query.uid;

     let sqlStr = `delete from cart where uid=${uid} and gid=${gid}`;
     db.query(sqlStr, (err, rst) => {
         res.send();
     });
 }

 function edit(req, res) {
     let CONFIG = require('../config/config');
     let db = require('../config/db');

     let uid = 1;
     let gid = req.query.gid;
     let num = req.query.num;

     let sqlStr = `update cart set num=${num} where uid=${uid} and gid=${gid}`;
     db.query(sqlStr, (err, rst) => {
         res.send();
     });
 }

 module.exports = {
     add,
     getlist,
     remove,
     edit
 }