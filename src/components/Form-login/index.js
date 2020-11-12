import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

import "./form-login.css";

// function Login({ history }) {
function Login({ getEmailFromLogin }) {
  const [login, setLogin] = useState("");
  const [clicked, setClicked] = useState(false);
  const history = useHistory();

  function handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const newData = { ...login, [name]: value };
    setLogin(newData);
  }

  useEffect(() => {
    if (clicked) {
      async function getLogin() {
        console.log(login.email);
        console.log(login.password);

        console.log(btoa(login.email + ":" + login.password));
        const res = await fetch(`http://localhost:5000/`, {
          credentials: "include",
          cache: "no-cache",
          headers: {
            accept: "application/json",
            // capital A for Authorization
            Authorization: `Basic ` + btoa(login.email + ":" + login.password),
          },
        });

        const result = await res;

        if (result.status === 200 || result.status === 304) {
          // redirect them to the intro page...
          console.log("Redirecting you to the Intro page...");
          history.push("/intro");
        }
      }

      getLogin();
      setClicked(false);
    }
  }, [clicked, login, history]);

  function handleSubmit(event) {
    setClicked(!clicked);
    getEmailFromLogin(login.email);
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
              type="password"
              onChange={handleInputChange}
            />
          </label>
          <br />
          <br />

          <div className="formButtonsContainer">
            <a href="/" id="log In" className="button is-primary is-medium">
              ⏪ Back
            </a>
            <span> </span>
            <button className="button is-primary is-medium">Log In</button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Login;
