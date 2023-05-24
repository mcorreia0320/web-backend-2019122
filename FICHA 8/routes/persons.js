var express = require('express');
var mysql = require('mysql');
var router = express.Router();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'FICHA_7'
});


/**
* @openapi
* definitions:
*   Person:
*     required:
*       - firstname
*       - lastname
*     properties:
*       firstname:
*         type: string
*       lastname:
*         type: string
*       age:
*         type: number
*       profession:
*         type: string  
*/
 
/**
 * @openapi
 * /:
 *   get:
 *      tags:
 *        - Person 
 *      summary: Read the table person
 *      description: Return all person
 *      produces:
 *        - aplication/json
 *      parameters:
 *          description: person
 *          in: path
 *          required: true
 *          type: number
 *      responses:
 *        200:
 *          description: all persons
 *          schema:
 *              href: '#/definitions/Person'
 */
/**
/**
 * @openapi
 * /person/{id}:
 *   get:
 *      tags:
 *        - Person 
 *      summary: Reads a single person by id
 *      description: Return a single person
 *      produces:
 *        - aplication/json
 *      parameters:
 *        - name: id
 *          description: Person's id
 *          in: path
 *          required: true
 *          type: int
 *      responses:
 *        200:
 *          description: A single person
 *          schema:
 *              href: '#/definitions/Person'
 *      
 *
 */
/**
 * @openapi
 * /person/{id}:
 *   delete:
 *      tags:
 *        - Person 
 *      summary: Delete a single person by id
 *      description: Delete a single person
 *      produces:
 *        - aplication/json
 *      parameters:
 *        - name: id
 *          description: Person's id
 *          in: path
 *          required: true
 *          type: int
 *      responses:
 *        200:
 *          description: person deleted successful
 *          schema:
 *              href: '#/definitions/Person'
 *        400:
 *          description: Invalid id supplied
 *        404:
 *          description: Id not found
 */
/**
 * @openapi
 * /person/{age}/{profession}:
 *   get:
 *      tags:
 *        - Person 
 *      summary: List persons by age and profession
 *      description: Delete a single person
 *      produces:
 *        - aplication/json
 *      parameters:
 *        - name: age
 *          description: Person's age
 *          in: path
 *          required: true
 *          type: int
 *        - name: profession
 *          description: Person's description
 *          in: path
 *          required: true
 *          type: string
 *      responses:
 *        200:
 *          description: List of persons by age and profession
 *          schema:
 *              href: '#/definitions/Person'
 *        400:
 *          description: Invalid age supplied or profession
 *        404:
 *          description: Age or profession not found
 */
/**
 * @openapi
 * /:
 *   post:
 *      tags:
 *        - Person 
 *      summary: Add a person to the table
 *      description: Add a person
 *      produces:
 *        - aplication/json
 *      parameters:
 *          -name: model
 *          description: person a partir do body
 *          in: body
 *          required: true
 *      responses:
 *        200:
 *          description: Person added successful
 *          schema:
 *              href: '#/definitions/Person'
 *        400:
 *          description: Invalid properity's
 *        404:
 *          description: person not found at the body
 */
/**
 * @openapi
 * /person/{id}:
 *   put:
 *      tags:
 *        - Person 
 *      summary: Update a single person by id
 *      description: Update a single person
 *      produces:
 *        - aplication/json
 *      parameters:
 *        - name: id
 *          description: Person's id
 *          in: path
 *          required: true
 *          type: int
 *      responses:
 *        200:
 *          description: person updated successful
 *          schema:
 *              href: '#/definitions/Person'
 *        400:
 *          description: Invalid id supplied
 *        404:
 *          description: Id not found
 */

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
