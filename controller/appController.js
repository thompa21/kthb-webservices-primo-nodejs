'use strict';

var NewBooks = require('../model/appModel.js');

exports.list_all_newbooks = function(req, res) {
    NewBooks.getAllNewBooks(function(err, NewBooks) {
        if (err)
        res.send(err);
        res.send(NewBooks);
    });
};