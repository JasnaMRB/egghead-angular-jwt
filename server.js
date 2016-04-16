var express = require('express');
var faker = require('faker');
var cors = require('cors');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var jwtSecret = 'JD6xicO3c7U!V9248';
var jwtExpress = require('express-jwt');
var user = {
    username: "jasnamrb",
    password: "boo"
};
var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(jwtExpress({secret: jwtSecret})
    .unless({ path: ['/login']}));

app.get('/random-user', function (req, res) {
    var user = faker.helpers.userCard();
    user.avatar = faker.image.avatar();
    res.json(user);
});

app.post('/login', authenticate, function(req, res) {
    var token = jwt.sign({
        username: user.username
    }, jwtSecret);
    res.send({
        token: token,
        user: user
    });
});

app.listen(3000, function () {
    console.log('App listening on localhost:3000');
});

// UTIL FUNCTIONS

function authenticate(req, res, next) {
    var body = req.body;

    if (!body.username || !body.password) {
        res.status(400).end("Must provide a username and password");
    }
    if (body.username !== user.username || body.password !== user.password) {
        res.status(401).end("Username or password incorrect.");
    } else {
        res.status(200)
    }

    next();

}
