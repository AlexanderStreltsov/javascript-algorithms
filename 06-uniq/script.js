/*
 * Задача 6: «Уникальные числа»
 *
 * Напишите функцию uniq(arr), принимающую на вход массив целых чисел.
 * Функция должна возвращать массив уникальных чисел, которые содержатся
 * в переданном массиве. То есть, дубликаты должны быть удалены.
 *
*/

// function uniq(arr) {
//   return arr.reduce((newArr, item) => {
//     if (Number.isInteger(item) && !newArr.includes(item)) {
//       newArr.push(item);
//     }
//     return newArr;
//   }, []);
// }

function uniq(arr) {
  return Array.from(new Set(arr));
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(uniq([1, 2, 5, 4, 2])); // [1, 2, 5, 4]
console.log(uniq([3, 3, 3, 5])); // [3, 5]
console.log(uniq([1, 4, 2, 2, 3, 4, 8])); // [1, 4, 2, 3, 8]
