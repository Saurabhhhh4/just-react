import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import Navbar from "./components/Navbar.jsx";
// import CounterWithoutRerender from "./components/CounterWithoutRerender.jsx";
// import FocusInput from "./components/FocusInput.jsx";
// import SPA from "./components/SPA.jsx";
// import Home from "./components/Home.jsx";
// import ClassComp from "./components/classComp.jsx";
// import FunctionComp from "./components/FunctionComp.jsx";
// import Parent from "./components/Parent.jsx";
// import ExUseEffect from "./components/ExUseEffect.jsx";
// import ControlledCom from "./components/ControlledCom.jsx";
// import UncontrolledCom from "./components/UncontrolledCom.jsx";
// import KetAttribute from "./components/KetAttribute.jsx";
// import TodoList from "./components/TodoList.jsx";
// import MyComponent from "./components/MyComponent.jsx";
// import UseTransition from "./components/useTransition.jsx";
// import ThemeDisplay from "./components/ThemeDisplay.jsx";
// import { ThemeContext } from "./components/ThemeDisplay.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <ThemeDisplay />
    <ThemeContext.Provider value="dark">
      <ThemeDisplay />
    </ThemeContext.Provider> */}
    <App />
    {/* <SPA /> */}
    {/* <ClassComp /> */}
    {/* <FunctionComp /> */}
    {/* <ExUseEffect /> */}
    {/* <Parent /> */}
    {/* <ControlledCom /> */}
    {/* <UncontrolledCom /> */}
    {/* <KetAttribute /> */}
    {/* <TodoList /> */}
    {/* <MyComponent /> */}
    {/* <UseTransition /> */}
    {/* <FocusInput /> */}
    {/* <CounterWithoutRerender /> */}

    {/* <Navbar count={count} /> */}
  </StrictMode>
);
