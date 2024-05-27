const reverseString = function(string) {
    string = string.split("");
    string = string.reverse();
    string = string.join("");
    return string;
};

reverseString("hello there");

// Do not edit below this line
module.exports = reverseString;