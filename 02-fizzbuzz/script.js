/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 *
*/

function fizzBuzz(num) {
  const multipleThree = 'fizz';
  const multipleFive = 'buzz';
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(multipleThree + multipleFive);
    } else if (i % 3 === 0) {
        console.log(multipleThree);
    } else if (i % 5 === 0) {
        console.log(multipleFive);
    } else {
      console.log(i);
    }
  }
}

// Протестируйте решение, вызывая функцию с разными аргументами:
console.log(fizzBuzz(32));
console.log(fizzBuzz(90));
console.log(fizzBuzz(5));
