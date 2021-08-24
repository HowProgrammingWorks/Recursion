'use strict';

const getMaxCallStackSize = (i) => {
  try {
    return getMaxCallStackSize(++i);
  } catch (e) {
    return i;
  }
};

console.log(getMaxCallStackSize(0));
