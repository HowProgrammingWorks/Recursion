'use strict';

const arr = [1, [2, 3, [4, [5]]], 6, [33]];

const showAllElementOfArray = (arr) => {
  for (const elem of arr) {
    Array.isArray(elem) ? showAllElementOfArray(elem) : console.log(elem);
  }
};
