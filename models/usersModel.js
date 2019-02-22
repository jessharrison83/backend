const db = require('../data/dbConfig');
require('events').EventEmitter.defaultMaxListeners = 0;

const fetch = (id) => {
    return db('users').where('id', id)
        .then(user => {
            const userObj = {
                id: user[0].id,
                username: user[0].username,
                email: user[0].email,
                role: user[0].role,
                country: user[0].country,
                organization_title: user[0].organization_title,
                created_at: user[0].created_at
            }
            return userObj
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