var express = require('express');
var mysql = require('mysql');
var router = express.Router();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'projeto_1'
});


/* GET users listing. */

/* PARTE A */

/* EXERCICIO a */
router.get('/', function(req, res, next) {
    connection.query('SELECT * FROM rentals', (err, results, fields) => {
        if (err){
            res.status(500).send('Ocorreu um erro na procura de dados, verifique a query');
        }
        else{
            res.status(200).send(results);
        }
    })
});
/* EXERCICIO b */
router.post('/', function(req, res, next) {
    var rental = req.body;
    connection.query('INSERT INTO rentals SET ?', [rental], (err, results, fields) => {
        if (Object.keys(rental).length == 0) {
            res.status(400).send('O body se encontra vazio, insira as mudanças a fazer');
        }
        else if (err) {
            res.status(500).send('Ocorreu um erro na procura de dados, verifique a query');
        }
        else {
            res.status(201).send('Novo aluguer adicionado à base de dados com o id: ' + results.insertId);
        }
    })
});
/* EXERCICIO c */
router.get('/user', function(req, res, next) {
    var name = req.query.name
    connection.query('SELECT * FROM rentals WHERE customer = ?',[name], (err, results, fields) => {
        if (err) {
            res.status(500).send('Ocorreu um erro na procura de dados, verifique a query');
        }
        else if (results.length == 0) {
            res.status(404).send('O nome inserido não existe');
        }
        else {
            res.status(200).send(results);
        }
    })
});
/* EXERCICIO d */
router.put('/:id/discount/:value', function(req, res, next) {
    var id = req.params.id;
    var value = req.params.value / 100;
    connection.query('UPDATE rentals SET price = price - (price * ?) WHERE rentals_id = ?', [value, id], (err, results, fields) => {
        connection.query('SELECT * FROM rentals WHERE rentals_id = ?', [id], (err, results, fields) => {
            if (err) {
                res.status(500).send('Ocorreu um erro na procura de dados, verifique a query');
            }
            else if (results.length == 0) {
                res.status(404).send('Faltam parametros ou os parametros inseridos são invalidos');
            }
            else res.status(200).send(results);
        })
    })
});
/* EXERCICIO e */
router.get('/beforeSomeDate', function(req, res, next) {
    var date = req.body.date;
    connection.query('SELECT * FROM rentals WHERE pickup_date < ?', [date], (err, results, fields) => {
        if (err) {
            res.status(500).send('Ocorreu um erro na procura de dados, verifique a query');
        }
        else if ( Object.keys(date).length == 0) {
            res.status(400).send('O body se encontra vazio, insira as mudanças a fazer');
        }
        else res.status(200).send(results);
    })
});

/* PARTE B */

/* EXERCICIO a */
router.get('/:id',function(req,res,next){
    var id = req.params.id;
    connection.query('SELECT * FROM rentals WHERE rentals_id = ?', [id], (err,results,fields)=>{
        if (err) {
            res.status(500).send('Ocorreu um erro na procura de dados, verifique a query');
        }
        else if (results.length == 0) {
            res.status(404).send('O id inserido não existe');
        }
        else res.status(200).send(results);
    })
});

/* EXERCICIO b */
router.delete('/',function(req,res,next){
    var id = req.query.id;
    connection.query('DELETE FROM rentals WHERE rentals_id = ?', [id], (err,results,fields)=>{
        if (err){
            res.status(500).send('Ocorreu um erro na procura de dados, verifique a query');
        }
        else if (results.affectedRows == 0) {
            res.status(404).send('O ID inserido não existe');
        }
        else res.status(200).send('O ID ' + id + ' foi apagado com exito');
    })
});

/* EXERCICIO c */
router.get('/location/place', function(req, res, next) {
    var name = req.query.name;
    connection.query('SELECT * FROM rentals WHERE return_location = ?', [name], (err, results, fields) => {
        if (err) {
            res.status(500).send('Ocorreu um erro na procura de dados, verifique a query');
        }
        else if (results.length == 0) {
            res.status(404).send('O localização inserida não existe');
        }
        else res.status(200).send(results);
    })
});

/* EXERCICIO d */
router.put('/comment/:id', function(req, res, next) {
    var id = req.params.id;
    
    connection.query('SELECT * FROM rentals WHERE rentals_id = ?', [id], (err,results, fields) => {
        if (err){
            res.status(500).send('Ocorreu um erro na procura de dados, verifique a query');
        }
        else if (results.length == 0) {
            res.status(404).send('O ID inserido não existe');
        }
        else if (Object.keys(req.body).length == 0 ) {
            res.status(400).send('O body se encontra vazio, insira as mudanças a fazer');
        }
        else {
            var comentario_atual = results[0].comments;
            var updatedComment = comentario_atual + ', ' + req.body.comments;
        }
        connection.query('UPDATE rentals SET comments = ? WHERE rentals_id = ?',[updatedComment,id], (err, fields) => {
            
            connection.query('SELECT * FROM rentals WHERE rentals_id = ?',[id], (err,results, fields) => {
                res.status(200).send(results);
            })
        })
    })
    
});

/* EXERCICIO e */
router.get('/order/price',function(req,res,next){

    connection.query('SELECT * FROM rentals', (err,results,fields)=>{
        if (err){
            res.status(500).send('Ocorreu um erro na procura de dados, verifique a query');
        }
        
        results.sort((a,b) => a.price - b.price);
        
        res.status(200).send(results);
    })
});


module.exports = router;
