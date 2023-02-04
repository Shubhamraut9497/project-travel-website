import { useState } from "react";


const SignUp = () => {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword2 = (e) => {
    setPassword(e.target.value);
  };
  const handleClick2 = () => {};

  return (
    <>
      <div className="login" id="max">
        <div className="mini">
          <h1>SignUp Here</h1>
          <label for="input1">Name : </label>
          <input
            placeholder="Full Name"
            id="input11"
            value={Name}
            onChange={handleName}
            style={{ marginLeft: "20px" }}
          />
          <br></br>
          <label for="input2">Email Id : </label>
          <input
            type="email"
            placeholder="email Id"
            id="input22"
            style={{ marginLeft: "10px" }}
            value={email}
            onChange={handleEmail}
          />
          <label for="input3">Password : </label>
          <input
            type="password"
            placeholder="password"
            id="input3"
            value={password}
            onChange={handlePassword2}
          />
          <br />
          <button type="submit" id="btn2" className='bs' onClick={handleClick2}>
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};
export default SignUp;
