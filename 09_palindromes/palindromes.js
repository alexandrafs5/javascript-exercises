const palindromes = function (word) {
    word = word
                .toLowerCase()
                .replace(/[\W_]/g, "");

    let reversed = word
                        .split("")
                        .reverse()
                        .join("");

    return reversed === word;
};

// Do not edit below this line
module.exports = palindromes;