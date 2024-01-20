const convertToCelsius = function (tempDegree) {
  const degreeCelsius = ((tempDegree - 32) * 5) / 9;
  return +degreeCelsius.toFixed(1);
};

const convertToFahrenheit = function (tempDegree) {
  const degreeFahrenheit = (tempDegree * 9) / 5 + 32;
  return +degreeFahrenheit.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
