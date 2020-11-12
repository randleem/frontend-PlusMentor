import React, { useEffect, useState } from "react";

function DisplayTip({ tip }) {
  const [value, setValue] = useState(tip);

  useEffect(() => {
    console.log(tip);
    setValue(tip);
  }, [tip]);

  return (
    <div className="card animate-entrance">
      <header className="card-header">
        <p className="card-header-title">Tip: {value}</p>
        <span className="icon">
          <i className="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </header>
      <div className="card-content">
        <div className="content">
          {tip}
          <br />
          {/* <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> */}
        </div>
      </div>
      <footer className="card-footer">
        <a href="#like" alt="Dislike" className="card-footer-item">
          👎
        </a>
        <a href="#like" alt="Like" className="card-footer-item">
          😍
        </a>
      </footer>
    </div>
  );
}

export default DisplayTip;
