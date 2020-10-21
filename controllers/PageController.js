let model = require('../models/model.js');
let async = require('async');

module.exports.Home =  function(request, response) {
    response.title = "Home";
    response.render('home', response);
};
