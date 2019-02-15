const request = require('supertest');
const server = require('./server');

//describe donor route handlers
//describe coord route handlers
//describe auth route handlers

describe('the route handlers', () => {


    beforeEach( () => {
        return db.migrate.rollback()
            .then( () => {
                return db.migrate.latest()
                    .then( () => {
                        return db.seed.run()
                    })
            })
    });

    afterEach(async () => {
        await db.migrate.rollback()
    });


    describe('the auth route handlers', () => {
        
        describe('/register endpoint', () => {
            //tests for character limits, non-unique values, password issues.

            it('returns 201 status when successful', async () => {

            })

            it('returns 422 for missing information', async () => {

            })
        })

        describe('/login endpoint', () => {

            it('returns 200 status when successful', async () => {

            })

            it('returns 404 status when username or password is invalid', async () => {

            })   
        })
    
    })

    
    describe('the coord route handlers', () => {

        describe('get /coord/:id endpoint', () => {

            it('returns 200 status when successful', async () => {

            })

            it('returns the correct response', async () => {

            })
            
        })


        describe('post /coord/:id endpoint', () => {

            it('returns 201 status when successful', async () => {

            })

            it('returns the newly added post object', async () => {

            })

            it('returns 405 status when title is not unique', async () => {

            })
            
            it('returns 422 status when title is missing', async () => {

            })

            it('returns 422 status when description is missing', async () => {

            })
        })


        describe('put /story/:id endpoint', () => {

            it('returns 200 status when successful', async () => {

            })

            it('returns the newly updated object', async () => {

            })

            it('returns 405 status when title is not unique', async () => {

            })
            
            it('returns 422 status when title is missing', async () => {

            })

            it('returns 422 status when description is missing', async () => {

            })
            
        })

        describe('delete /story/:id endpoint', () => {

            it('returns 200 status when successful', async () => {

            })

            it('returns the deleted story object', async () => {

            })

            it('returns 404 status when id is invalid', async () => {

            })
            
        })

        describe('delete /coord/:id endpoint', () => {

            it('returns 200 status when successful', async () => {

            })

            it('returns the deleted user object', async () => {

            })

            it('returns 404 status when id is invalid', async () => {

            })
            
        })

        describe('put /coord/:id endpoint', () => {

            it('returns 200 status when successful', async () => {

            })

            it('returns the newly updated user object', async () => {

            })

            it('returns 404 status when id is invalid', async () => {

            })

            it('returns 405 status when field is not unique', async () => {

            })
            
            it('returns 422 status when field is missing', async () => {

            })
            
        })
        
    })
    
    describe('the donor route handlers', () => {

        describe('get /donor/home endpoint', () => {

            it('returns 200 status when successful', async () => {

            })

            it('returns the correct response', async () => {

            })
            
        })

        describe('delete /donor/:id endpoint', () => {

            it('returns 200 status when successful', async () => {

            })

            it('returns the deleted user object', async () => {

            })

            it('returns 404 status when id is invalid', async () => {

            })
            
        })

        describe('put /donor/:id endpoint', () => {

            it('returns 200 status when successful', async () => {

            })

            it('returns the newly updated user object', async () => {

            })

            it('returns 404 status when id is invalid', async () => {

            })

            it('returns 405 status when field is not unique', async () => {

            })
            
            it('returns 422 status when field is missing', async () => {

            })
            
            
        })
    
    })

})