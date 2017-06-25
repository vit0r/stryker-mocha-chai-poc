'use strict';

var sum = function (num1, num2) {
    return num1 + num2;
};

var increment = function (number) {
    return ++number;
};

var decrement = function (number) {
    return --number;
};

var isNegativeNumber = function (number) {
    return number < 0 ? true : false;
};

var myModule = {
    sum: sum,
    increment: increment,
    decrement: decrement,
    isNegativeNumber: isNegativeNumber
};

module.exports = myModule;