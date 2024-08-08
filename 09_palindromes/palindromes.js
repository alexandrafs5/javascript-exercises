const palindromes = function (word) {
    word = word
                .replace(/[^\w\s]|_/g, "")
                .toLowerCase();

    let reversed = word
                        .split("")
                        .reverse()
                        .join("");

    return reversed === word;
};

// Do not edit below this line
module.exports = palindromes;
