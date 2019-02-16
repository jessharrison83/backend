const userDb = require('../models/usersModel');
const storyDb = require('../models/storiesModel');

//HOME: coord get stories by user id
//POST: coord post new story
//PUT: coord edit story by story id
//DELETE: coord delete story by story id
//DELETE: coord profile by user id

module.exports = server => {
    server.get('/coord/:id/home', home);
    server.get('/coord/:id', userProfile);
    server.put('/coord/:id', editUser);
    server.delete('/coord/:id', deleteUser);
    server.post('/coord/:id', addStory);
    server.put('/story/:id', editStory);
    server.delete('/story/:id', deleteStory);
}

//Bolivia, Brazil, Cambodia, Colombia, Ecuador, El Salvador, Ghana, Guatemala, Haiti, Honduras, Kiribati, Madagascar, Mongolia, Nicaragua, Paraguay, Peru, Philippines, Sierra Leone, Zimbabwe

function home(req, res) {
    const {id} = req.params;

    storyDb.fetchUserStories(id)
        .then(stories => {
            res.json(stories)
        })
        .catch(err => {
            res.status(500).json({
                message: "The stories could not be fetched."
            })
        })
}

//middleware to check IF user exists
//to check all fields are filled out
//to auto fill country based on user profile
//to auto assign image link for new story based on country

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


function addStory(req, res) {

}

function editStory(req, res) {

}

function deleteStory(req, res) {

}