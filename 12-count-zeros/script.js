/*
 * Задача 12: «Посчитать количество нулей»
 *
 * Напишите функцию countZeros(n), принимающую на вход натуральное число n.
 * Возвращать функция должна суммарное количество нулей, содержащихся во всех числах от 1 до n включительно.
 *
*/

function countZeros(n) {
  const arrNumsZero = [];
  for (let i = 1; i <= n; i++) {
    if ((''+i).includes('0')) arrNumsZero.push(i);
  }
  return arrNumsZero.reduce((result, item) => {
    result += [...''+item].reduce((sum, el) => {
      if (+el === 0) sum += 1;
      return sum;
    }, 0);
    return result;
  }, 0);
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(countZeros(20)); // 2 – два нуля, по одному в числах 10 и 20
console.log(countZeros(100)); // 11 – 11 нулей в числах: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
console.log(countZeros(342));
