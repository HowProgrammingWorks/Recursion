'use strict';

const pow = (base, power) => {
  if (power === 0) return 1;
  return pow(base, power - 1) * base;
};

console.log(pow(2, 3));
