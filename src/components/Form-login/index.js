import React, { useEffect, useState } from "react";

function Login() {
  const [login, setLogin] = useState("");

  function handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const newData = { ...login, [name]: value };
    setLogin(newData);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label className="loginLabel">
          Your Email:
          <input
            className="input"
            name="email"
            type="text"
            onChange={handleInputChange}
          />
        </label>
        <br />
        <br />
        <label className="loginLabel">
          Password:
          <input
            className="input"
            name="password"
            type="text"
            onChange={handleInputChange}
          />
        </label>
        <br />
        <br />
        <button className="button is-primary is-medium">Login</button>
      </form>
    </main>
  );
}

export default Login;
