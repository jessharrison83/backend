const db = require('../data/dbConfig');
require('events').EventEmitter.defaultMaxListeners = 0;

const fetch = (id) => {
    if(id){
        return db('stories').where('id', id)
            .then(stories => {
                return stories[0]
            })
    }
    return db('stories')
        .then(stories => {
            return stories
        })
}

const fetchUserStories = (userid) => {
    return db('stories').where('user_id', userid)
        .then(stories => {
            return stories
        })
}

const add = (story) => {
    return db('stories').insert(story)
        .then( ([id]) => fetch(id))
}

const update = (id, story) => {
    return db('stories').where('id', id).update(story)
}

const remove = (id) => {
    return db('stories').where('id', id).del(id)
}


module.exports = {
    fetch, fetchUserStories, add, update, remove
}