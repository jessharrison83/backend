const userDb = require('../models/usersModel');
const storyDb = require('../models/storiesModel');
const bcrypt = require('bcryptjs');

const { passwordProtection, generateToken, checkRegistrationFields, loginCheck } = require('../middleware/middleware');

module.exports = server => {
    server.get('/', home)
    server.post('/register', checkRegistrationFields, register);
    server.post('/login', loginCheck, login);
}

function home(req, res){
    return res.status(200).json({
        message: "Welcome to the Bountiful API! The server is up and running. Refer to the ReadMe for specific endpoints."
    })
}

function register(req, res) {
    const user = req.body;
    user.password = passwordProtection(user.password, res);

    userDb.register(user)
        .then(response => {
            res.status(201).json({
                message: "Account created successfully!"
            })
        })
        .catch(err => {
            res.status(500).json({
                message: `Unable to add new account: ${err}`
            })
        })
}

function login(req, res) {
    const loginUser = req.body;

    userDb.login(loginUser.username)
        .then(user => {
            if(bcrypt.compareSync(loginUser.password, user.password) === true){
                const token = generateToken(user);

                res.status(200).json({
                    message: 'Login successful',
                    token: token,
                    user_id: user.id
                })
            } else {
                res.status(404).json({
                    message: "Invalid username or password"
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                message: "Unable to login"
            })
        })
}