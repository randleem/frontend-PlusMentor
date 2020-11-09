import React, { useState, useEffect } from "react";
import Button from "./Button";
import DisplayTip from "./DisplayTip";

const dummyTip = { id: 1, contents: { translated: `don't be an arsehole` } };

function MainTipComponentDiv() {
  const [tip, setTip] = useState("Hello");
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      async function getTip() {
        const res = await fetch(`http://localhost:5000/randomTip`, {
          headers: { accept: "application/json" },
        });
        const { data, success } = await res.json();
        if (success) {
          setTip(data[0].tip);
        }
      }
      getTip();
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
