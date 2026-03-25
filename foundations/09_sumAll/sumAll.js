const sumAll = function (a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b) || a < 1 || b < 1) return "ERROR";
    const lowerEnd = Math.min(a, b);
    const upperEnd = Math.max(a, b);
    const numberOfValues = (upperEnd - lowerEnd) + 1;
    return (numberOfValues * (lowerEnd + upperEnd) / 2);
};

// Do not edit below this line
module.exports = sumAll;
