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

    it('Deve retornar true para número negativo', () => {
        expect(moduleMath.isNegativeNumber(-2)).to.equal(true);
    });

    it('Deve retornar false para número positivo', () => {
        var number = 2;
        var isNegativeNumber = moduleMath.isNegativeNumber(number);
        expect(number).not.to.eql(0);
        expect(isNegativeNumber).to.equal(false);
        expect(isNegativeNumber).not.to.be.null;
        expect(isNegativeNumber).not.to.be.undefined;
    });
});