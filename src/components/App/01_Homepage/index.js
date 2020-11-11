import "./homepage.css";

function Homepage() {
  return (
    <div className="homePageWrapper">
      <img
        src="/images/plusMentor/plusMentor_gradient_homepage.png"
        alt="plusMentor Logo"
        width="600"
      />
      <br />
      <a
        href="/register"
        id="signUp"
        className="button is-primary is-large is-rounded"
      >
        Create an account
      </a>
      <br />
      <a
        href="/login"
        id="logIn"
        className="button is-ghost is-rounded is-medium"
      >
        Sign in
      </a>
    </div>
  );
}

export default Homepage;
