let PageController = require('../controllers/PageController');

module.exports = function(app) {
    app.get('/', PageController.Home);
};