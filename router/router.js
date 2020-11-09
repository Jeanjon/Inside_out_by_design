let PageController = require('../controllers/PageController');

module.exports = function(app) {
    app.get('/', PageController.Home);
    app.get('/home', PageController.Home);

    app.get('/about-us', PageController.About);

    app.get('/contact', PageController.Contact);

    app.get('/sign-in-up', PageController.Sign);
};