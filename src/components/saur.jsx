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

// const grouped = {};

// people.forEach((person) => {
//   if (!grouped[person.age]) {
//     grouped[person.age] = [];
//   }
//   grouped[person.age].push(person.name);
// });

// console.log(grouped);

// import React, { useState } from "react";

// 🔹 HOC function
// function withCounter(WrappedComponent) {
//   return function EnhancedComponent(props) {
//     const [count, setCount] = useState(0);

//     const increment = () => setCount(count + 1);

//     return <WrappedComponent count={count} increment={increment} {...props} />;
//   };
// }

function ClickCounter({ count, increment }) {
  return <button onClick={increment}>Clicked {count} times</button>;
}

function HoverCounter({ count, increment }) {
  return <h2 onMouseOver={increment}>Hovered {count} times</h2>;
}

// Applying HOC
const EnhancedClickCounter = withCounter(ClickCounter);
const EnhancedHoverCounter = withCounter(HoverCounter);
