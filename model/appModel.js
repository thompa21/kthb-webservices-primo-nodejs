'use strict';
var sql = require('./db.js');

//Task object constructor
var NewBooks = function(NewBooks){
};

NewBooks.createNewBook = function createNewBook(newBook, result) {    
        sql.query("INSERT INTO newbooks set ?", newBook, function (err, res) {
                
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });           
};
NewBooks.getNewBookById = function getNewBookById(id, result) {
        sql.query("Select * from newbooks where id = ? ", id, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
NewBooks.getAllNewBooks = function getAllNewBooks(result) {
        sql.query("Select * from newbooks order by activationdate desc", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('allnewbooks');  

                 result(null, res);
                }
            });   
};

module.exports= NewBooks;