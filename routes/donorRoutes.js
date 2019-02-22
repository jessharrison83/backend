const userDb = require('../models/usersModel');
const storyDb = require('../models/storiesModel');

const {authenticate, verifyUser} = require('../middleware/middleware');

module.exports = server => {
    server.get('/donor/home', authenticate, home);
    server.get('/donor/:id', verifyUser, authenticate, userProfile);
    server.delete('/donor/:id', verifyUser, authenticate, deleteUser);
    server.put('/donor/:id', verifyUser, authenticate, editUser)
}

function home(req, res) {
    storyDb.fetch()
        .then(stories => {
            res.json(stories)
        })
        .catch(err => {
            res.status(500).json({
                message: "The stories could not be fetched."
            })
        })
}

function userProfile(req, res) {
    const {id} = req.params;

    userDb.fetch(id)
        .then(user => {
            if(user){
            res.json(user)
            } else {
                res.status(404).json({
                    message: "This user does not exist."
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                message: "This user could not be fetched."
            })
        })
}

function deleteUser(req, res) {
    const {id} = req.params;

    userDb.fetch(id)
        .then(user => {
            if(user){
                const theUser = user;

                userDb.remove(id)
                    .then(response => {
                        if(response){
                            res.status(200).json(theUser)
                        } else {
                            res.status(500).json({
                                message: "There was an error deleting this user."
                            })
                        }
                    })
            } else {
                res.status(404).json({
                    message: "This user does not exist."
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                message: "There was an error identifying that user."
            })
        })
}

function editUser(req, res) {
    const {id} = req.params;
    const updatedUser = req.body;

    userDb.fetch(id)
        .then(user => {
            if(user){
                userDb.update(id, updatedUser)
                    .then(response => {
                        userDb.fetch(id)
                            .then(user => {
                                res.json(user)
                            })
                    })
                    .catch(err => {
                        res.status(500).json({
                            message: "There was an error updating this user profile."
                        })
                    })
            } else {
                res.status(404).json({
                    message: "This user does not exist."
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                message: "There was an error identifying that user."
            })
        })
}