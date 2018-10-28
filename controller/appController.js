'use strict';

var NewBooks = require('../model/appModel.js');

exports.list_all_newbooks = function(req, res) {
    NewBooks.getAllNewBooks(function(err, NewBooks) {

        console.log('controller')
        if (err)
        res.send(err);
        //console.log('res', NewBooks);
        res.send(NewBooks);
    });
};