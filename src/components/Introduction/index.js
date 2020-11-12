import "./introduction.css";

// Header
import Header from "../App/Header";

function Introduction({ loggedIn }) {
  const tipsForBootcampers = [
    "Mentors are an aid and support for you to use, not a cheat",
    "Dont expect too much from your mentor (they are not Steve Jobs)",
    "Ask your mentor if there is any work they reference (day to day in work or when building skills)",
    "Don't be afraid to set boundaries (items you are comfortable to talk about, subjects you would rather avoid)",
    "Ask about diversity in the workplace, how they tackle and overcome barriers",
    "Respect confidentiality your mentor may tell you something in safety",
    "Respect your mentor has their own life",
    "Do not badger/pester/annoy your mentor (don't be a nob!)",
    "Don't be afraid to set the pace of the contact at the beginning, your mentor may be new to mentoring and not want to overwhelm you",
    "Don't be afraid to ask for your mentor to have a look at work you have done, they may offer advice on how to make it look more professional/industry standard",
    "Don't judge the knowledge of your mentor, they may specialise in a certain area that may not interest you exactly, but they may have a story of how they ended up there",
    "If you have solved something as a result of advice your Mentor gave you, show them",
    "Give feedback to your mentor; it may help them with future mentees that they have",
  ];

  const tipsForMentors = [
    "Work to promote Mentees independence and self reliance",
    "If you face a problem, offer advice on how to understand the problem",
    "Help to give tools/instruction/other work in order to tackle problems (don’t do it for them)",
    "Don’t lie about your experience, training, certifications ,accreditations",
    "Share how you have trained? Where did you start?",
    "Don’t be misleading, and make false claims",
    "Help your mentee by sharing your experience of working in a team",
    "Don’t be afraid to set boundaries (things to talk about, things to steer clear of)",
    "Talk about the variety of people you work with and how you break down barriers",
    "Respect confidentiality - your mentee may tell you something in confidence",
    "Respect that your mentee has their own life",
    "Don’t pester/annoy/badger/ your mentee (don’t be a nob!)",
    "Don’t be afraid to set the pace of contact at the beginning (mentee may be overwhelmed by the process)",
    "Then let the mentee become more comfortable with contacting you",
    "If your mentoring experience becomes worrying/uncomfortable, please get in touch with the SoC team",
    "Don’t be too assertive or intrusive about seeing your mentees work - they may be shy!",
    "Don’t be afraid to tell your mentees that you don’t know something - foster an “always learning” attitude",
    "Help the mentee to realise that they can do it themselves (they have the potential and ability)",
    "Give feedback to your mentee",
  ];
  return (
    <div>
      <Header loggedIn={loggedIn} />
      <main>
        <div className="card animate-entrance">
          <header className="card-header">
            <h1 className="card-header-title" id="">
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
              <p>
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
            you get the best of
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
