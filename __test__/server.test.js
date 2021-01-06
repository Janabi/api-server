'use strict';

 const {server} = require('../lib/server');
//  const mongoose = require('mongoose');
 
//  const MONGODB_URI = process.env.MONGODB_URI;
 
//  mongoose.connect(MONGODB_URI, {
//      useNewUrlParser: true,
//      useCreateIndex: true,
//      useFindAndModify: false,
//      useUnifiedTopology: true
//  });

 const supertest = require('@code-fellows/supergoose');

 const mockRequest = supertest(server);

 describe('Ckecking the route status for each method', ()=>{
     let consoleSpy;
     beforeEach(()=> {
         consoleSpy = jest.spyOn(console, 'log').mockImplementation();
     });

     afterEach(()=> {
         consoleSpy.mockRestore();
     });

     it('We must get the products from the database ', ()=> {
         return mockRequest.get('/api/v1/products').then(result=> {
             expect(result.status).toBe(200);
         })
     });

     it('We must post the products into the database ', ()=> {
        const productObj = {
            category: "electronics",
            name: 'apple',
            display_name: 'iOS',
            description: 'awesome'
        };
         return mockRequest.post('/api/v1/products').send(productObj).then(result=> {
             expect(result.status).toBe(201);
         })
     });

     it('We must update a product from the database ', ()=> {
        const productObj = {
            category: "electronics",
            name: 'apple',
            display_name: 'iOS',
            description: 'awesome'
        };
         return mockRequest.post('/api/v1/products').send(productObj).then(result=> {
            const productObjUpdate = {
                category: "electronics",
                name: 'apple',
                display_name: 'iOS',
                description: 'great!'
            };
            return mockRequest.put(`/api/v1/products/${result.body._id}`).send(productObjUpdate).then(result=>{
                expect(result.status).toBe(200);
            })
         })
     });

     it('We must delete a product from the database ', ()=> {
        const productObj = {
            category: "electronics",
            name: 'apple',
            display_name: 'iOS',
            description: 'awesome'
        };
         return mockRequest.post('/api/v1/products').send(productObj).then(result=> {
             return mockRequest.delete(`/api/v1/products/${result.body._id}`).then(result=> {
                 expect(result.status).toBe(200);
             })
         })
     });

     // Categories
     it('We must get the Categories from the database ', ()=> {
        return mockRequest.get('/api/v1/categories').then(result=> {
            expect(result.status).toBe(200);
        })
    });

    it('We must post the Categories into the database ', ()=> {
       const categoryObj = {
           name: 'apple',
           display_name: 'iOS',
           description: 'awesome'
       };
        return mockRequest.post('/api/v1/categories').send(categoryObj).then(result=> {
            expect(result.status).toBe(201);
        })
    });

    it('We must update a category from the database ', ()=> {
       const categoryObj = {
           name: 'apple',
           display_name: 'iOS',
           description: 'awesome'
       };
        return mockRequest.post('/api/v1/categories').send(categoryObj).then(result=> {
           const categoryObjUpdate = {
               name: 'apple',
               display_name: 'iOS',
               description: 'great!'
           };
           return mockRequest.put(`/api/v1/categories/${result.body._id}`).send(categoryObjUpdate).then(result=>{
               expect(result.status).toBe(200);
           })
        })
    });

    it('We must delete a category from the database ', ()=> {
       const categoryObj = {
           name: 'apple',
           display_name: 'iOS',
           description: 'awesome'
       };
        return mockRequest.post('/api/v1/categories').send(categoryObj).then(result=> {
            return mockRequest.delete(`/api/v1/categories/${result.body._id}`).then(result=> {
                expect(result.status).toBe(200);
            })
        })
    });
 }) 