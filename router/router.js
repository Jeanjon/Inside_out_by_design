let PageController = require('../controllers/PageController');

module.exports = function(app) {
    app.get('/', PageController.Home);
    app.get('/home', PageController.Home);

    app.get('/about-us', PageController.About);

    app.get('/contact', PageController.Contact);

    app.get('/forums', PageController.Forums)

    app.get('/forum-message/:num', PageController.Message)

    app.get('/sign-in-up', PageController.Sign);
    app.post('/sign-in',PageController.Login);
    app.get('/sign-up', PageController.SignUp);
    app.post('/sign-up', PageController.CreateAccount);

    app.get('/log-out', PageController.LogOut);
};