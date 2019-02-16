const db = require('../data/dbConfig');
require('events').EventEmitter.defaultMaxListeners = 0;

const fetch = (id) => {
    return db('users').where('id', id)
        .then(user => {
            return user[0]
        })
}

const fetchCountry = (id) => {
    return db('users').where('id', id)
        .then(user => {
            return user[0].country
        })
}

const register = (user) => {
    return db('users').insert(user)
        .then( ([id]) => fetch(id))
}

const login = (username) => {
    return db('users').where('username', username).first()
}

const update = (id, user) => {
    return db('users').where('id', id).update(user)
}

const remove = (id) => {
    return db('users').where('id', id).del(id)
}



module.exports = {
    fetch, fetchCountry, register, login, update, remove
}