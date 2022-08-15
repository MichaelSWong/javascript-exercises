const ftoc = (temp) => {
  let converstion = (temp - 32) * (5 / 9);
  return Math.round(converstion * 10) / 10;
};

const ctof = (temp) => {
  let converstion = temp * (9 / 5) + 32;
  return Math.round(converstion * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
