'use strict';

const timestamp = require('../lib/middleware/timestamp');


describe('timestamp middleware', ()=> {

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
        timestamp(req, res, next);
        
        expect(consoleSpy).toHaveBeenCalled();
    });
});