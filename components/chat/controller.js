const store = require('./store');

function addChat(users) {

    return new Promise((resolve, reject) => {
        if(!users || !Array.isArray(users) ) {
            console.error('[Chat Controller] Error en la lista de usuarios');
            return reject('Los datos son incorrectos');
        }

        const chat = {
            users: users,
        }
    
        store.add(chat);
        resolve(chat);
    });
  
}

function getChat(userId) {
    return new Promise((resolve, reject) => {
        resolve(store.list(userId));
    });
}
module.exports = {
    addChat,
    getChat,
}