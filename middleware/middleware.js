const bcrypt = require('bcryptjs');
const userDb = require('../models/usersModel');
const jwt = require('jsonwebtoken');

const jwtKey = process.env.JWT_SECRET || `add a .env file to the root of the project with a JWT_SECRET variable`;

// cors = (req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Credentials', true);
//     res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// }

generateToken = (username, id, role) => {
    const payload = {
        username: username,
        role: role,
        user_id: id,
    }

    const options = {
        expiresIn: '3h'
    }

    return jwt.sign(payload, jwtKey, options)
}

authenticate = (req, res, next) => {
    const token = req.get('Authorization');

    if(token){
        jwt.verify(token, jwtKey, (err, decoded) => {
            if(err) return res.status(401).json(err);

            req.decoded = decoded;
            next();
        })
    } else {
        return res.status(401).json({
            error: "No token provided on the Authorization header"
        })
    }
}

checkRegistrationFields = (req, res, next) => {
    const user = req.body;

    if(user.username.length > 100){
        return res.status(400).json({
            message: "Username cannot be longer than 100 characters."
        })
    }

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
        Bolivia: "https://res.cloudinary.com/divjebnjg/image/upload/v1550340095/Bolivia.jpg",
        Brazil: "https://res.cloudinary.com/divjebnjg/image/upload/v1550340095/Brazil.jpg",
        Cambodia: "https://res.cloudinary.com/divjebnjg/image/upload/v1550340095/Cambodia.jpg",
        Colombia: "https://res.cloudinary.com/divjebnjg/image/upload/v1550340095/Colombia.jpg",
        Ecuador: "https://res.cloudinary.com/divjebnjg/image/upload/v1550340095/Ecuador.jpg",
        El_Salvador: "https://res.cloudinary.com/divjebnjg/image/upload/v1550340096/El_Salvador.jpg",
        Ghana: "https://res.cloudinary.com/divjebnjg/image/upload/v1550340095/Ghana.jpg",
        Guatemala: "https://res.cloudinary.com/divjebnjg/image/upload/v1550340096/Guatemala.jpg",
        Haiti: "https://res.cloudinary.com/divjebnjg/image/upload/v1550340096/Haiti.jpg",
        Honduras: "https://res.cloudinary.com/divjebnjg/image/upload/v1550340095/Honduras.jpg",
        Kiribati: "https://res.cloudinary.com/divjebnjg/image/upload/v1550340095/Kiribati.jpg",
        Madagascar: "https://res.cloudinary.com/divjebnjg/image/upload/v1550340096/Madagascar.jpg",
        Mongolia: "https://res.cloudinary.com/divjebnjg/image/upload/v1550340095/Mongolia.jpg",
        Nicaragua: "https://res.cloudinary.com/divjebnjg/image/upload/v1550340096/Nicaragua.jpg",
        Paraguay: "https://res.cloudinary.com/divjebnjg/image/upload/v1550340096/Paraguay.jpg",
        Peru: "https://res.cloudinary.com/divjebnjg/image/upload/v1550340095/Peru.jpg",
        Philippines: "https://res.cloudinary.com/divjebnjg/image/upload/v1550340096/Philippines.jpg",
        Sierra_Leone: "https://res.cloudinary.com/divjebnjg/image/upload/v1550340095/Sierra_Leone.jpg",
        Zimbabwe: "https://res.cloudinary.com/divjebnjg/image/upload/v1550340095/Zimbabwe.jpg"
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

    if(story.title.length > 250){
        return res.status(400).json({
            message: "Story title cannot be longer than 250 characters."
        })
    }

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

passwordProtection = (password) => {
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
    checkRegistrationFields, checkStoryFields, passwordProtection, loginCheck, assignCountry, checkIfUser, authenticate, generateToken,
}