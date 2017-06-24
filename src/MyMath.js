'use strict';

var add = function (num1, num2) {
    return num1 + num2;
};

var addOne = function (number) {
    number++;
    return number;
};

var negate = function (number) {
    return -number;
};

var isNegativeNumber = function (number) {
    var isNegative = false;
    if (number < 0) {
        isNegative = true;
    }
    return isNegative;
};

var MyMath = {
    add: add,
    addOne: addOne,
    negate: negate,
    isNegativeNumber: isNegativeNumber
};

module.exports = MyMath;