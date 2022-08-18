const add = (num1, num2) => {
  return num1 + num2;
};

const subtract = (num1, num2) => {
  return num1 - num2;
};

const sum = (numArray) => {
  if (numArray.length === 0) return 0;
  return numArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
};

const multiply = (numArray) => {
  if (numArray.length === 0) return 0;
  return numArray.reduce(
    (previousValue, currentValue) => previousValue * currentValue,
    1
  );
};

const power = (num1, num2) => {
  return Math.pow(num1, num2);
};

const factorial = (num) => {
  if (num === 0 || num === 1) {
    return 1;
  }
  if (num === 2) return num;
  return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
