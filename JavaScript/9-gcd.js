'use strict';

const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

// const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

console.log(gcd(12, 78));
