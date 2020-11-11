function DisplayCard(props) {
  const { topic, discussion, date } = props;

  return (
    <div>
      <p>This is my topic! - {topic}</p>
      <p>This is my discussion! - {discussion}</p>
      <hr />
      <p>This is my date! - {date}</p>
    </div>
  );
}

export default DisplayCard;
