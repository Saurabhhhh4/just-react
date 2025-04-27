import React, { useState } from "react";

function ControlledCom() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submited :", inputValue);
    // alert("form submitted :", inputValue);
  };

  return (
    <div>
      <h2>Controlled Component</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Type Name :
          <input type="text" value={inputValue} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ControlledCom;
