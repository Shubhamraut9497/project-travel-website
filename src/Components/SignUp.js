import { useState } from "react";

const SignUp = () => {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleClick2 = () => {};

  return (
    <>
      <div className="login">
        <div className="mini">
          <h1>SignUp Here</h1>
          <label for="input1">Name : </label>
          <input
            placeholder="Full Name"
            id="input11"
            value={Name}
            onChange={handleName}
            style={{ marginLeft: "10px" }}
          />
          <br></br>
          <label for="input2">Email Id : </label>
          <input
            type="email"
            placeholder="email Id"
            id="input22"
            value={email}
            onChange={handleEmail}
          />
          <button type="submit" id="btn2" onClick={handleClick2}>
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};
export default SignUp;
