import React, { useEffect, useState } from "react";
import DisplayCard from "./DisplayCard";

const testCard = {
  interaction_id: 1,
  date: `2020-11-09`,
  topic: `How to make friends and influence people`,
  discussion: `Just be yourself - you're aweosme!!!`,
  team_id: 2,
};

function Interaction() {
  const [displayCards, setDisplayCards] = useState([testCard]);
  const [newCard, setNewCard] = useState({});
  const [allCardsClicked, setAllCardsClicked] = useState(false);

  // Get all Display Cards/Interactions
  useEffect(() => {
    if (allCardsClicked) {
      async function getAllDisplayCards() {
        const res = await fetch(`http://localhost:5000/interaction`, {
          headers: { accept: "application/json" },
        });
        const { data, success } = await res.json();
        if (success) {
          setDisplayCards(data[0].tip);
        }
      }
      getAllDisplayCards();
      setAllCardsClicked(false);
    }
  }, [allCardsClicked]);

  function handleGetAllCardsClick() {
    setAllCardsClicked(!allCardsClicked);
  }

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
    console.log("Submit New Card");
    // post request to interactions_table
  }

  function dropClick() {
    console.log("DropDown Clicked");
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
        <button className="button is-primary is-medium">Submit New Card</button>
      </form>
      <br />
      <br />
      <button
        onClick={handleGetAllCardsClick}
        className="button is-primary is-medium"
      >
        Get All Cards
      </button>

      <br />
      <br />
      <div className="dropdown ">
        <div className="dropdown-trigger">
          <button
            className="button is-primary is-medium"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
          >
            <span>Display Cards By</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            <div className="dropdown-item">
              <p onClick={dropClick} className="dropdown-item" id="date">
                Date
              </p>
            </div>
            <div className="dropdown-item">
              <p onClick={dropClick} className="dropdown-item" id="topic">
                Topic
              </p>
            </div>
            <div className="dropdown-item">
              <p onClick={dropClick} className="dropdown-item" id="discussion">
                Discussion
              </p>
            </div>
            <a href="/" class="dropdown-item">
              Link to Home Page - TEST
            </a>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div>
        {displayCards.map((card) => {
          return <DisplayCard card={card} key={card.interaction_id} />;
        })}
      </div>
    </main>
  );
}

export default Interaction;
