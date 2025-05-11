import React, { useContext } from "react";
import { counterContext } from "../context/context";

const Component1 = () => {
  const counter = useContext(counterContext);
  return <div>cpm1 : {counter}</div>;
};

export default Component1;
