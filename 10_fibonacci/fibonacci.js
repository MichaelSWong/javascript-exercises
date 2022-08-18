const fibonacci = (num) => {
  let cache = {};

  if (num in cache) {
    return cache[n];
  } else if (num < 0) {
    return 'OOPS';
  } else if (num < 2) {
    return parseInt(num);
  } else {
    cache[num] = fibonacci(num - 1) + fibonacci(num - 2);
    return cache[num];
  }
};

// Do not edit below this line
module.exports = fibonacci;
