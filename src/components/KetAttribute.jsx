import React from "react";

function KetAttribute() {
  const items = ["Apple", "Banana", "Orange", "Grapes"];

  return (
    <div>
      <h1>list </h1>
      <ul>
        {items.map((item, index) => {
          <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default KetAttribute;
