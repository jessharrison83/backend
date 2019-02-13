const userDb = require('../models/usersModel');
const storyDb = require('../models/storiesModel');

//HOME: coord get stories by user id
//POST: coord post new story
//PUT: coord edit story by story id
//DELETE: coord delete story by story id
//DELETE: coord profile by user id

module.exports = server => {
    server.get('/coord/:id/home', home);
    server.post('/coord/:id/post', addStory);
    server.put('/story/:id/edit', editStory);
    server.delete('/story/:id/delete', deleteStory);
    server.delete('/coord/:id/delete', deleteUser);
}

function home(req, res) {

}

function addStory(req, res) {

}

function editStory(req, res) {

}

function deleteStory(req, res) {

}

function deleteUser(req, res) {

}