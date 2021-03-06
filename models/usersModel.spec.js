// const users = require('./usersModel');
// const db = require('../data/dbConfig');

// describe('the users model', () => {

//     beforeEach( () => {
//         return db.migrate.rollback()
//             .then( () => {
//                 return db.migrate.latest()
//                     .then( () => {
//                         return db.seed.run()
//                     })
//             })
//     })

//     afterEach(async () => {
//         await db.migrate.rollback()
//     })


//     it('should get user by id', async () => {
//         //use for fetching profile info
//         const user = await users.fetch(1)

//         expect(user.username).toBe('nicholl');
//         expect(user.email).toBe('Nicholl.OblitasCosta@p3foundation.org');
//         expect(user.role).toBe('Coordinator');
//         expect(user.country).toBe('Kiribati');
//         expect(user.organization_title).toBe('CEO')
//     })

//     it('should get user country for a new post', async () => {
//         //use for providing country on new post
//         const country = await users.fetchCountry(1)

//         expect(country).toBe('Kiribati')
//     })

//     it('should post a new Coordinator', async () => {
//         //use for adding new user in registration
//         //user will be routed to login after successful
//         const userObject = {
//             username: 'froggy',
//             password: 'sdgIOJgfkljesiGDOS',
//             email: 'ribbit@frogsrule.com',
//             role: 'Coordinator',
//             country: 'Guatemala',
//             organization_title: 'Top Frog'
//         }
//         const newUser = await users.register(userObject)

//         expect(newUser.id).toBe(7)
//     })

//     it('should post a new Donor', async () => {
//         const userObject = {
//             username: 'KingChicken',
//             password: 'sdgIOJgfkljesiGDOS',
//             email: 'chickenzrul@gmail.com',
//             role: 'Donor'
//         }
//         const newUser = await users.register(userObject)

//         expect(newUser.id).toBe(7)
//     })

//     it('should find a user by username to login', async () => {
//         //use for logging in
//         const user = await users.login('rhett');

//         expect(user.username).toBe('rhett');
//         expect(user.id).toBe(2);
//     })

//     it(`should update a user's information`, async () => {
//         //use to update a user's profile
//         const userObject = {
//             username: 'anabanana',
//             password: 'HEKgsdiovJDSGNei',
//             email: 'ana@filipinohearts.com',
//             role: 'Coordinator',
//             country: 'Philippines',
//             organization_title: 'Janitor'
//         }
//         const updatedUser = await users.update(3, userObject);
//         console.log('updatedUser', updatedUser)

//         expect(updatedUser).toBe(1)
//     })

//     it('should delete a user', async () => {
//         //used to remove a user's profile
//         const deleted = await users.remove(4)

//         expect(deleted).toBe(1)
//     })

// })