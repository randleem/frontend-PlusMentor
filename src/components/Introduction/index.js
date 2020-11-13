import "./introduction.css";

// Header
import Header from "../App/Header";

function Introduction({ loggedIn }) {
  const tipsForBootcampers = [
    "Prepare a brief introduction about yourself - this can be as formal or as informal as you like",
    "Background: Describe your career history prior to the School of Code",
    "Background: Describe any relevent experience",
    "Background: Why you are on the School of Code?",
    "Background: Why you would like to get into the tech industry?",
    "Email your mentor and introduce yourself",
    "Write a list of questions you would like to ask your mentor",
    "Arrange your first meeting be it by email, zoom, in person",
    "Talking points: how often would you like to meet/talk to your mentor?",
    "Talking points: See the ice breaker page for ice breaker questions",
    "Talking points: See the tips page for mentoring tips or questions",
  ];

  return (
    <div>
      <Header loggedIn={loggedIn} />
      <main>
        <div className="card animate-entrance">
          <header className="card-header">
            <h1 className="card-header-title" id="introCardTitle">
              Welcome to plusMentor: The School of Code Mentoring App
            </h1>
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </header>
          <div className="card-content">
            <div className="content">
              <img
                id="school-of-code-logo"
                src="https://d33wubrfki0l68.cloudfront.net/e6fddcbea146f91d2f3c160f7d56a9391a4740b0/4e758/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png"
                alt={`school of code logo`}
              />
              <p id="introCardParagraph">
                In the School of Code, mentoring is a professional partnership
                between an experienced developer (the mentor) and a bootcamper
                (the mentee). The goal is to develop your skills and knowledge
                and enhance both participants' professional, personal and career
                growth.
              </p>
              <br />
            </div>
          </div>
        </div>

        <div className="checkListPaper">
          <h4 className="title is-4">
            We get it - having your first mentoring session can be
            nerve-racking!
            <br />
            Here is a list of things to do on your first session to make sure
            you get the most of it
          </h4>
          {tipsForBootcampers.map((el, i) => (
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

        {/* <div className="checkListPaper">
          <h4 className="title is-4">
            For Mentors - here are some tips to get you started on your first
            session.
          </h4>
          {tipsForMentors.map((el, i) => (
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
        </div> */}
      </main>
    </div>
  );
}

export default Introduction;
