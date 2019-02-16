const bcrypt = require('bcryptjs');
const userDb = require('../models/usersModel');


checkRegistrationFields = (req, res, next) => {
    const user = req.body;

    if(user.username.length > 100){
        return res.status(400).json({
            message: "Username cannot be longer than 100 characters."
        })
    } else if (user.organization_title.length > 100){
        return res.status(400).json({
            message: "Organization title cannot be longer than 100 characters."
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
        Bolivia: "https://drive.google.com/open?id=1aMuMlXFFFxePgGCsUpye67mudLM_8tl7",
        Brazil: "https://drive.google.com/open?id=1TrHE-f1i4AvBZazKANZ4xH63wdsDmErc",
        Cambodia: "https://drive.google.com/open?id=12wcbodtfxIqarMxZeJJ0X9y1IwzaOgcP",
        Colombia: "https://drive.google.com/open?id=17L-m2nsU2MXGn3Qomfno-gfJR0UaHWRL",
        Ecuador: "https://drive.google.com/open?id=1QIuAhrGzy6c5ceh8A3xXQNBVRG92Doph",
        El_Salvador: "https://drive.google.com/open?id=1Buf2DFCuHFxnLV2SK_pkbEwdVRFPZ_kn",
        Ghana: "https://drive.google.com/open?id=1AGgnB4JaAJC1V7s01OJ6MxEqlq9Hcrdt",
        Guatemala: "https://drive.google.com/open?id=1k-bXKtJrT64P86KYpJvlH1MJa_Nc6bnE",
        Haiti: "https://drive.google.com/open?id=1vaQQVZoKEpgGRi9ZNpkQYQwOEEhh8od-",
        Honduras: "https://drive.google.com/open?id=1lyCwxFDtlgZdLh_7bxQLC115qYmX3pfE",
        Kiribati: "https://drive.google.com/open?id=1MjfLSz9N0DE2lzn-Lrkd_btMx0LqZknA",
        Madagascar: "https://drive.google.com/open?id=15ef_zSCaDluIucYxFnzxqNIZ00Xl9QNO",
        Mongolia: "https://drive.google.com/open?id=1cIkuyE9Jpp1OcF-bBarIv5Er4Vek-JIA",
        Nicaragua: "https://drive.google.com/open?id=19kJvvpf6pWGGNjh_xgaFH9lBx8aMbKaE",
        Paraguay: "https://drive.google.com/open?id=1GpAAzecZlmS2b2s-xEaYJasSVfdaxIIO",
        Peru: "https://drive.google.com/open?id=1uV30_SQH-gqUhT1ulPBoitxHvARMP79z",
        Philippines: "https://drive.google.com/open?id=1_IL8-PO-NwMome1zzP_4sBgVyOEHaWCc",
        Sierra_Leone: "https://drive.google.com/open?id=1RI1kI5zgNavStGIClzLJ4S8gr2ULlh-y",
        Zimbabwe: "https://drive.google.com/open?id=1FdtRvySOD9LgiC724ERv6I3X1mTwbJi-"
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