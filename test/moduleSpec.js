var expect = require('chai').expect;
var moduleTest = require('../src/module');

describe('Stryker Tests [ module ]', () => {

    it('Soma dos dois números deve ser 15', () => {
        var numberOne = 10;
        var numberTwo = 5;
        expect(moduleTest.sum(numberOne, numberTwo)).to.equal(15);
    });

    it('O valor do incremento + 1 de 5 deve ser 6', () => {
        var number = 5;
        var increment = 6;
        expect(moduleTest.increment(number)).to.equal(increment);
    });

    it('O valo rdo incremento -1 de 2 deve ser 1', () => {
        var number = 2;
        var decrement = 1;
        expect(moduleTest.decrement(number)).to.equal(decrement);
    });

    it('Deve retornar verdadeiro para valor negativo', () => {
        var negativeNumber = -2;
        expect(moduleTest.isNegativeNumber(negativeNumber)).to.be.true;
    });

    xit('Deve retornar falso para valor zero', () => {
        var neutralValue = 0;
        expect(moduleTest.isNegativeNumber(neutralValue)).to.be.false;
    });

    it('Deve retornar falso para valor positivo', () => {
        var positiveNumber = 4;
        expect(moduleTest.isNegativeNumber(positiveNumber)).to.be.false;
    });
});