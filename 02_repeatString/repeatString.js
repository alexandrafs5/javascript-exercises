const repeatString = function(string, number) {
    let result = "";
    for (let i = 0; i < number; i++) {
        result += string;
    }
    return result;
};

repeatString("hey", 3);
// Do not edit below this line
module.exports = repeatString;
