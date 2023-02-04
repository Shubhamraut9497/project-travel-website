import React, { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  //   const [user, setUser] = useState([]);

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleClick = () => {
    if (username === "" || password === "") {
      setError("All fields are Mandatory");
    } else {
      var myHeader = new Headers();
      myHeader.append("Content-Type", "application/json");

      var body = JSON.stringify({
        "username": username,
        "password": password,
      });
      
      var requestOptions = {
        method: "POST",
        headers: myHeader,
        body: body,
      };
      fetch("https://fakestoreapi.com/auth/login", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result.token) {
            localStorage.setItem("login-token", result.token);
            alert("Login Successfull");
          } else {
            setError("Invalid credentials");
          }
        })
        .catch((error) => console.log("error", error));
    }
  };

  return (
    <>
      <div className="login">
        <div className="mini">
          <h1>Log In</h1>
          <label for="input1">Username : </label>
          <input
            placeholder="Username"
            id="input1"
            value={username}
            onChange={handleUsername}
          />
          <br></br>
          <label for="input2">Password : </label>
          <input
            type="password"
            placeholder="password"
            id="input2"
            value={password}
            onChange={handlePassword}
          />
          <br />
          <br />
          {error ? <div style={{ color: "red" }}>{error}</div> : <></>}
          <button type="submit" id="btn" onClick={handleClick}>
            Log in
          </button>
          <div>
            <p>
              New User? <Link to={"/SignUp"}>Create an Account</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
