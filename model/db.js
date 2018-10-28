'use strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host: "hyper-v1.lib.kth.se",
    port: "3306",
    user: "primo",
    password: process.env.DATABASE_PASSWORD,
    database: "primo"
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;