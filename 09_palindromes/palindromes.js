const palindromes = (str) => {
  let regularEx = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(regularEx, '');
  let len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
