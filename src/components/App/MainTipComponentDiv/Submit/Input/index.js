import React, { useEffect, useState } from "react";

function Input() {
  const [newTip, setNewTip] = useState("");
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      async function submitTip() {
        console.log(newTip + " 10");
        const requestOptions = {
          method: `POST`,
          headers: { "Content-Type": "application/json" },
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
    <div>
      <input onChange={handleChange} placeholder="write tip here"></input>
      <button onClick={handleClick}>Submit Tip</button>
    </div>
  );
}

export default Input;
