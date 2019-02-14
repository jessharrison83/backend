const stories = require('./storiesModel');
const db = require('../data/dbConfig');

//test helper functions of get stories, get story by id, get stories by user id, post story, put story, delete story

describe('the stories model', () => {

    beforeEach( () => {
        return db.migrate.rollback()
            .then( () => {
                return db.migrate.latest()
                    .then( () => {
                        return db.seed.run()
                    })
            })
    })

    afterEach(async () => {
        await db.migrate.rollback()
    })


    it('should fetch all the stories', async () =>{
        //return array of stories
        //fetch()
    })

    it('should fetch a story by id', async () =>{
        //return single story
        //fetch(id)
    })

    it('should fetch stories by user id', async () =>{
        //fetchUserStories(userid)
        //return array of stories by that user
    })

    it('should add a new story', async () =>{
        //add(newStory)
    })

    it('should update a story', async () =>{
        //update(updatedStory)
    })

    it('should delete a story', async () =>{
        //remove(id)
        //expect(deleted).toBe(1)
    })
})