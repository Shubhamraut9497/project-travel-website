import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleClick = () => {
    if (username === "" || password === "") {
      setError("All fields are mandatory");
    } else if (
      localStorage.getItem("email") === username &&
      localStorage.getItem("password") === password
    ) {
      navigate("/");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <>
      <div className="login">
        <div className="mini">
          <h1>Log In</h1>
          <label htmlFor="input1">Username : </label>
          <input
            placeholder="Username"
            id="input1"
            value={username}
            onChange={handleUsername}
          />
          <br></br>
          <label htmlFor="input2">Password : </label>
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
