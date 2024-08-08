const palindromes = function (word) {
    let reversed = word.split("").reverse().join("");
    if (reversed === word) {
        return true;
    }
};

// Do not edit below this line
module.exports = palindromes;
