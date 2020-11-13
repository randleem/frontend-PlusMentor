import React, { useState, useEffect } from "react";
import Button from "./Button";
import DisplayTip from "./DisplayTip";
import Header from "../../Header";

function MainTipComponentDiv() {
  const [tip, setTip] = useState("Your tips will be displayed here!");
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      async function getTip() {
        const res = await fetch(`http://localhost:5000/randomTip/randomTip`, {
          credentials: "include",
          headers: { accept: "application/json" },
        });

        const { data, success } = await res.json();
        if (success) {
          setTip(data[0].tip);
        }
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
      <Header />
      <main>
        <DisplayTip tip={tip} />
        <br />
        <br />
        <Button id="get-tip-button" handleClick={handleClick} />
      </main>
    </div>
  );
}

export default MainTipComponentDiv;
