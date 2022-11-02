## Рекурсія

1. Реалізуйте функцію `showAllElementOfArray(arr)`, яка приймає масив та виводить елементи даного масива та масивів які є елементами.
```js
showAllElementOfArray([1, 2, [3, 4], 5, 6]);
```

Результат:
```
1
2
3
4
5
6
```

### Використання циклів
2. Реалізуйте функцію `powLoop(base, power)`, яка працює ідентично функції `pow(base, power)`:
```js
const pow = (base, power) => {
    if (power === 0) return 1;
    return pow(base, power - 1) * base;
}
```
з використанням циклу.

```js
console.log(powLoop(2, 1)); // 2
console.log(powLoop(2, 3)); // 8
console.log(powLoop(2, 5)); // 32
```
