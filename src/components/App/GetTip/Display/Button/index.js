import React from "react";

function Button({ handleClick }) {
  return (
    <div>
      <button className="button is-primary is-large" onClick={handleClick}>
        Get Tip!
      </button>
    </div>
  );
}

export default Button;
