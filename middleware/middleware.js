const bcrypt = require('bcryptjs');
const userDb = require('../models/usersModel');
const jwt = require('jsonwebtoken');

const jwtKey = process.env.JWT_SECRET || `add a .env file to the root of the project with a JWT_SECRET variable`;


//AUTHENTICATION

passwordProtection = (password, res) => {
    if(password.length > 11){
        hashed = bcrypt.hashSync(password, 12);
        return hashed;
    } else {
        return res.status(401).json({
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

generateToken = (user) => {
    const payload = {
        username: user.username,
        role: user.role,
        user_id: user.id,
    }

    const options = {
        expiresIn: '3h'
    }

    return jwt.sign(payload, jwtKey, options)
}

authenticate = (req, res, next) => {
    if (process.env.DB_ENV == "testing") {
        next();
    } else {
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
}

coordAuth = (req, res, next) => {
    if (process.env.DB_ENV == "testing") {
        next();
    } else {
        const token = req.get('Authorization');
        jwt.verify(token, jwtKey, (err, success) => {
            if(err){
                return res.status(401).json(err)
            } else {
                if(success.role === "Coordinator"){
                    next();
                } else {
                    res.status(401).json({
                        message: "Unauthorized request - only Coordinators can access this page."
                    })
                }
            }
        })
    }
}

verifyUser = (req, res, next) => {
    if (process.env.DB_ENV == "testing") {
        next();
    } else { 
        const token = req.get('Authorization');
        const {id} = req.params;
        jwt.verify(token, jwtKey, (err, success) => {
            if(err){
                return res.status(401).json(err)
            } else {
                if(success.user_id == id){
                    next();
                } else {
                    res.status(401).json({
                        message: "Unauthorized request - users can only edit their own account."
                    })
                }
            }
        })
    }
}


//FIELD CHECKING

checkRegistrationFields = (req, res, next) => {
    const user = req.body;

    if(!user.username || user.username.length > 100){
        if(!user.username){
            return res.status(422).json({
                message: "New accounts require a username."
            })
        } else {
            return res.status(400).json({
                message: "Username cannot be longer than 100 characters."
            })
        }
    }

    if(user.username && user.password && user.email && user.role){
        next();
    } else if(!user.password){
        return res.status(422).json({
            message: "New accounts require a password!"
        })
    } else if(!user.email){
        return res.status(422).json({
            message: "New accounts require an email address!"
        })
    } else if(!user.role){
        return res.status(422).json({
            message: "New accounts require a role!"
        })
    } else{
        return res.status(422).json({
            message: "New accounts require a username, password, email and role!"
        })
    }
}


checkStoryFields = (req, res, next) => {
    const story = req.body;
    
    if(story.title && story.description){
        if(story.title.length > 250){
            return res.status(400).json({
                message: "Story title cannot be longer than 250 characters."
            })
        }
        next();
    } else if(!story.title){
        return res.status(400).json({
            message: "Stories require a title!"
        })
    } else if(!story.description){
        return res.status(400).json({
            message: "Stories require a description!"
        })
    } else{
        return res.status(400).json({
            message: "Stories require a title and description!"
        })
    }
}


//ASSIGN COUNTRY FIELD AND IMAGES

assignImage = (country) => {
    let images = {
        Bolivia: { 
            small: "https://res.cloudinary.com/divjebnjg/image/upload/v1550340095/Bolivia.jpg",
            large: "https://res.cloudinary.com/divjebnjg/image/upload/v1550438986/Large%20Bountiful/Bolivia.jpg"
        },
        Brazil: {
            small: "https://res.cloudinary.com/divjebnjg/image/upload/v1550340095/Brazil.jpg",
            large: "https://res.cloudinary.com/divjebnjg/image/upload/v1550438986/Large%20Bountiful/Brazil.jpg"
        },
        Cambodia: {
            small: "https://res.cloudinary.com/divjebnjg/image/upload/v1550340095/Cambodia.jpg",
            large: "https://res.cloudinary.com/divjebnjg/image/upload/v1550438985/Large%20Bountiful/Cambodia.jpg"
        },
        Colombia: {
            small: "https://res.cloudinary.com/divjebnjg/image/upload/v1550340095/Colombia.jpg",
            large: "https://res.cloudinary.com/divjebnjg/image/upload/v1550438985/Large%20Bountiful/Colombia.jpg"
        },
        Ecuador: {
            small: "https://res.cloudinary.com/divjebnjg/image/upload/v1550340095/Ecuador.jpg",
            large: "https://res.cloudinary.com/divjebnjg/image/upload/v1550438985/Large%20Bountiful/Ecuador.jpg"
        },
        El_Salvador: {
            small: "https://res.cloudinary.com/divjebnjg/image/upload/v1550340096/El_Salvador.jpg",
            large: "https://res.cloudinary.com/divjebnjg/image/upload/v1550438986/Large%20Bountiful/El_Salvador.jpg"
        },
        Ghana: {
            small: "https://res.cloudinary.com/divjebnjg/image/upload/v1550340095/Ghana.jpg",
            large: "https://res.cloudinary.com/divjebnjg/image/upload/v1550438986/Large%20Bountiful/Ghana.jpg"
        },
        Guatemala: {
            small: "https://res.cloudinary.com/divjebnjg/image/upload/v1550340096/Guatemala.jpg",
            large: "https://res.cloudinary.com/divjebnjg/image/upload/v1550438985/Large%20Bountiful/Guatemala.jpg"
        },
        Haiti: {
            small: "https://res.cloudinary.com/divjebnjg/image/upload/v1550340096/Haiti.jpg",
            large: "https://res.cloudinary.com/divjebnjg/image/upload/v1550438985/Large%20Bountiful/Haiti.jpg"
        },
        Honduras: {
            small: "https://res.cloudinary.com/divjebnjg/image/upload/v1550340095/Honduras.jpg",
            large: "https://res.cloudinary.com/divjebnjg/image/upload/v1550438985/Large%20Bountiful/Honduras.jpg"
        },
        Kiribati: {
            small: "https://res.cloudinary.com/divjebnjg/image/upload/v1550340095/Kiribati.jpg",
            large: "https://res.cloudinary.com/divjebnjg/image/upload/v1550438987/Large%20Bountiful/Kiribati.jpg"
        },
        Madagascar: {
            small: "https://res.cloudinary.com/divjebnjg/image/upload/v1550340096/Madagascar.jpg",
            large: "https://res.cloudinary.com/divjebnjg/image/upload/v1550438985/Large%20Bountiful/Madagascar.jpg"
        },
        Mongolia: {
            small: "https://res.cloudinary.com/divjebnjg/image/upload/v1550340095/Mongolia.jpg",
            large: "https://res.cloudinary.com/divjebnjg/image/upload/v1550438986/Large%20Bountiful/Mongolia.jpg"
        },
        Nicaragua: {
            small: "https://res.cloudinary.com/divjebnjg/image/upload/v1550340096/Nicaragua.jpg",
            large: "https://res.cloudinary.com/divjebnjg/image/upload/v1550438985/Large%20Bountiful/Nicaragua.jpg"
        },
        Paraguay: {
            small: "https://res.cloudinary.com/divjebnjg/image/upload/v1550340096/Paraguay.jpg",
            large: "https://res.cloudinary.com/divjebnjg/image/upload/v1550438985/Large%20Bountiful/Paraguay.jpg"
        },
        Peru: {
            small: "https://res.cloudinary.com/divjebnjg/image/upload/v1550340095/Peru.jpg",
            large: "https://res.cloudinary.com/divjebnjg/image/upload/v1550438985/Large%20Bountiful/Peru.jpg"
        },
        Philippines: {
            small: "https://res.cloudinary.com/divjebnjg/image/upload/v1550340096/Philippines.jpg",
            large: "https://res.cloudinary.com/divjebnjg/image/upload/v1550438985/Large%20Bountiful/Philippines.jpg"
        },
        Sierra_Leone: {
            small: "https://res.cloudinary.com/divjebnjg/image/upload/v1550340095/Sierra_Leone.jpg",
            large: "https://res.cloudinary.com/divjebnjg/image/upload/v1550438987/Large%20Bountiful/Sierra_Leone.jpg"
        },
        Zimbabwe: {
            small: "https://res.cloudinary.com/divjebnjg/image/upload/v1550340095/Zimbabwe.jpg",
            large: "https://res.cloudinary.com/divjebnjg/image/upload/v1550438992/Large%20Bountiful/Zimbabwe.jpg"
        }
    }
    return images[country]
}

async function assignCountry(id, res) {
    const countryString = await userDb.fetchCountry(id)
    if(!countryString){
        return res.status(401).json({
            message: "This user does not have an assigned country, so cannot post stories."
        })
    }
    const imageObj = assignImage(countryString)
    return {
        country: countryString, 
        small_image: imageObj.small, 
        large_image: imageObj.large}
}


//VERIFY USER EXISTS

checkIfUser = (req, res, next) => {
    const {id} = req.params;

    userDb.fetch(id)
    .then(user => {
        if(user){
            next()
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

module.exports = {
    checkRegistrationFields, checkStoryFields, passwordProtection, loginCheck, assignCountry, checkIfUser, authenticate, generateToken, coordAuth, verifyUser
}