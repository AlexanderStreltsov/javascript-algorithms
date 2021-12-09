/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 *
*/

function anagram(str1, str2) {
  const upperStr1 = str1.toUpperCase();
  const upperStr2 = str2.toUpperCase();

  if (upperStr1 === upperStr2) return false;

  if (upperStr1.length === upperStr2.length) {
    return [...upperStr1].reduce((res, item) => {
      if (![...upperStr2].includes(item)) {
        res = false
      }
      return res;
    }, true);
  } else {
    return false;
  }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false
console.log(anagram('hello', 'olleh')); // true
console.log(anagram('up', 'UP')); // false
console.log(anagram('UP', 'up')); // false
