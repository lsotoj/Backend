const express = require('express');
// import express from 'express'; --> es la sintaxis emc6 es lo mismo

var app = express();

app.use('/', function(req, res){
    res.send('Hola');
});

app.listen(3000);
console.log('la aplicacion está escuchando en http://localhost:3000');

