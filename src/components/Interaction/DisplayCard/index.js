function DisplayCard({ card }) {
  const { topic, discussion, date } = card;

  return (
    <div class="tile is-4">
      <div class="tile is-parent">
        <div className="content" class="tile is-child box">
          <div className="card animate-entrance">
            <header className="card-header">
              <p className="card-header-title">Date: {date}</p>
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </header>
            <div className="card-content">
              <div className="content">
                <h4>Topic:</h4>
                {topic}
                <br />
              </div>
            </div>
            <div className="card-content">
              <div className="content">
                <h4>Discussion:</h4>
                {discussion}
                <br />
              </div>
            </div>
            {/* <footer className="card-footer">
              <a href="#like" alt="Dislike" className="card-footer-item">
                Edit
              </a>
              <a href="#like" alt="Like" className="card-footer-item">
                😍
              </a>
            </footer> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayCard;
