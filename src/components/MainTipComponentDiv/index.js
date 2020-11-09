import React, { useState, useEffect } from "react";
import Button from "./Button";
import DisplayTip from "./DisplayTip";

const dummyTip = { id: 1, contents: {translated: `don't be an arsehole` }};

function MainTipComponentDiv() {
  const [tip, setTip] = useState("Hello");
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    if(clicked){
    async function getTip() {
        const res = await fetch(`https://api.funtranslations.com/translate/yoda.json?text=Becky likes Pokemon`,
          {
            headers: { accept: "application/json" }
          }
        );
        const data = await res.json();
        console.log(data.contents.translated);
        setTip(data.contents.translated);
      }
      getTip();
  }}, [clicked]);

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
