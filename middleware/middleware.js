const bcrypt = require('bcryptjs');
const userDb = require('../models/usersModel');


checkRegistrationFields = (req, res, next) => {
    const user = req.body;
    //username, password, email, role 
    if(user.username && user.password && user.email && user.role){
        next();
    } else if(!user.username){
        return res.status(400).json({
            message: "New accounts require a username!"
        })
    } else if(!user.password){
        return res.status(400).json({
            message: "New accounts require a password!"
        })
    } else if(!user.email){
        return res.status(400).json({
            message: "New accounts require an email address!"
        })
    } else if(!user.role){
        return res.status(400).json({
            message: "New accounts require a role!"
        })
    } else{
        return res.status(400).json({
            message: "New accounts require a username, password, email and role!"
        })
    }
}

assignImage = (country) => {
    let images = {
        Bolivia: "",
        Brazil: "",
        Cambodia: "",
        Colombia: "",
        Ecuador: "",
        El_Salvador: "",
        Ghana: "YES",
        Guatemala: "",
        Haiti: "",
        Honduras: "",
        Kiribati: "",
        Madagascar: "",
        Mongolia: "",
        Nicaragua: "",
        Paraguay: "",
        Peru: "",
        Philippines: "",
        Sierra_Leone: "",
        Zimbabwe: ""
    }

    return images[country]
}

async function assignCountry(id) {
    const countryString = await userDb.fetchCountry(id)
    const imageurl = assignImage(countryString)

    return {country: countryString, image: imageurl}
}


checkIfUser = (req, res, next) => {
    const {id} = req.params;

    userDb.fetch(id)
    .then(user => {
        if(user){
            return res.json(user)
        } else {
            return res.status(404).json({
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

checkStoryFields = (req, res, next) => {
    const story = req.body;
    //title, description
    if(story.title && story.description){
        next();
    } else if(story.title){
        return res.status(400).json({
            message: "Stories require a description!"
        })
    } else if(story.description){
        return res.status(400).json({
            message: "Stories require a title!"
        })
    } else{
        return res.status(400).json({
            message: "Stories require a title and description!"
        })
    }
}

passwordProection = (password) => {
    if(password.length > 11){
        hashed = bcrypt.hashSync(password, 12);
        return hashed;
    } else {
        return res.status(400).json({
            message: "Password must be at least 12 characters long."
        })
    }
}

loginCheck = (req, res, next) => {
    const user = req.body;
    if(user.username && user.password){
        next();
    } else {
        res.status(400).json({
            message: "Invalid username or password."
        })
    }
}


module.exports = {
    checkRegistrationFields, checkStoryFields, passwordProection, loginCheck, assignCountry, checkIfUser
}