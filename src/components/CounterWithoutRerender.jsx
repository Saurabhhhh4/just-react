import React, { useRef, useState } from "react";

function CounterWithoutRerender() {
  const count = useRef(0); // count value change hogi, lekin re-render nahi hoga
  const [, setForceRender] = useState(0);

  const handleClick = () => {
    count.current += 1; // value update
    alert(`Clicked ${count.current} times`);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => setForceRender((n) => n + 1)}>
        Force Re-render
      </button>
    </div>
  );
}
export default CounterWithoutRerender;
