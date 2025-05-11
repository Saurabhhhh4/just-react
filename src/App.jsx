import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import Home from "./components/Home";
// import ThemeProvider from "./context/ThemeProvider";
// import withGreeting from "./components/HocCompnent";
// import Hello from "./components/Hello";
// import Navbar from "./components/Navbar";
// const GreetedHello = withGreeting(Hello);
import Navbar from "./components/Navbar.jsx";
import { counterContext } from "./context/context.js";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <counterContext.Provider value={count}>
        {/* <Navbar count={count} /> */}
        <Navbar />
        {/* <h1>HOC Example</h1> */}
        {/* <GreetedHello name="Ravi" />
      <GreetedHello name="Priya" /> */}
        <button onClick={() => setCount(count + 1)}> click me {count}</button>
      </counterContext.Provider>
    </div>
  );

  // return (
  //   // <ThemeProvider>
  //   //   <Home />
  //   // </ThemeProvider>
  // );
}

export default App;
