var express = require('express');

var app = express();
var bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const { response } = require('express');
let urlEncodeParser = bodyParser.urlencoded({extended: false});

app.listen(3000, () => {
    console.log("Server running on port 3000");

    app.get('/', (req, res) =>{
        res.send('Home Page');
    });

    app.get('/persons', (req, res, next) => {
        res.json(["Tony", "Lisa", "Hommer", "Bill"]);
    });

    // send static html file
    app.get('/register', urlEncodeParser,(req, res) => {
        console.log(__dirname);
        res.sendFile(__dirname + '/register.html');
    });

    app.post('/person', urlEncodeParser, (req, res) => {
        if( !req.body) return res.sendStatus(400);
        console.log(req.body);
        res.send("Object received");
    });
});