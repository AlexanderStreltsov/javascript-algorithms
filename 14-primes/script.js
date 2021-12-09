/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 *
*/

function primes(num) {
  const arrBeforeNum = []
  for (let i = 2; i <= num; i++) {
    arrBeforeNum.push(i);
  }

  const arrNotPrimes = arrBeforeNum.reduce((arr, item) => {
    for (let i = 2; i < item; i++) {
      if (item % i === 0 && !arr.includes(item)) arr.push(item);
    }
    return arr;
  }, []);

  return arrBeforeNum.filter(item => !arrNotPrimes.includes(item));
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(primes(6)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]
