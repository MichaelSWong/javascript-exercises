const reverseString = function (str) {
  let result = '';
  const test = Array.from(str);
  for (let i = test.length - 1; i >= 0; --i) {
    result += test[i];
  }
  return result;
};

// Do not edit below this line
module.exports = reverseString;
