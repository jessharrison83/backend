const bcrypt = require('bcryptjs')


checkRegistrationFields = (req, res, next) => {

}

checkStoryFields = (req, res, next) => {

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
    checkRegistrationFields, checkStoryFields, passwordProection, loginCheck
}