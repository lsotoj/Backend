const { Mongoose } = require("mongoose");
const Model = require('./model');
const db = require('mongoose');

db.Promise = global.Promise;
//mongodb+srv://lsotoj:8L99QsbBzbbi81m2@cluster0-fprvp.mongodb.net/Chat?retryWrites=true&w=majority
db.connect('mongodb+srv://lsotoj:8L99QsbBzbbi81m2@cluster0-fprvp.mongodb.net/Chat?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true,
});
console.log('[db] Conectada con éxito');

function addMessage(message) {

    const myMessage = new Model(message);
    myMessage.save();
}

function getMessages() {
    return list;
}

module.exports = {
    add: addMessage,
    list: getMessages,
    //get
    //update
    //delete
}