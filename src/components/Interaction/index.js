import React, { useEffect, useState } from "react";

function Interaction() {
  const [displayCards, setDisplayCards] = useState([]);
  const [newCard, setNewCard] = useState({});

  function handleNewCard(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let date = new Date();
    let dd = String(date.getDate()).padStart(2, "0");
    let mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = date.getFullYear();
    date = mm + "/" + dd + "/" + yyyy;
    const newData = { ...newCard, [name]: value, date };
    setNewCard(newData);
  }

  function handleSubmit() {
    console.log("hello world");
    // post request to interactions_table
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label className="loginLabel">
          Topic:
          <input
            className="input"
            name="topic"
            type="text"
            onChange={handleNewCard}
          />
        </label>
        <br />
        <br />
        <label className="loginLabel">
          Discussion:
          <input
            className="input"
            name="discussion"
            type="text"
            onChange={handleNewCard}
          />
        </label>
        <br />
        <br />
        <button className="button is-primary is-medium">Login</button>
      </form>
    </main>
  );
}

export default Interaction;
