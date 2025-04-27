import React, { useState } from "react";

function TodoList() {
  //  For holding the input value
  const [todo, setTodo] = useState("");
  // For holding the list of to-do items
  const [items, setItems] = useState([]);

  // Function to handle input changes
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  // Function to add a new item to the list
  const handlAdd = () => {
    if (todo) {
      // Adds new todo to the list with unique ID
      setItems([...items, { id: Date.now(), text: todo }]);
      // Reset input fie
      setTodo("");
    }
  };
  // Function to remove a to-do item from the list
  const handleRemove = (id) => {
    // Filters out the item with the given id
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2> TO-DO list</h2>
      <input
        type="text"
        value={todo}
        onChange={handleChange}
        placeholder="Enter the new Task"
      />
      <button onClick={handlAdd}>Add</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
