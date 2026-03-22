const removeFromArray = function (array, ...argument) {
    for (let i = 0; i < argument.length; i++) {
        for (let j = array.length - 1; j >= 0; j--) {
            if (argument[i] === array[j]) {
                array.splice(j, 1)
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
