import React, { createContext, useContext } from "react";

// Create context
const ThemeContext = createContext();

function ThemeDisplay() {
  const theme = useContext(ThemeContext);
  return <h3>Current Theme: {theme}</h3>;
}

export default ThemeDisplay;
