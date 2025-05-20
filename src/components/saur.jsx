//

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
  { name: "David", age: 30 },
];

const grouped = {};

people.forEach((person) => {
  if (!grouped[person.age]) {
    grouped[person.age] = [];
  }
  grouped[person.age].push(person.name);
});

console.log(grouped);

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
  { name: "David", age: 30 },
];

const grouped = {};

people.forEach((person) => {
  if (!grouped[person.age]) {
    grouped[person.age] = [];
  }
  grouped[person.age].push(person.name);
});

console.log(grouped);
