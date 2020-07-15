const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.post('/', function(req, res) {

    controller.addChat(req.body.users)
        .then(data => {
            response.success(req, res, data, 201);
        })
        .catch(err => {
            response.error(req, res, 'Internal error', 500, err);
        });
});

router.get('/:userId', function(req, res){
  
    controller.getChat()
        .then((messageList) => {
            response.success(req, res, messageList, 200);
        })
        .catch(e => {
            response.error(req, res, 'Unexpected error', 500, e);
        })
});

module.exports = router;
