const convertToCelsius = function (tempInF) {
  const rawCelsius = (tempInF - 32) * 5 / 9
  return +(rawCelsius.toFixed(1));
};

const convertToFahrenheit = function (tempInC) {
  const rawFahrenheit = (tempInC * 9 / 5) + 32 
  return +(rawFahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
