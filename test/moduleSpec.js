var expect = require('chai').expect;
var moduleMath = require('../src/module');

describe('module', () => {

    it('Soma dois números', () => {
        expect(moduleMath.sum(10, 5)).to.equal(15);
    });

    it('Deve incrementar o número', () => {
        expect(moduleMath.increment(5)).to.equal(6);
    });

    it('Deve decrementar o número', () => {
        expect(moduleMath.decrement(5)).to.equal(4);
    });

    it('Deve receber um valor true para número negativo', () => {
        expect(moduleMath.isNegativeNumber(-2)).to.equal(true);
    });

    it('Deve receber um valor false para número positivo', () => {
        expect(moduleMath.isNegativeNumber(2)).to.equal(false);
    });
});