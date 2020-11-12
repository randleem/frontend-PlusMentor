import React, { useEffect, useState } from "react";
import DisplayCard from "./DisplayCard";
import Header from "../App/Header";

function Interaction() {
  const [displayCards, setDisplayCards] = useState([]);
  const [newCard, setNewCard] = useState({});
  const [displayCardBy, setDisplayCardBy] = useState([]);
  const [allCardsClicked, setAllCardsClicked] = useState(false);
  const [submitCard, setSubmitCard] = useState(false);
  const [displayQuery, setDisplayQuery] = useState("");
  const [submitDisplayCardBy, setSubmitDisplayCardBy] = useState(false);

  // Get all Display Cards/Interactions
  useEffect(() => {
    if (allCardsClicked) {
      async function getAllDisplayCards() {
        const res = await fetch(`http://localhost:5000/interaction`, {
          credentials: "include",
          headers: { accept: "application/json" },
        });

        const result = await res.json();
        if (result.success) {
          setDisplayCards(result.data);
        }
      }
      getAllDisplayCards();
      setAllCardsClicked(false);
    }
  }, [allCardsClicked]);

  function handleGetAllCardsClick() {
    setAllCardsClicked(!allCardsClicked);
  }

  // Post Card/Interaction
  useEffect(() => {
    if (submitCard) {
      async function submitNewCard() {
        const requestOptions = {
          method: `POST`,
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newCard),
        };

        const req = await fetch(
          `http://localhost:5000/interaction`,
          requestOptions
        );
        const data = await req.json();
        if (data.success) {
          console.log(data);
          console.log("WOOT YOU SUBMITTED A card!!");
        }
      }
      submitNewCard();
      setSubmitCard(false);
    }
  }, [newCard, submitCard]);

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
    setSubmitCard(true);
  }

  function dropClick() {
    console.log("DropDown Clicked");
  }

  return (
    <div>
      <Header />
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
          <button className="button is-primary is-medium">
            Submit New Card
          </button>
        </form>
        <br />
        <br />
        <button
          onClick={handleGetAllCardsClick}
          className="button is-primary is-medium"
        >
          Get All Cards
        </button>
        &nbsp;&nbsp;
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
                <p
                  onClick={dropClick}
                  className="dropdown-item"
                  id="discussion"
                >
                  Discussion
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="tile is-ancestor">
          {displayCards.map((card) => {
            return <DisplayCard card={card} key={card.interaction_id} />;
          })}
        </div>
      </main>
    </div>
  );
}

export default Interaction;
