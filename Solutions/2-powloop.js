'use strict';

const pow = (base, power) => {
  let result = 1;
  for (let i = 0; i < power; i++) {
    result *= base;
  }
  return result;
};

module.exports = { pow };
