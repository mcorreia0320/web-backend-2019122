// TODO Implement all the models and business logic using sequelize

const { Sequelize, DataTypes } = require('sequelize');

const UserDataModel = require('./models/Users');

const sequelize = new Sequelize(process.env.DB_SCHEMA, process.env.DB_USER, process.env.DB_PASS, {
    dialect: 'mysql',
    host: process.env.DB_HOST
});

const User = UserDataModel(sequelize, DataTypes);

// Define relationships

sequelize.authenticate()
    .then(()=> {
        console.log("Connection has been established")
    })
    .catch(err => {
        console.error("Unable to connect",err);
    });

sequelize.sync({ force: false })
     .then(()=>{
         console.log('Database & tables created!');
     });

module.exports ={
    User
}