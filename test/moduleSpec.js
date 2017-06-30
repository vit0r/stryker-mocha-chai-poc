var expect = require('chai').expect;
var moduleTest = require('../src/module');

describe('Stryker Tests [ module ]', () => {

    it('Somar valores', () => {
        var numberOne = 10;
        var numberTwo = 5;
        var expectedSum = 15;
        var sum = moduleTest.sum(numberOne, numberTwo);
        expect(sum).to.equal(expectedSum);
    });

    it('Incrementar valor +1', () => {
        var number = 5;
        var expectedIncrement = 6;
        var increment = moduleTest.increment(number);
        expect(increment).to.equal(expectedIncrement);
    });

    it('Decrementar valor -1', () => {
        var number = 2;
        var expectedDecrement = 1;
        var decrement = moduleTest.decrement(number);
        expect(decrement).to.equal(expectedDecrement);
    });

    it('Deve retornar verdadeiro para valor negativo', () => {
        var number = -2;
        var isNegativeNumber = moduleTest.isNegativeNumber(number);
        expect(isNegativeNumber).to.be.true;
    });

    it('Deve retornar falso para valor positivo', () => {
        var number = 2;
        var isNegativeNumber = moduleTest.isNegativeNumber(number);
        expect(isNegativeNumber).to.be.false;
    });

    xit('Deve retornar falso para valor zero', () => {
        var number = 0;
        var isNegativeNumber = moduleTest.isNegativeNumber(number);
        expect(isNegativeNumber).to.be.false;
    });
});