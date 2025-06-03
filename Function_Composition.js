// 3.Task: Function Composition

// -Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.
const square = (x) => x * x;
const double = (x) => x * 2;
const addFive = (x) => x + 5;

const composedFunction = (x) => addFive(double(square(x)));

console.log(composedFunction(10)); // Output: 205
console.log(composedFunction(5));  // Output: 55    
