const convertToCelsius = function(fahrenheit) {
  let result = (fahrenheit - 32) * 5/9;
  let resultRounded = result.toFixed(1);
  return parseFloat(resultRounded); 
};

const convertToFahrenheit = function(celsius) {
  let result = (celsius * 9/5) + 32;
  let resultRounded = result.toFixed(1);
  return parseFloat(resultRounded); 
};

convertToCelsius(100);
convertToFahrenheit(100);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};