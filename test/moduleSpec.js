describe('Stryker Tests [ module ]', () => {

    let expect = require('chai').expect,
        moduleTest = require('../src/module');

    it('Somar valores', () => {

        let numberOne = 10,
            numberTwo = 5,
            expectedSum = 15,
            sum = moduleTest.sum(numberOne, numberTwo);

        expect(sum).to.equal(expectedSum);
    });

    it('Incrementar valor +1', () => {

        let number = 5,
            expectedIncrement = 6,
            increment = moduleTest.increment(number);

        expect(increment).to.equal(expectedIncrement);
    });

    it('Decrementar valor -1', () => {

        let number = 2,
            expectedDecrement = 1,
            decrement = moduleTest.decrement(number);

        expect(decrement).to.equal(expectedDecrement);
    });

    it('Deve retornar verdadeiro para valor negativo', () => {

        let number = -2,
            isNegativeNumber = moduleTest.isNegativeNumber(number);

        expect(isNegativeNumber).to.be.true;
    });

    it('Deve retornar falso para valor positivo', () => {

        let number = 2,
            isNegativeNumber = moduleTest.isNegativeNumber(number);

        expect(isNegativeNumber).to.be.false;
    });

    xit('Deve retornar falso para valor zero', () => {

        let number = 0,
            isNegativeNumber = moduleTest.isNegativeNumber(number);

        expect(isNegativeNumber).to.be.false;
    });
});