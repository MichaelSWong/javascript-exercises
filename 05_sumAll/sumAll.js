const sumAll = (num1, num2) => {
  if (
    typeof num1 !== 'number' ||
    typeof num2 !== 'number' ||
    num1 < 1 ||
    num2 < 1
  )
    return 'ERROR';
  let total = 0;
  let min = Math.min(num1, num2);
  let max = Math.max(num1, num2);
  for (let i = min; i <= max; i++) {
    total += i;
  }
  return total;
};

// Do not edit below this line
module.exports = sumAll;
