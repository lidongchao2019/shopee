const mysql = require('mysql');

const config = {
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'www.shop.com'
};

const db = mysql.createPool(config);

module.exports = db;