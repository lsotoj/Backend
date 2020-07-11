const { Mongoose } = require("mongoose");
const db = require('mongoose');

//'mongodb+srv://lsotoj:8L99QsbBzbbi81m2@cluster0-fprvp.mongodb.net/Chat?retryWrites=true&w=majority'
db.Promise = global.Promise;
async function connect(url) {
    await db.connect(url, {
        useNewUrlParser: true, useUnifiedTopology: true,
    });
    console.log('[db] Conectada con éxito');
}

module.exports = connect;

