const reverseString = function(string) {
    if(typeof string !== "string") {return "ERROR"};
    let reversedString = string.split("").reverse().join("");
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
