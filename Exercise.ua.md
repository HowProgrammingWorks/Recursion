## Рекурсія

1. Реалізуйте функцію `deepSum(nested)`, яка приймає масив чисел та вкладених масивів довільної глибини та повертає суму всіх чисел вкладених масивів.
```js
const numbers = [1, [2, 3, [4, [5]]], 6, [33]];
const sum = deepSum(numbers);
console.log(sum);
```

Результат:
```
54
```

### Використання циклів

2. Реалізуйте функцію `pow(base, power)`, яка працює ідентично наступній, але з використанням циклу:
```js
const pow = (base, power) => {
  if (power === 0) return 1;
  return pow(base, power - 1) * base;
}
```

Приклади:

```js
console.log(pow(2, 1)); // 2
console.log(pow(2, 3)); // 8
console.log(pow(2, 5)); // 32
```
