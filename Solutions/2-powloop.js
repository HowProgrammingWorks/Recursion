'use strict';

const powLoop = (base, power) => {
  let res = 1;
  for (let i = 0; i < power; i++) {
    res *= base;
  }
  return res;
};
