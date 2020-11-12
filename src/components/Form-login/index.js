import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

import "./form-login.css";

function Login() {
  const [login, setLogin] = useState("");
  const [clicked, setClicked] = useState(false);
  const [cookie, setCookie] = useState("");

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
          headers: {
            accept: "application/json",
            authorization: `Basic ` + btoa(login.email + ":" + login.password),
          },
          credentials: "include",
        });

        const result = await res.text();
        console.log("The result text is:");
        console.log(result);

        Cookies.set("access_token", result[0]);

        // console.log("The body is:");
        // console.log(result.body);

        // if (result.success) {
        //   console.log(`You are Logged In - WOOOOPPPPP`);
        // }
      }

      getLogin();
      setClicked(false);
    }
  }, [clicked]);

  function handleSubmit(event) {
    setClicked(!clicked);
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
