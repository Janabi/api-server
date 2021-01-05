'use strict';

require('@code-fellows/supergoose');

const products = require('../lib/models/products/products.collection');

describe('Product Model', ()=> {
    it('it can create()', async()=> {
        const productObj = {
            category: "electronics",
            name: 'apple',
            display_name: 'iOS',
            description: 'awesome'
        };
        const result = await products.create(productObj);
        Object.keys(productObj).forEach(key=> {
            expect(result[key]).toEqual(productObj[key]);
        });
    });

    it('it can read()', async()=> {
        const productObj = {
            category: "electronics",
            name: 'apple',
            display_name: 'iOS',
            description: 'awesome'
        };
        const result = await products.create(productObj);
        const record = await products.read(result._id); // give me back the result obj in an array
        // console.log("record >> ", record);
        Object.keys(productObj).forEach(key=> {
            expect(record[0][key]).toEqual(productObj[key]);
        });
    });

    it('it can update()', async()=> {
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
        const result = await products.create(productObj);
        const record = await products.update(result._id, productObjUpdate)
        Object.keys(productObj).forEach(key=> {
            expect(record[key]).toEqual(productObj[key]);
        });
    });

    it('it can delete()', async()=> {
        const productObj = {
            category: "electronics",
            name: 'apple',
            display_name: 'iOS',
            description: 'awesome'
        };
        const result = await products.create(productObj);
        const record = await products.delete(result._id); // give me back the result obj in an array
        // console.log("record >> ", record);
        Object.keys(productObj).forEach(key=> {
            expect(record[key]).toEqual(productObj[key]);
        });
    });
});