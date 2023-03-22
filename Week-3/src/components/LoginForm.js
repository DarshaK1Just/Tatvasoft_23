import React, { useState } from "react";

function LoginForm() {
const [namef ,setFName] = useState("")
const [namel ,setLName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
alert(` First Name: ${namef}, 
    Last Name: ${namel}, 
    Email: ${email}, 
    Password: ${password}`);
  }

  return (
    <form onSubmit={handleSubmit} className="d14">
         <label>
        First Name :
        <input
          type="text"
          value={namef}
          onChange={(event) => setFName(event.target.value)}
        />
      </label>
      <br/>
      <label>
        Last Name :
        <input
          type="text"
          value={namel}
          onChange={(event) => setLName(event.target.value)}
        />
      </label>
      <br/>
      <label>
        Email :
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <br/>
      <label>
        Password :        
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <button type="submit" className="b1">Login</button>
    </form>
  );
}

export default LoginForm;
