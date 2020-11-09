import React, { useState } from "react";
import Button from "./Button";
import DisplayTip from "./DisplayTip";

const dummyTip = { id: 1, text: `don't be an arsehole` };

function MainTipComponentDiv() {
  const [tip, setTip] = useState({});

  //   useEffect(() => {
  //     fetch("");
  //   });

  function handleClick() {
    setTip(dummyTip);
  }

  return (
    <div>
      <Button id="get-tip-button" handleClick={handleClick} />
      <DisplayTip tip={tip.text} />
    </div>
  );
}

export default MainTipComponentDiv;
