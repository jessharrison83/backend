const userDb = require('../models/usersModel');
const storyDb = require('../models/storiesModel');
const bcrypt = require('bcryptjs');
const { generateToken, checkRegistrationFields, loginCheck } = require('../middleware/middleware');

//register POST endpoint
//login POST endpoint

module.exports = server => {
    server.post('/register', checkRegistrationFields, register);
    server.post('/login', loginCheck, login);
}

function register(req, res) {

}

function login(req, res) {

}

//home get sanity route, display a message so they know it's running