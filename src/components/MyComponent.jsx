import React, { useEffect, useState } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("component mounted");
    return () => {
      console.log("component will unmount!!");
    };
  }, []);

  useEffect(() => {
    if (count > 5) {
      setCount(5);
    }
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}> click me {count}</button>
    </div>
  );
}

export default MyComponent;
