const { expect } = require('chai');
const print = require('@src/print');

describe('Print test', () => {
    it('| test print', (done) => {
        expect(print('a')).equal('Ron');
        done();
    });
});
