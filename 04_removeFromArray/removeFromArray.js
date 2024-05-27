const removeFromArray = function(array, elementRemove) {
    return array.filter(val => !elementRemove.includes(val));
};

removeFromArray([1, 2, 3, 4], 3);

// Do not edit below this line
module.exports = removeFromArray;