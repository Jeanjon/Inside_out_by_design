let PageController = require('../controllers/PageController');

module.exports = function(app) {
    app.get('/', PageController.Home);
    app.get('/home', PageController.Home);
    app.post('/home',PageController.Login);

    app.get('/about-us', PageController.About);

    app.get('/contact', PageController.Contact);

    app.get('/sign-in-up', PageController.Sign);
    app.get('/sign-up', PageController.SignUp);
    app.post('/sign-up', PageController.CreateAccount);

    app.get('/log-out', PageController.LogOut);
};