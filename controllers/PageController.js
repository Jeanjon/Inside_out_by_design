let model = require('../models/model.js');
let async = require('async');
const { cachedDataVersionTag } = require('v8');


module.exports.Home =  function(request, response) {
    response.title = "Home - Inside Out by design";
    response.render('home', response);
};

module.exports.Login =  function(request, response) {
    response.title = "Home - Inside Out by design";

    let login = request.body;

    model.Connexion(login, function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
        
        let users = result[0];
        if(users){
            request.session.email = users.email;
            request.session.name = users.name;
            request.session.surname = users.surname;
        }
        
        response.redirect('/');
    });
};

module.exports.CreateAccount =  function(request, response) {
    response.title = "Home - Inside Out by design";

    let login = request.body;

    model.CreateAccount(login, function (err, result) {
        if (err) {
            console.log(err);
            return;
        }

        request.session.email = login.email;
        request.session.name = login.name;
        request.session.surname = login.surname;
        
        response.redirect('/');
    });
};

module.exports.About =  function(request, response) {
    response.title = "About us - Inside Out by design";
    response.render('about-us', response);
};

module.exports.Contact =  function(request, response) {
    response.title = "Contact - Inside Out by design";
    response.render('contact', response);
};

module.exports.Sign =  function(request, response) {
    response.title = "Sign In - Inside Out by design";
    response.render('sign-in-up', response);
};

module.exports.SignUp =  function(request, response) {
    response.title = "Sign Up - Inside Out by design";
    response.render('sign-up', response);
};

module.exports.LogOut =  function(request, response) {
    response.title = "Home - Inside Out by design";

    request.session.email = false;
    request.session.name = false;
    request.session.surname = false;
        
    response.redirect('/');
};

module.exports.Forums = function(request, response){
    response.title = "Forums - Inside Out by design";

        model.getTopic( function (err, result) {
            if (err) {
                console.log(err);
                return;
            }
    
            response.topic = result;
    
            console.log(result);
            
            response.render('forums', response);
        });
    
}

module.exports.Message = function(request, response){
    response.title = "Forums - Inside Out by design";
    let data = request.params.num;
        model.getMessage(data, function (err, result) {
            if (err) {
                console.log(err);
                return;
            }

            response.message = result;

            console.log(result);
            
            response.render('forum-message', response);
        });
}

module.exports.SendingMessage = function(request, response){
    response.title = "Forums - Inside Out by design";
    let data = request.params.num;
    let message = request.body.message;
    let author = request.session.name + " " + request.session.surname
    if (request.session.email) {
        model.saveMessage(message,data,author, function (err, result) {
            if (err) {
                console.log(err);
                return;
            }
            
            response.redirect('/forum-message/' + data);
        });
    } else{
        response.redirect('/sign-in-up');

    }
}
