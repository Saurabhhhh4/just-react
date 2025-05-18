const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const grouped = {};

numbers.forEach((num) => {
  const key = num % 3;
  if (!grouped[key]) {
    grouped[key] = [];
  }
  grouped[key].push(num);
});

console.log(grouped);
