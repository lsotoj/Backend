const express = require('express');
const bodyParser = require('body-parser');
//import express from 'express'; --> es la sintaxis emc6 es lo mismo
const router = express.Router();

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);


router.get('/messaje', function(req, res){
    console.log(req.headers);
    res.header({
        "custom-header": "Nuestro valor personalizado"
    });
    res.send('Lista de mensajes');
});

router.post('/messaje', function(req, res){
    console.log(req.body);
    console.log(req.query);
    res.status(201).send([{Error: '', body: 'Creado correctamente'}]);
});

// app.use('/', function(req, res){
//     res.send('Hola');
// });

app.listen(3000);
console.log('la aplicacion está escuchando en http://localhost:3000');

