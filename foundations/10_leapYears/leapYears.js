const leapYears = function (year) {
    if (year <= 0 || !Number.isInteger(year)) return false;
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

// Do not edit below this line
module.exports = leapYears;
