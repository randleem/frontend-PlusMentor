import React, { useEffect, useState } from "react";

function Register() {
  const [form, setForm] = useState("");

  function handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setForm({ [name]: value });
  }

  function handleSubmit(event) {
    console.log(event);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        UserName:
        <input name="UserName" type="text" onChange={handleInputChange} />
      </label>
      <br />
      <label>
        FirstName:
        <input name="FirstName" type="text" onChange={handleInputChange} />
      </label>
      <label>
        Surname:
        <input name="Surname" type="text" onChange={handleInputChange} />
      </label>
      <label>
        Role:
        <input
          name="Role"
          type="text"
          placeholder="Mentor/Mentee"
          onChange={handleInputChange}
        />
      </label>
      <button>Submit</button>
    </form>
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
