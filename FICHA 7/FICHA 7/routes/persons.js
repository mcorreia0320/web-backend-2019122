var express = require('express');
var mysql = require('mysql');
var router = express.Router();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'FICHA_7'
});


/* GET users listing. */
router.get('/', function(req, res, next) {
    connection.query('SELECT * FROM persons', (err, results, fields) => {
        res.send(results);
    })
});

router.get('/:id', function(req, res, next) {
    var id = req.params.id;
    connection.query('SELECT * FROM persons WHERE person_id = ?', id, (err, results, fields) => {
        res.send(results);
    })
});

router.delete('/:id', function(req, res, next) {
    var id = req.params.id;
    connection.query('DELETE FROM persons WHERE person_id = ?', id, (err, results, fields) => {
        res.send(results);
    })
});

router.get('/:age/:profession', function(req, res, next) {
    var age = req.params.age;
    var profession = req.params.profession;
    connection.query('SELECT * FROM persons WHERE age= ? AND profession= ?', [age, profession], (err, results, fields) => {
        res.send(results);
    })
});

router.post('/', function(req, res, next) {
    var person = req.body;
    connection.query('INSERT INTO persons SET ?', [person], (err, results, fields) => {
        res.status(200).send("Usuario inserido com o id:" + results.insertId);
    })
});
router.put('/:id', function(req, res, next) {
    var id = req.params.id;
    var person = req.body;
    connection.query('UPDATE persons SET ? WHERE person_id = ?', [person, id], (err, results, fields) => {
        res.send(results);
    })
});



module.exports = router;
