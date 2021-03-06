const express = require('express');
const multer = require('multer');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

const upload = multer({
    dest: 'public/files/',
});

router.get('/', function(req, res){
    const filterMessages = req.query.chat || null;
    controller.getMessages(filterMessages)
        .then((messageList) => {
            response.success(req, res, messageList, 200);
        })
        .catch(e => {
            response.error(req, res, 'Unexpected error', 500, e);
        })
});

router.post('/', upload.single('file'), function(req, res){
    console.log(req.file);
    controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file)
        .then(() => {
            response.success(req, res, 'Creado correctamente', 201);
        })
        .catch(e => {
            response.error(req, res, 'Informacin Invalida ', 400, ' Error en el controlador ');
        });
});

router.patch('/:id', function (req, res) {
    controller.updateMessage(req.params.id, req.body.message).
    then((data) => {
        response.success(req, res, data, 200);
    })
    .catch(e => {
        response.error(req, res, 'Error interno', 500, e);
    });
});

router.delete('/:id', function(req, res) {
    controller.deleteMessage(req.params.id)
        .then(() => {
            response.success(req, res, `Usuario ${req.params.id} eliminado correctamente`, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error interno', 500, e);
        })
});



module.exports = router;

