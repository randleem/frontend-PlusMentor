import React, { useEffect, useState } from "react";
import DisplayCard from "./DisplayCard";
import Header from "../App/Header";

import "./interaction.css";

function Interaction({ loggedIn }) {
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
      console.log(loggedIn);
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

  // Get Cards/Interactions by email
  useEffect(() => {
    if (submitDisplayCardBy) {
      async function getDisplayCardsBy() {
        const res = await fetch(
          `http://localhost:5000/interaction?email=${loggedIn}`,
          {
            credentials: "include",
            headers: { accept: "application/json" },
          }
        );
        const result = await res.json();
        if (result.success) {
          setDisplayCards(result.data);
        }
      }
      getDisplayCardsBy();
      setSubmitDisplayCardBy(false);
    }
  }, [submitDisplayCardBy]);

  // Post Card/Interaction
  useEffect(() => {
    if (submitCard) {
      if (
        newCard.discussion === "" ||
        newCard.topic === "" ||
        !("topic" in newCard) ||
        !("discussion" in newCard)
      ) {
        console.log("Missing value.");
        return;
      }
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

  function handleGetAllCardsClick() {
    setAllCardsClicked(!allCardsClicked);
  }

  function dropClick() {
    console.log("drop clicked");
    setSubmitDisplayCardBy(!submitDisplayCardBy);
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
            <textarea
              className="input"
              name="discussion"
              onChange={handleNewCard}
            ></textarea>
            {/* <input
              className="input"
              name="discussion"
              type="text"
              onChange={handleNewCard}
            /> */}
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
        <button onClick={dropClick} className="button is-primary is-medium">
          Display Cards By Email
        </button>
        <br />
        <br />
        <div className="displayCardContainer">
          {displayCards.map((card) => {
            return <DisplayCard card={card} key={card.interaction_id} />;
          })}
        </div>
      </main>
    </div>
  );
}

export default Interaction;
