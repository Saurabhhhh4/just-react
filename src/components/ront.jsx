import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  // const handleLogin = async () => {
  //   try {
  //     const res = await axios.post("http://localhost:5000/login", {
  //       email,
  //       password,
  //     });
  //     setToken(res.data.token);
  //     localStorage.setItem("token", res.data.token);
  //     alert("Login Success!");
  //   } catch (err) {
  //     alert("Login Failed");
  //   }
  // };


  const handleLogin = async () => {
  if (!email || !password) {
    alert("Please enter both email and password");
    return;
  }

  try {
    const response = await axios.post("http://localhost:5000/login", {
      email,
      password,
    });

    const { token } = response.data;

    if (token) {
      setToken(token);
      localStorage.setItem("token", token);
      alert("Login successful!");
    } else {
      alert("Invalid response from server.");
    }
  } catch (error) {
    console.error("Login error:", error);

    if (error.response) {
      // Server


  return (
    <div>
      <h2>Login</h2>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
