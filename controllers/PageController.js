let model = require('../models/model.js');
let async = require('async');

module.exports.Home =  function(request, response) {
    response.title = "Home - Inside Out by design";
    response.render('home', response);
};

module.exports.About =  function(request, response) {
    response.title = "About us - Inside Out by design";
    response.render('about-us', response);
};

module.exports.Contact =  function(request, response) {
    response.title = "Contact - Inside Out by design";
    response.render('contact', response);
};
