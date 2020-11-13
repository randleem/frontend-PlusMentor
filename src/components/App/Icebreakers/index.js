import "../../Introduction/introduction.css";
import Header from "../Header/index";
function Icebreakers({ loggedIn }) {
  const businessTalk = [
    "What is their job?",
    "What do they do on a day to day basis?",
    "Applications they may use?",
    "Software that is vital to them?",
    "Where did they start?",
    "Did they study? Where? What? How long?",
  ];
  const casualTalk = [
    "Do they have Hobbies and Passions (Why?) : Sport (play? watch? Support?), Art (artist? piece?), Literature (author? book?)... ",
    "Do they collect anything?",
    "Have they travelled? (Where to? Favourite place? Where would they like to go?)",
    "Accomplishments and achievements",
    "Favourites: film (favourite you tell people and your actual favourite), tv show (unhealthly hooked on), song, book",
    "Favourite food, starter, main, dessert",
    "Favourite sweet (guilty pleasure)",
  ];
  const marmite = ["Love it", "Hate it"];
  return (
    <div>
      <Header loggedIn={loggedIn} />
      <main>
        <br />
        <div className="welcome">
          <div className="card animate-entrance" id="welocme-box">
            <header className="card-header">
              <h1 className="card-header-title">Here are some ice breakers:</h1>
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </header>
            <div className="card-content">
              <div className="content">
                <p>
                  Just incase you find it difficult to reach out and start
                  dialogue (Some serious, some not)
                </p>
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="checkListPaper">
          <h4 className="title is-4">
            Opening the dialogue in a casual way can help with making the
            communication easier for the rest of the sessions.
          </h4>
          {businessTalk.map((el, i) => (
            <div className="checkListItem">
              <div className="field">
                <input
                  className="is-checkradio is-medium is-circle is-block is-success"
                  id={i}
                  type="checkbox"
                  name={i}
                />
                <label for={i}>{el}</label>
              </div>
            </div>
          ))}
        </div>
        <br />
        <div className="welcome">
          <div className="card animate-entrance" id="welocme-box">
            <header className="card-header">
              <h1 className="card-header-title">
                Asking more relaxed questions can start mentoring in a friendly
                way (they are human...unless they are a robot in disguise...).
              </h1>
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </header>
            <div className="card-content">
              <div className="content">
                <p>
                  Don’t be afraid to kick off randomly. It's called business
                  hours for a reason.
                </p>
                <br />
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="checkListPaper">
          <h4 className="title is-4">
            They are called business hours for a reason.
          </h4>
          {casualTalk.map((el, i) => (
            <div className="checkListItem">
              <div className="field">
                <input
                  className="is-checkradio is-medium is-circle is-block is-success"
                  id={i * 3}
                  type="checkbox"
                  name={i * 3}
                />
                <label for={i * 3}>{el}</label>
              </div>
            </div>
          ))}
        </div>
        <div className="checkListPaper">
          <h4 className="title is-4">
            Or go completely controversial: Marmite
          </h4>
          {marmite.map((el, i) => (
            <div className="checkListItem">
              <div className="field">
                <input
                  className="is-checkradio is-medium is-circle is-block is-success"
                  id={i * 3}
                  type="checkbox"
                  name={i * 3}
                />
                <label for={i * 3}>{el}</label>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
export default Icebreakers;
