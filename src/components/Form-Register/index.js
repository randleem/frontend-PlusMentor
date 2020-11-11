import React, { useState } from "react";
import "./form-register.css";

function Register() {
  const [form, setForm] = useState("");

  function handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const newData = { ...form, [name]: value };
    setForm(newData);
  }

  function handleSubmit(event) {
    console.log(event);
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
          Create an account
        </h3>
        <form onSubmit={handleSubmit}>
          <label className="registerLabel">
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
          <label className="registerLabel">
            First Name:
            <input
              className="input"
              name="first_name"
              type="text"
              onChange={handleInputChange}
            />
          </label>
          <br />
          <br />
          <label className="registerLabel">
            Last Name:
            <input
              className="input"
              name="last_name"
              type="text"
              onChange={handleInputChange}
            />
          </label>
          <br />
          <br />
          <label className="registerLabel">Role:</label>
          <div class="control">
            <label for="Mentor" className="registerLabel">
              <input
                className="radio"
                name="role"
                type="radio"
                value="Mentor"
                onChange={handleInputChange}
              />
              Mentor
            </label>
            <br />
            <label for="Bootcamper" className="registerLabel">
              <input
                className="radio"
                name="role"
                type="radio"
                value="Bootcamper"
                onChange={handleInputChange}
              />
              Bootcamper
            </label>
          </div>
          <br />
          <div className="formButtonsContainer">
            <a href="/" id="logIn" className="button is-ghost is-normal">
              ⏪ Back
            </a>
            <button className="button is-primary is-medium">Register</button>
          </div>
        </form>
      </main>
    </div>
  );
}
// username/email p tag/text then input field
// //password p tag/text then input field which hides password ***
// firstname p tag then input field
// surname p tag then input field
// role (mentor/mentee) dropdown/radiobutton
// button submit
// button cancel

// signing in
// username
// button submit
// button cancel

export default Register;
