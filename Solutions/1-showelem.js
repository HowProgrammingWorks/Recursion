'use strict';

const arr = [1, [2, 3, [4, [5]]], 6, [33]];

const showAllElementOfArray = (arr) => {
  for (const elem of arr) {
    if (Array.isArray(elem)) showAllElementOfArray(elem);
    else console.log(elem);
  }
};

showAllElementOfArray(arr);
