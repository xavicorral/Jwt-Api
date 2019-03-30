var express         = require('express'),
    routes          = express.Router();
var userController  = require('./controller/user-controller');
var passport	    = require('passport');
const config      = require('./config/config');

routes.get('/', (req, res) => {
    return res.send('Hello, this is the API!');
});

routes.post('/register', userController.registerUser);
routes.post('/login', userController.loginUser);

routes.get('/private-area', passport.authenticate('jwt', { session: false }), (req, res) => {
    return res.json({ msg: `Hey ${req.user.email}! Wellcome to your private area.` });
});

module.exports = routes;
