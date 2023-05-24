const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

// Middleware que converte o 
app.use(express.json());

function readFile(path) {
    var content = fs.readFileSync(path);
    return JSON.parse(content);
}

var content = readFile('./person.json');
console.log(content);

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/users', (req, res) => {
    res.send(content);
})
app.post('/users', (req, res) => {
    var person = req.body;
    var size = Object.keys(content).length;
    var id = size + 1;
    person.id = id;
    content["person" + id] = person;

    res.send ("ID: " + id);
})

app.delete('/users/:id', (req, res) => {
    var id = req.params.id;
    delete content["person" + id];
    res.send(content);
})

app.get('/users/:id', (req, res) => {
    var id = req.params.id;

    res.send(content["person" + id]);
})
app.put('/users/:id', (req, res) => {
    
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
