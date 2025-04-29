// Home.js
import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === "dark" ? "#222" : "#eee",
        color: theme === "dark" ? "#fff" : "#000",
        padding: "2rem",
      }}
    >
      <h1>{theme.toUpperCase()} MODE</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Home;
