const { Mongoose } = require("mongoose");
const Model = require('./model');
const db = require('mongoose');

db.Promise = global.Promise;
db.connect('mongodb+srv://lsotoj:8L99QsbBzbbi81m2@cluster0-fprvp.mongodb.net/Chat?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true,
});
console.log('[db] Conectada con éxito');

function addMessage(message) {

    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessages() {
    //return list;
    const messages = await Model.find();
    return messages;
}

async function updateText(id, message) {
    const foundMessage = await Model.findOne({
        _id: id
    });

    foundMessage.message = message;

    const newMessage = await foundMessage.save();
    return newMessage;
}

module.exports = {
    add: addMessage,
    list: getMessages,
    updateText: updateText,
    //get
    //delete
}