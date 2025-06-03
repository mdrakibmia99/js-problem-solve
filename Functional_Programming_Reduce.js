// 10. Task: Functional Programming - Reduce

// -Write a function that uses the reduce function to calculate the total value of an array of objects with a 'quantity' and 'price' property.interview

const cartItems = [
  { quantity: 2, price: 50 },
  { quantity: 1, price: 100 },
  { quantity: 3, price: 30 },
];

const totalValue = cartItems.reduce((total, item) => {
  return total + item.quantity * item.price;
}, 0);

console.log(totalValue);
// Output: 290
