'use strict';
module.exports = function(app) {
  var NewBookList = require('../controller/appController');

  app.route('/primo/api/v1/newbooks')
    .get(NewBookList.list_all_newbooks);

};