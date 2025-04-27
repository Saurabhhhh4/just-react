import React, { useRef } from "react";

function UncontrolledCom() {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted :", inputRef.current.value);
  };

  return (
    <div>
      <h2>UncontrolledComponent</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" ref={inputRef} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UncontrolledCom;
