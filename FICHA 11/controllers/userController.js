const { User } = require('../sequelize');

exports.getAllUsers = (req,res,next) =>{
    User.findAll().then(result =>{
        res.send(result);
    })
}

exports.createUser = (req,res,next) =>{
    User.create({email:'Jacky@gmail.com', password: 'jacky'}).then(user =>{
        res.send('Usuario criado com o email: ' + user.email);
    })
}