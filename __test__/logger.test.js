'use strict';

const logger = require('../lib/middleware/logger');


describe('logger middleware', ()=> {

    let consoleSpy;

    beforeEach(()=> {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(()=> {
        consoleSpy.mockRestore();
    });

    it('properly logs request', ()=>{
        let req = {};
        let res = {};
        let next = jest.fn();
        logger(req, res, next);

        expect(consoleSpy).toHaveBeenCalled();
    });
});