import React from "react";

function Button({ handleClick }) {
  return (
    <div>
      <button onClick={handleClick}>Get Tip!</button>
    </div>
  );
}

export default Button;
