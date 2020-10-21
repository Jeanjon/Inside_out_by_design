let express = require('express'),
    bodyParser = require('body-parser'),
    http = require('http'),
    path = require('path');

let app = express();
let port = 6800;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('port', port);
app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, './public')));

let exphbs = require('express-handlebars');
app.set('view engine', 'handlebars');
let handlebars = require('./helpers/handlebars.js')(exphbs);

app.engine('handlebars', handlebars.engine);

require("./router/router")(app);

http.createServer(app).listen(app.get('port'), function() {
    console.log("listening on port : " + app.get('port'));
})