const express = require('express');
// import express from 'express'; --> es la sintaxis emc6 es lo mismo
const router = express.Router();
var app = express();

app.use(router);

router.get('/messaje', function(req, res){
    res.send('Lista de mensajes');
});

router.post('/messaje', function(req, res){
    res.send('Mensaje añadido');
});

// app.use('/', function(req, res){
//     res.send('Hola');
// });

app.listen(3000);
console.log('la aplicacion está escuchando en http://localhost:3000');

