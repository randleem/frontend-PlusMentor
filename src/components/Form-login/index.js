import React, { useState } from "react";

import "./form-login.css";

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
    <div>
      <img
        src="/images/plusMentor/plusMentor_gradient_homepage.png"
        alt="plusMentor Logo"
        width="600"
      />
      <main>
        <h3 className="title is-3" id="signInTitle">
          Log in
        </h3>
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
          <div className="formButtonsContainer">
            <a href="/" id="logIn" className="button is-ghost is-normal">
              ⏪ Back
            </a>
            <button className="button is-primary is-medium">Log in</button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Login;
