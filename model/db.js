'use strict';

var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit : 100, //important
    host     : process.env.DATABASE_SERVER,
    port     : process.env.DATABASE_PORT,
    user     : process.env.DATABASE_USER,
    password : process.env.DATABASE_PASSWORD,
    database : process.env.DATABASE_NAME,
    debug    :  false
});

module.exports = pool;