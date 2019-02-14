const users = require('./usersModel');
const db = require('../data/dbConfig');

//test helper function for get user by id, get user by username, post user, put user, delete user, get user info for story post

describe('the users model', () => {

    it('should get user by id', async () => {
        //fetch(id), return object
    })

    it('should get user country for a new post', async () => {
        //fetchCountry
        //only return country based on id
    })

    it('should post a new user', async () => {
        //register, return new id
    })

    it('should find a user by username to login', async () => {
        //login(username)
        //return only username and password
    })

    it(`should update a user's information`, async () => {
        //update(id)
    })

    it('should delete a user', async () => {
        //remove(id)
    })

})