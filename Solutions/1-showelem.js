'use strict';

const deepSum = (array) => {
  let sum = 0;
  for (const element of array) {
    if (typeof element === 'number') sum += element;
    if (Array.isArray(element)) sum += deepSum(element);
  }
  return sum;
};

module.exports = { deepSum };
