const config = require('./config');
const mysql = require('mysql');
const db = mysql.createPool(config);

module.exports = db;