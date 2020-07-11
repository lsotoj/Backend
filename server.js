const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');

const router = require('./network/routes');

db('mongodb+srv://lsotoj:8L99QsbBzbbi81m2@cluster0-fprvp.mongodb.net/Chat?retryWrites=true&w=majority');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use(router);

router(app);

app.use('/app', express.static('public'));

app.listen(3000);
console.log('la aplicacion está escuchando en http://localhost:3000');

