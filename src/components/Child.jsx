import React from "react";

function Child(props) {
  return (
    <div>
      <h2>Child compoent</h2>
      <p>{props.message}</p>
      <p>{props.name}</p>
      <p>{props.age}</p>
    </div>
  );
}

export default Child;
