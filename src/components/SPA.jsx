// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
// import About from "./About";
import Hello from "./Hello";

function SPA() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hello" element={<Hello />} />
      </Routes>
    </BrowserRouter>
  );
}
export default SPA;
