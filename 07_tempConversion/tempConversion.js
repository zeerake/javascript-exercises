const convertToCelsius = function(temprature) {
  return Math.round((temprature - 32) * (5 / 9) * 10) / 10
};

const convertToFahrenheit = function(temprature) {
  return Math.round(((temprature * 9) / 5 + 32) * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
