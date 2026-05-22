const fibonacci = function (n) {
    let sanitizedInput = +n;

    let zeroth = 0;
    let first = 1;
    let nth;

    if (sanitizedInput === 0) { return 0; }
    if (sanitizedInput === 1) { return first; }
    if (sanitizedInput < 0) { return "OOPS"; }

    for (let i = 0; i <= (sanitizedInput - 2); i++) {
        nth = zeroth + first;
        zeroth = first;
        first = nth;
    }
    return nth;
};

// Do not edit below this line
module.exports = fibonacci;
