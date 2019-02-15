const userDb = require('../models/usersModel');
const storyDb = require('../models/storiesModel');

//HOME: coord get stories by user id
//POST: coord post new story
//PUT: coord edit story by story id
//DELETE: coord delete story by story id
//DELETE: coord profile by user id

module.exports = server => {
    server.get('/coord/:id/home', home);
    server.post('/coord/:id', addStory);
    server.put('/story/:id', editStory);
    server.delete('/story/:id', deleteStory);
    server.delete('/coord/:id', deleteUser);
    server.put('/coord/:id', editUser)
}

//Bolivia, Brazil, Cambodia, Colombia, Ecuador, El Salvador, Ghana, Guatemala, Haiti, Honduras, Kiribati, Madagascar, Mongolia, Nicaragua, Paraguay, Peru, Philippines, Sierra Leone, Zimbabwe

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

function editUser(req, res) {
    
}