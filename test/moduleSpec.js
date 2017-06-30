var expect = require('chai').expect;
var moduleMath = require('../src/module');

describe('module', () => {

    it('Soma dos dois números deve ser 15', () => {
        var numberOne = 10;
        var numberTwo = 5;
        expect(moduleMath.sum(numberOne, numberTwo)).to.equal(15);
    });

    it('O valor do incremento + 1 de 5 deve ser 6', () => {
        var number = 5;
        var increment = 6;
        expect(moduleMath.increment(number)).to.equal(increment);
    });

    it('Deve decrementar o número', () => {
        var number = 2;
        var decrement = 1;
        expect(moduleMath.decrement(number)).to.equal(decrement);
    });

    it('Deve retornar verdadeiro para valor negativo', () => {
        var negativeNumber = -2;
        expect(moduleMath.isNegativeNumber(negativeNumber)).to.be.true;
    });

    xit('Deve retornar falso para valor zero', () => {
        var neutralValue = 0;
        expect(moduleMath.isNegativeNumber(neutralValue)).to.be.false;
    });

    it('Deve retornar falso para valor positivo', () => {
        var positiveNumber = 4;
        expect(moduleMath.isNegativeNumber(positiveNumber)).to.be.false;
    });
});