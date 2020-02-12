'use strict';
var pool = require('./db.js');

var NewBooks = function(NewBooks){
};

NewBooks.createNewBook = function createNewBook(newBook, result) {  
    pool.getConnection(function(err,connection){
        if (err) {
            result(null, err);
            return;
        }  
        connection.query("INSERT INTO newbooks set ?", newBook, function (err, res) {   
            connection.release();
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                console.log(res.insertId);
                result(null, res.insertId);
            }
        });
        connection.on('error', function(err) {      
            result(null, err);
            return;    
        });          
    })
};

NewBooks.getNewBookById = function getNewBookById(id, result) {
    pool.getConnection(function(err,connection){
        if (err) {
            result(null, err);
          return;
        }  
        connection.query("Select * from newbooks where id = ? ", id, function (err, res) {             
            connection.release();
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
            
            }
        });
        connection.on('error', function(err) {      
            result(null, err);
            return;    
        });  
    })
};

NewBooks.getAllNewBooks = function getAllNewBooks(result) {
    pool.getConnection(function(err,connection){
        if (err) {
            result(null, err);
            return;
        } 
        connection.query("Select * from newbooks order by activationdate desc", function (err, res) {
            connection.release();
            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
                console.log('allnewbooks');  
                result(null, res);
            }
        });
        connection.on('error', function(err) {      
            result(null, err);  
        });  
    })
};

module.exports= NewBooks;