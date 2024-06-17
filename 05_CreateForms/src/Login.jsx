import React from "react";
import "./Login.css";
import { useRef } from "react";

function Login() {
  const userRef = useRef(null);
  const passRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = userRef.current.value;
    const password = passRef.current.value;
    console.log(username, password);
  };

  return (
    <>
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" required ref={userRef} />
          </div>
          <div className="form-group">
            <label htmlFor="password">password</label>
            <input type="text" name="password" required ref={passRef} />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;
