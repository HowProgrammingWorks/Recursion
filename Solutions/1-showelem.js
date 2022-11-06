'use strict';

const deepSum = (array) => {
  let sum = 0;
  for (const element of array) {
    if (typeof element === 'number') sum += element;
    if (Array.isArray(element)) sum += deepSum(element);
  }
  return sum;
};

const numbers = [1, [2, 3, [4, [5]]], 6, [33]];
const sum = deepSum(numbers);
console.log(sum);
