import React, { useEffect, useState } from "react";
// Main CSS

function DisplayTip({ tip }) {
  const [value, setValue] = useState(tip);

  useEffect(() => {
    console.log(tip);
    setValue(tip);
  }, [tip]);

  return (
    <div className="tile animate-entrance">
      <div className="tile is-parent">
        <div className="content tile is-child box">
          <div className="card  ">
            <header className="card-header">
              <p className="card-header-title">Tip:</p>
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </header>
            <div className="card-content">
              <div className="content">
                {tip}
                <br />
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
        </div>
      </div>
    </div>
  );
}

export default DisplayTip;
