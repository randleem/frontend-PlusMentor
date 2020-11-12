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
          headers: { accept: "application/json" },
          credentials: "same-origin",
        });
        // const { data, success } = await res.json();
        const trying = await res;
        console.log(trying);
        // if (success) {
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
    <div>
      <Button id="get-tip-button" handleClick={handleClick} />
      <DisplayTip tip={tip} />
    </div>
  );
}

export default MainTipComponentDiv;
