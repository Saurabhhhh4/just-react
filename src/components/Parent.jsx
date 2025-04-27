import React from "react";

// GrandChild component, using destructuring for props
function GrandChild({ message }) {
  return <h2>{message}</h2>;
}

// Child component, properly accepting props as an object
function Child({ message }) {
  return <GrandChild message={message} />;
}

function Parent() {
  const parentMessage = "Hello from Parent component"; // Define message

  return (
    <div>
      <h1>Parent Component</h1>
      {/* Pass the parentMessage as the 'message' prop to Child */}
      <Child message={parentMessage} />
    </div>
  );
}

export default Parent;
