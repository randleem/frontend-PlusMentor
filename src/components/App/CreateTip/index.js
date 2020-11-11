import React, { useEffect, useState } from "react";
import "./createTip.css";

function Input() {
  const [newTip, setNewTip] = useState("");
  const [clicked, setClicked] = useState(false);

  const [authentication, setAuthentication] = useState("");

  // TODO: Give this an argument OR get the username/password from a state
  useEffect(() => {
    if (clicked) {
      async function submitTip() {
        console.log(newTip + " 10");
        const requestOptions = {
          method: `POST`,

          // TODO: Add our credentials to the headers
          headers: {
            "Content-Type": "application/json",
            Authorization: authentication,
          },
          body: JSON.stringify({ tip: newTip }),
        };

        const req = await fetch(
          `http://localhost:5000/createTip`,
          requestOptions
        );
        const data = await req.json();
        if (data.success) {
          console.log(data);
          console.log("WOOT YOU SUBMITTED A TIP!!");
        }
      }
      submitTip();
      setClicked(false);
    }
  }, [clicked, newTip]);

  function handleChange(event) {
    setNewTip(event.target.value);
  }

  function handleClick() {
    setClicked(true);
  }

  return (
    <div style={{ display: "inline" }}>
      <label>
        Share your knowledge by submitting your own tips:
        <input
          className="input"
          onChange={handleChange}
          placeholder="Add your tip here..."
        ></input>
      </label>
      <br />
      <button className="button is-ghost" onClick={handleClick}>
        Submit Tip
      </button>
    </div>
  );
}

export default Input;
