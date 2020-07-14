const store = require('./store');

function addChat(users) {

    return new Promise((resolve, reject) => {
        if(!users) {
            console.error('[messageController] No hay datos de usuarios');
            return reject('Los datos son incorrectos');
        }

        const chat = {
            users: users,
        }
    
        store.add(chat);
        resolve(chat);
    });
  
}

function getChat() {
    return new Promise((resolve, reject) => {
        resolve(store.list());
    })
}
module.exports = {
    addChat,
    getChat,
}