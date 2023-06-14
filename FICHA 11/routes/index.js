var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController');
var jwt = require('jsonwebtoken');

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res) {
    res.render('login', { message: req.flash('loginMessage' )});
});

router.get('/signup', function(req, res) {
    res.render('signup', { message: req.flash('signupMessage') });
});

router.get('/profile', authenticateTokenFromSession, function(req, res) {
    var user = req.session.user
    res.render('profile', { user });
});

router.get('/unauthorized', function(req, res) {
    res.render('unauthorized');
});

router.get('/users', function(req, res) {
    res.render('users');
});



router.post('/signup', indexController.signup);

router.post('/login', indexController.login);

function authenticateTokenFromSession(req,res,next) {
    const token = req.session.token;
    if (token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) =>{
        if (err)
            return res.sendStatus(403);
        req.user = user;
        next();
    });
}


module.exports = router;