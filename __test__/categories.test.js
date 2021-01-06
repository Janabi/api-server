'use strict';

require('@code-fellows/supergoose');

const categories = require('../lib/models/categories/categories.collection');

describe('Category Model', ()=> {
    let consoleSpy;
     beforeEach(()=> {
         consoleSpy = jest.spyOn(console, 'log').mockImplementation();
     });

     afterEach(()=> {
         consoleSpy.mockRestore();
     });
     
    it('it can create()', async()=> {
        const categoryObj = {
            name: 'apple',
            display_name: 'iOS',
            description: 'awesome'
        };
        const result = await categories.create(categoryObj);
        Object.keys(categoryObj).forEach(key=> {
            expect(result[key]).toEqual(categoryObj[key]);
        });
    });

    it('it can read()', async()=> {
        const categoryObj = {
            name: 'apple',
            display_name: 'iOS',
            description: 'awesome'
        };
        const result = await categories.create(categoryObj);
        const record = await categories.read(result._id); // give me back the result obj in an array
        // console.log("record >> ", record);
        Object.keys(categoryObj).forEach(key=> {
            expect(record[0][key]).toEqual(categoryObj[key]);
        });
    });

    it('it can update()', async()=> {
        const categoryObj = {
            name: 'apple',
            display_name: 'Mac',
            description: 'awesome'
        };
        const categoryObjUpdate = {
            name: 'apple',
            display_name: 'Mac',
            description: 'great!'
        };
        const result = await categories.create(categoryObj);
        const record = await categories.update(result._id, categoryObjUpdate)
        Object.keys(categoryObj).forEach(key=> {
            expect(record[key]).toEqual(categoryObj[key]);
        });
    });

    it('it can delete()', async()=> {
        const categoryObj = {
            name: 'apple',
            display_name: 'iOS',
            description: 'awesome'
        };
        const result = await categories.create(categoryObj);
        const record = await categories.delete(result._id); // give me back the result obj in an array
        // console.log("record >> ", record);
        Object.keys(categoryObj).forEach(key=> {
            expect(record[key]).toEqual(categoryObj[key]);
        });
    });
});