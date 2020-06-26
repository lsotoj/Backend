const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.get('/', function(req, res){
    controller.getMessages()
        .then((messageList) => {
            response.success(req, res, messageList, 200);
        })
        .catch(e => {
            response.error(req, res, 'Unexpected error', 500, e);
        })
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

