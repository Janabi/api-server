'use strict';

const {server} = require('../lib/server');

const supergoose = require('@code-fellows/supergoose');

const mockRequest = supergoose(server);

describe('Checking API Routes for both Products and Categories', ()=>{
    // let consoleSpy;
    // beforeEach(()=> {
    //     consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    // });

    // afterEach(()=> {
    //     consoleSpy.mockRestore();
    // });

    // Categories api server
    it('can post a category item', async()=> {
        const categoryObj = {
            name: 'apple',
            display_name: 'iOS',
            description: 'awesome'
        };
        const data = await mockRequest.post('/api/v1/categories').send(categoryObj);
        
        const record = data.body;
        Object.keys(categoryObj).forEach(key=> {
            expect(record[key]).toEqual(categoryObj[key]);
        });
    });

    it('can get() a category item', async()=> {
        const categoryObj = {
            name: 'apple',
            display_name: 'iOS',
            description: 'awesome'
        };
        const data = await mockRequest.post('/api/v1/categories').send(categoryObj);
        const record = data.body;
        const categoryItemResponse =  await mockRequest.get(`/api/v1/categories/${record._id}`) ;
        const categoryItem = categoryItemResponse.body.data[0];
        Object.keys(categoryObj).forEach(key=> {
            expect(categoryItem[key]).toEqual(categoryObj[key]);
        });

    });

    it('can put() a category item', async()=> {
        const categoryObj = {
            name: 'apple',
            display_name: 'iOS',
            description: 'awesome'
        };
        const categoryObjUpdate = {
            name: 'apple',
            display_name: 'iOS',
            description: 'awesome'
        };
        const data = await mockRequest.post('/api/v1/categories').send(categoryObj);
        const record = data.body;
        const categoryItemResponse =  await mockRequest.put(`/api/v1/categories/${record._id}`).send(categoryObjUpdate);
        const categoryItem = categoryItemResponse.body[0];
        Object.keys(categoryObjUpdate).forEach(key=> {
            expect(categoryItem[key]).toEqual(categoryObjUpdate[key]);
        });
    });

    it('can delete() a category item', async()=> {
        const categoryObj = {
            name: 'apple',
            display_name: 'iOS',
            description: 'awesome'
        };
        const data = await mockRequest.post('/api/v1/categories').send(categoryObj);
        const record = data.body;
        const categoryItemResponse =  await mockRequest.delete(`/api/v1/categories/${record._id}`);
        const categoryItem = categoryItemResponse.body;
        Object.keys(categoryObj).forEach(key=> {
            expect(categoryItem[key]).toEqual(categoryObj[key]);
        });
    });


    // Categories api server
    it('can post() a product item', async()=> {
        const productObj = {
            category: "electronics",
            name: 'apple',
            display_name: 'iOS',
            description: 'awesome'
        };
        const data = await mockRequest.post('/api/v1/products').send(productObj);
        // console.log("data.body", data.body);
        
        const record = data.body;
        Object.keys(productObj).forEach(key=> {
            expect(record[key]).toEqual(productObj[key]);
        });
    });

    it('can get() a product item', async()=> {
        const productObj = {
            category: "electronics",
            name: 'apple',
            display_name: 'iOS',
            description: 'awesome'
        };
        const data = await mockRequest.post('/api/v1/products').send(productObj);
        const record = data.body;
        const productItemResponse =  await mockRequest.get(`/api/v1/products/${record._id}`) ;
        const productItem = productItemResponse.body.data[0];
        Object.keys(productObj).forEach(key=> {
            expect(productItem[key]).toEqual(productObj[key]);
        });

    });

    it('can put() a product item', async()=> {
        const productObj = {
            category: "electronics",
            name: 'apple',
            display_name: 'iOS',
            description: 'awesome'
        };
        const productObjUpdate = {
            category: "electronics",
            name: 'apple',
            display_name: 'iOS',
            description: 'great!'
        };
        const data = await mockRequest.post('/api/v1/products').send(productObj);
        const record = data.body;
        const productItemResponse =  await mockRequest.put(`/api/v1/products/${record._id}`).send(productObjUpdate);
        const productItem = productItemResponse.body[0];
        Object.keys(productObjUpdate).forEach(key=> {
            expect(productItem[key]).toEqual(productObjUpdate[key]);
        });
    });

    it('can delete() a product item', async()=> {
        const productObj = {
            category: "electronics",
            name: 'apple',
            display_name: 'iOS',
            description: 'awesome'
        };
        const data = await mockRequest.post('/api/v1/products').send(productObj);
        const record = data.body;
        const productItemResponse =  await mockRequest.delete(`/api/v1/products/${record._id}`);
        const productItem = productItemResponse.body;
        Object.keys(productObj).forEach(key=> {
            expect(productItem[key]).toEqual(productObj[key]);
        });
    });
})