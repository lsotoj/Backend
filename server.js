const express = require('express');
const app = express();
const server = require('http').Server(app);

const bodyParser = require('body-parser');
const socket =  require('./socket');
const db = require('./db');
const router = require('./network/routes');

db('mongodb+srv://lsotoj:8L99QsbBzbbi81m2@cluster0-fprvp.mongodb.net/Chat?retryWrites=true&w=majority');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

socket.connect(server);
router(app);

app.use('/app', express.static('public'));

server.listen(3000, function() {
    console.log('la aplicacion está escuchando en http://localhost:3000');
});

