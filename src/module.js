'use strict';

var sum = (num1, num2) => {
    return num1 + num2;
};

var increment = (number) => {
    return ++number;
};

var decrement = (number) => {
    return --number;
};

var isNegativeNumber = (number) => {
    return number < 0;
};

var myModule = {
    sum: sum,
    increment: increment,
    decrement: decrement,
    isNegativeNumber: isNegativeNumber
};

module.exports = myModule;