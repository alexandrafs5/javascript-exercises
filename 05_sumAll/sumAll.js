const sumAll = function(numberOne, numberTwo) {
    let result = 0;
    
    if (numberOne < numberTwo) {
        for (let i = numberOne; i <= numberTwo; i++) {
            result += i;
        }
    } else {
        for (let i = numberTwo; i <= numberOne; i++) {
            result += i;
        }
    }

    if (numberOne > 0 && numberTwo > 0 && Number.isInteger(numberOne) && Number.isInteger(numberTwo)) {
        return result;
    }
    return "ERROR";
};

sumAll(1, 5);

// Do not edit below this line
module.exports = sumAll;