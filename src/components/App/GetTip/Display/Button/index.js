import React from "react";

function Button({ handleClick }) {
  return (
    <div style={{ margin: "0 auto !important", textAlign: "center" }}>
      <button className="button is-primary is-large" onClick={handleClick}>
        Get Talking Point
      </button>
    </div>
  );
}

export default Button;
