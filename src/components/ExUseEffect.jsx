import React, { useEffect, useState } from "react";

function ExUseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component rendered");

    return () => {
      console.log("Cleanup before next render");
    };
  }, [count]);

  return (
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  );
}

export default ExUseEffect;
