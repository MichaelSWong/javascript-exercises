const repeatString = (str, num) => {
  if (str === '') return '';
  if (num < 0) return 'ERROR';

  let result = '';
  for (let i = 1; i <= num; i++) {
    result += str;
  }
  console.log({ result });
  return result;
};

// Do not edit below this line
module.exports = repeatString;
