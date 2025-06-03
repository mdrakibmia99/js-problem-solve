// 6.Task: Array Reduction

// -Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.

const numbers = [1, 2, 3, 4, 5, 6,548,8879];

const sumEven = numbers.reduce((sum, num) => {
  return num % 2 === 0 ? sum + num : sum;
}, 0);

console.log(sumEven);
// Output: 560 (2 + 4 + 6 + 548)