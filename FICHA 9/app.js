const express = require('express');
const Sequelize = require('sequelize');
const app = express();
const port = 3000;
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

const sequelize = new Sequelize('ficha9', 'root', '', {
    dialect: 'mysql'
});

const Person = sequelize.define('person',{
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    },
    profession: {
        type: Sequelize.STRING
    },
    age: {
        type: Sequelize.INTEGER
    }
});

app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());

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
     }) 
     .then(function () {
        return Person.findAll();
    })
    .then(function (persons) {
       console.log(persons);
    });

// Person.bulkCreate([
//     {firstName: 'Pedro', lastName: 'Jardim', profession: 'IT', age: 62 },
//     {firstName: 'Manuel', lastName: 'Matos', profession: 'IT', age: 12 },
//     {firstName: 'Maria', lastName: 'Figueira', profession: 'IT', age: 32 },
//     {firstName: 'Ana', lastName: 'Duarte', profession: 'IT', age: 82 },
//     {firstName: 'Luis', lastName: 'Faria', profession: 'IT', age: 42 }
// ]).then(function () {
//     return Person.findAll();
// })
// .then(function (persons) {
//     console.log(persons);
// });

app.get('/', function(req,res,next){
    Person.findAll()
    .then(persons =>{
        console.log("All people:", JSON.stringify(persons,null,4));
        res.send(persons);
    })
})

app.post('/', function(req,res,next){
    Person.create({
        firstName: "Miguel",
        lastName: "Correia",
        profession: "Student",
        age: 20
    }).then(miguel =>{
        console.log("Nova pessoa adicionada com o ID: ", miguel.id);
        res.status(201).send('Nova pessoa adicionada com o ID:' + miguel.id);
    })
})

app.delete('/', function(req,res,next){
    var id = req.body.id
    
    Person.destroy({
        where: {
            id: id
        }
    }).then((rowCount) =>{
        if (rowCount === 0){
            console.log("Não existe nenhuma pessoa com o ID indicado");
            res.status(400).send("Não existe nenhuma pessoa com o ID indicado");
        } else
            console.log("A pessoa com o ID: " + id + " foi eliminada com succeso e O numero de linhas afetadas foram: " + rowCount)
            res.status(200).send("A pessoa com o ID: " + id + " foi eliminada com succeso e O numero de linhas afetadas foram: " + rowCount)
    }).catch(error=>{
        if (error) {
            console.log('\0')
        }
    })
})

app.delete('/:id', function(req,res,next){
    var id = req.params.id
    
    Person.destroy({
        where: {
            id: id
        }
    }).then((rowCount) =>{
        if (rowCount === 0){
            console.log("Não existe nenhuma pessoa com o ID indicado");
            res.status(400).send("Não existe nenhuma pessoa com o ID indicado");
        } else
            console.log("A pessoa com o ID: " + id + " foi eliminada com succeso e O numero de linhas afetadas foram: " + rowCount)
            res.status(200).send("A pessoa com o ID: " + id + " foi eliminada com succeso e O numero de linhas afetadas foram: " + rowCount)
    }).catch(error=>{
        if (error) {
            console.log('\0')
        }
    })
})

app.get('/person', function(req,res,next){
    let id = req.query.id

    Person.findAll({
        where:{
            id: id
        }
    }).then((results)=>{
        if (results.length == 0) {
            console.log("Não existe nenhuma pessoa com o ID inserido");
            res.status(400).send("Não existe nenhuma pessoa com o ID inserido");
        } else 
            console.log("A pessoa com o ID: " + id + " é " + JSON.stringify(results,null,4));
            res.status(200).send(results);
        
    }).catch(error=>{
        if (error){
            console.log("\0")
        }
    })
})

app.get('/:id/:profession', function(req,res,next){
    let id = req.params.id
    let profession = req.params.profession

    Person.findAll({
        where:{
            id: id,
            profession: profession
        }
    }).then((results)=>{
        if (results.length == 0) {
            console.log("Não existe nenhuma pessoa com o ID: " + id + " que a sua profession seja " + profession);
            res.status(400).send("Não existe nenhuma pessoa com o ID: " + id + " que a sua profession seja " + profession);
        } else 
            console.log("A pessoa com o ID " + id + " e que a sua profession é " + profession + " é " + JSON.stringify(results,null,4));
            res.status(200).send(results);
        
    }).catch(error=>{
        if (error){
            console.log("\0")
        }
    })
})

app.put('/:id', function(req,res,next){
    let id = req.params.id;

    Person.update(
        {
            firstName: "Saul",
            lastName: "Pinto",
            profession: "Surfista",
            age: 22
        },
        {
            where:{ id: id }
        })
        .then((arrowsCount)=>{
            if (arrowsCount == 0) {
                console.log("Não existe nenhuma pessoa com o ID inserido");
                res.status(400).send("Não existe nenhuma pessoa com o ID inserido");
            } else 
                Person.findAll({
                    where:{
                        id:id
                    }
                }).then((results)=>{
                    console.log("Os dados da pessoa com ID " + id + " foram atualizados e agora são " + JSON.stringify(results,null,4))
                    res.status(200).send(results)
                })
            
        }).catch(error=>{
            if (error){
                console.log("\0")
            }
        })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
