import React, { useState, useEffect } from "react";
import Button from "./Button";
import DisplayTip from "./DisplayTip";

function MainTipComponentDiv() {
  const [tip, setTip] = useState("Your tips will be displayed here!");
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      async function getTip() {
        const res = await fetch(`http://localhost:5000/randomTip`, {
          credentials: "include",
          headers: { accept: "application/json" },
        });

        const data = await res.json();
        console.log(data);
        // if (data) {
        //   setTip(data[0].tip);
        // }
      }
      getTip();
      setClicked(false);
    }
  }, [clicked]);

  function handleClick() {
    setClicked(!clicked);
  }

  return (
    <div class="tile is-ancestor">
      <Button id="get-tip-button" handleClick={handleClick} />
      <DisplayTip tip={tip} />
    </div>
  );
}

export default MainTipComponentDiv;
