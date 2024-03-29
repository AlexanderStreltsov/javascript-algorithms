/*
 * Задача 10: «Факториал»
 *
 * Напишите функцию factorial(n), возвращающую факториал неотрицательного
 * целого числа. Факториал — это произведение всех натуральных чисел
 * от 1 до n включительно. Факториал 0 равен 1.
 *
*/

// function factorial(n) {
//   if (n === 0) return 1;

//   const num = [];
//   for (let i = 1; i <= n; i++) {
//     num.push(i);
//   }

//   return num.reduce((result, item) => {
//     return result * item;
//   }, 1);
// }

function factorial(n) {
  if (n < 1) {
      return 1;
  }
  return n * factorial(n - 1);
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(6)); // 720
