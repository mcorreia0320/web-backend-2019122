var express = require('express');
var userController = require('../controllers/userController');
var router = express.Router();
var jwt = require('jsonwebtoken');

/* GET users listing. */

router.use(authenticateTokenFromSession);

router.get('/get', userController.getAllUsers);
router.post('/', userController.createUser);



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
