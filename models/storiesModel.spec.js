const stories = require('./storiesModel');
const db = require('../data/dbConfig');

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
        //use for donor home page and global stories
        const storyList = await stories.fetch()

        expect(storyList.length).toBe(5)
    })

    it('should fetch a story by id', async () =>{
        //use for single story view
        const story = await stories.fetch(1)

        expect(story.id).toBe(1);
        expect(story.title).toBe('Poverty Discriminates: The Social PreCOP')
        expect(story.country).toBe('Kiribati')
    })

    it('should fetch stories by user id', async () =>{
        //use for Coordinator home page to show their stories
        const storyList = await stories.fetchUserStories(3)

        expect(storyList.length).toBe(2)
    })

    it('should add a new story', async () =>{
        //use for Coordinator posting new Story
        const storyObject = {
            title: 'What is WeFunder?',
            country: 'Madagascar',
            image: 'https://pixnio.com/free-images/people/madagascar-people-working-725x485.jpg',
            description: `We help everyone invest as little as $100 in the startups they love.  

            You can think of us like “Kickstarter for investing”. 
            
            Unlike Kickstarter, you are not buying a product or donating to an artist. Instead, you are investing in a business with the hope of earning a return. 
            
            You decide which companies are worthy of funding. If the business does well, you may make money.  If it doesn’t do well, you lose all your money. 
            
            Either way, you join a community of other investors who seek to help the startup succeed. You sometimes get neat perks from the companies too.`,
            user_id: 2
        }

        const newStory = await stories.add(storyObject)

        expect(newStory.id).toBe(6)
    })

    it('should update a story', async () =>{
        //use for Coordinator to update a story
        const storyObject = {
            title: 'We want to read less',
            country: 'Kiribati',
            image: 'https://c1.staticflickr.com/4/3719/12644930893_b0dd6ec54e_b.jpg',
            description: `There are many reasons.`,
            user_id: 1
        }
        const updated = await stories.update(1, storyObject)

        expect(updated.title).toBe('We want to read less')
        expect(updated.description).toBe(`There are many reasons.`)
        expect(updated.id).toBe(1)
    })

    it('should delete a story', async () =>{
        //use for Coordinator to delete a story
        const deleted = await stories.remove(5)
        
        expect(deleted).toBe(1)
    })
})