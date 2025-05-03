import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import Home from "./components/Home";
// import ThemeProvider from "./context/ThemeProvider";

import withGreeting from "./components/HocCompnent";
import Hello from "./components/Hello";
//
const GreetedHello = withGreeting(Hello);

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>HOC Example</h1>

      <GreetedHello name="Ravi" />
      <GreetedHello name="Priya" />
    </div>
  );

  // return (
  //   // <ThemeProvider>
  //   //   <Home />
  //   // </ThemeProvider>
  // );
}

export default App;
