function DisplayCard({ card }) {
  const { topic, discussion, date } = card;

  return (
    <div className="content">
      <p className="card-header-title">Date: {date}</p>
      <p className="card-header-title">Topic: {topic}</p>
      <p className="card-header-title">Discussion: {discussion}</p>
    </div>
  );
}

export default DisplayCard;

{
  /* <div className="card animate-entrance">
<header className="card-header">
  <p className="card-header-title">Date: {date}</p>
    <i className="fas fa-angle-down" aria-hidden="true"></i>
</header>
<div className="card-content">
  <div className="content">
    {topic}
    <br />
  </div>
</div>
<div className="card-content">
  <div className="content">
    {discussion}
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
</div> */
}
