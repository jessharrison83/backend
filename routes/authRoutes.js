const userDb = require('../models/usersModel');
const storyDb = require('../models/storiesModel');
const bcrypt = require('bcryptjs');

//register POST endpoint
//login POST endpoint

module.exports = server => {
    server.post('/register', register);
    server.post('/login', login);
}

function register(req, res) {

}

function login(req, res) {

}

//home get sanity route, display a message so they know it's running