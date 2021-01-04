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

    it('should respond with 404 on an error ', ()=> {
        return mockRequest.get('/produc').then(result=> {
            expect(result.status).toBe(404);
        }).catch(console.error);
    });
})