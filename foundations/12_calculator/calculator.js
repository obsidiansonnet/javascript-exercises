const add = function (a, b) {
  return a + b;
};

const subtract = function (b, a) {
  return b - a;
};

const sum = function (array) {
  let finalValue = array.reduce(function (accumulator, element) { accumulator = accumulator + element; return accumulator }, 0);
  return finalValue;
};

const multiply = function (array) {
  let finalValue = array.reduce((product, element) => { product = product * element; return product; }, 1);
  return finalValue;
};

const power = function (base, exponent) {
  return base ** exponent;
};

const factorial = function (n) {
  if (n === 1 || n === 0) {
    return 1;
  }
  let product = 1;
  for (let i = 1; i <= n; i++) {
    product = product * i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
