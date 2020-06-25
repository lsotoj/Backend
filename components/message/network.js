const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.get('/', function(req, res){
    console.log(req.headers);
    res.header({
        "custom-header": "Nuestro valor personalizado"
    });
    response.success(req, res,'lista de mensajes');
});

router.post('/', function(req, res){
    
    controller.addMessage(req.body.user, req.body.message)
        .then(() => {
            response.success(req, res, 'Creado correctamente', 201);
        })
        .catch(e => {
            response.error(req, res, 'Informacin Invalida ', 400, ' Error en el controlador ');
        });
});



module.exports = router;

