import React, { useState, useMemo } from "react";

function YesMemo() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);

  const multiCountMemo = useMemo(
    function multiCount() {
      console.warn("run");
      return count * 5;
    },
    [count]
  );

  return (
    <div>
      <h2>Multi {multiCountMemo}</h2>
      <h2>Count : {count}</h2>
      <button onClick={() => setCount(count + 1)}>Button update Count</button>
      <h2>Item : {item}</h2>
      <button onClick={() => setItem(item * 10)}>Button update Item</button>
    </div>
  );
}

export default YesMemo;
