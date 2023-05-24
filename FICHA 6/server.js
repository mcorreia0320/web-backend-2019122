const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

app.use(writeLog);

fs.appendFileSync("log.txt", "SERVER STARTED \n");

function writeLog(req) {
    var log = req.url + ", " + req.method + ", " + new Date().toString() + "\n";
    fs.appendFileSync("log.txt", log);
}

app.get('/', (req, res) => {
    writeLog(req);
    const body = "Hello World";
    res.writeHead(200, {
        'content-Length': Buffer.byteLength(body),
        'content-Type': 'text/plain'
    });
    res.end(body)
});

app.get('/html', (req, res) => {
    writeLog(req);
    const html = "<h1> Hello World </h1>";
    res.writeHead(200, {
        'content-Length': Buffer.byteLength(html),
        'content-Type': 'text/html'
    });
    res.end(html)
});

app.get('/html2', (req, res) => {
    writeLog(req);
    var html2 = fs.readFileSync("./index.html")
    res.writeHead(200, {
        'content-Length': Buffer.byteLength(html2),
        'content-Type': 'text/html'
    });
    res.end(html2)
});

app.get('/html/:name', (req, res) => {
    writeLog(req);
    var date = new Date();
    var name = req.params.name;
    var body = fs.readFileSync("./index.html", "utf-8");
    body = body.replace("{name}", name);
    body = body.replace("{date}", date.toDateString());
    res.writeHead(200, {
        'content-Length': Buffer.byteLength(body),
        'content-Type': 'text/html'
    });
    res.end(body)
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
