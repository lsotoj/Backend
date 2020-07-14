const Model = require('./model');

function addChat(users) {

    const myChat = new Model(users);
    console.log(myChat);
    return myChat.save();
}

async function getChat(filterUser) {
    return new Promise((resolve, reject) => {
        let filter = {};
        if (filterUser !== null) {
            filter = { user: filterUser };
        }
        Model.find(filter)
            .populate('users')
            .exec((error, populated) => {
                if(error) {
                    reject(error);
                    return false;
                }

                resolve(populated);
            })
    })

    //const user = await Model.find();
    //return user;    
}

module.exports = {
    add: addChat,
    list: getChat,
}