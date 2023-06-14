const { User } = require('../sequelize');
var jwt = require('jsonwebtoken');

function generateAccessToken(email, password) {
  var token = jwt.sign({email, password}, process.env.TOKEN_SECRET, {expiresIn: '1800s'});
  return token
}

exports.login = (req, res, next) =>{
  var { email } = req.body;
  var { password } = req.body;
  
  User.findOne({
      where: { email: email }
}).then(user =>{
  if (user != null){
    if (user.password == password) {
      var token = generateAccessToken(email, password);
      req.session.user = user;
      req.session.token = token;
      console.log(req.session)
      res.redirect('/profile');
    }
    else {
      req.flash('loginMessage', 'Oops! Wrong password.');
      res.redirect('/login');
    }
  } else {
    req.flash('loginMessage', 'No user found with that e-mail.');
    res.redirect('/login');
  }
})

}

exports.signup = (req, res, next) =>{
    var { email } = req.body;
    var { password } = req.body;
  
  User.findOne({where:{email: email}}).then(user =>{
    if (user == null) {
      User.create({email: email, password: password}).then(user =>{
        if (user != null) {
          var token = generateAccessToken(email, password);
          req.session.token = token;
          req.session.user = user;
          res.redirect('/profile');
        }
        else {
          req.flash('signupMessage', 'Something went wrong!');
          res.redirect('/signup');
        }
      })
    } else {
      req.flash('signupMessage', 'The email address you are trying to add, has been registered as an account already');
      res.redirect('/signup');
    }
  })
}