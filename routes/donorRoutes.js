const userDb = require('../models/usersModel');
const storyDb = require('../models/storiesModel');

//HOME: donor get stories
//DELETE: donor delete profile by user id

module.exports = server => {
    server.get('/donor/home', home);
    server.delete('/donor/:id/delete', deleteUser);
}

function home(req, res) {

}

function deleteUser(req, res) {

}