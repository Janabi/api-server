'use strict';

const {server} = require('../lib/server');

const supertest = require('supertest');

const mockRequest = supertest(server);

describe('500 error', ()=>{
    let consoleSpy;
    beforeEach(()=> {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(()=> {
        consoleSpy.mockRestore();
    });

    it('We must get the products from the database ', ()=> {
        return mockRequest.get('/products').then(result=> {
            expect(result.status).toBe(201);
        }).catch(console.error);
    });

    it('We must post the products into the database ', ()=> {
        return mockRequest.post('/products').then(result=> {
            expect(result.status).toBe(201);
        }).catch(console.error);
    });

    it('We must update a product from the database ', ()=> {
        return mockRequest.put('/products/1').then(result=> {
            expect(result.status).toBe(201);
        }).catch(console.error);
    });

    // it('We must delete a product from the database ', ()=> {
    //     return mockRequest.delete('/products/1').then(result=> {
    //         expect(result.status).toBe(201);
    //     }).catch(console.error);
    // });

    it('We must get the categories from the database ', ()=> {
        return mockRequest.get('/categories').then(result=> {
            expect(result.status).toBe(201);
        }).catch(console.error);
    });

    it('We must post the categories into the database ', ()=> {
        return mockRequest.post('/categories').then(result=> {
            expect(result.status).toBe(201);
        }).catch(console.error);
    });

    it('We must update a category from the database ', ()=> {
        return mockRequest.put('/categories/1').then(result=> {
            expect(result.status).toBe(201);
        }).catch(console.error);
    });
})