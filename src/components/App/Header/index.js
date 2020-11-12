import { NavLink } from "react-router-dom";
import { useCookies } from "react-cookie";

function Header({ loggedIn }) {
  // We only use this to delete the cookies, don't worry
  const [cookies, setCookie, removeCookie] = useCookies();

  function signOut() {
    removeCookie("user");
  }

  return (
    <header className="App-header">
      <img
        src="/images/plusMentor/plusMentor_gradient_resized.png"
        alt="plusMentor Logo"
        width="350"
      />
      <nav>
        {/* <NavLink to="/login">Sign In</NavLink>
        <NavLink to="/register">Register</NavLink> */}
        <NavLink to="/intro">Introduction</NavLink>
        &nbsp;
        <NavLink to="/interaction">Your sessions</NavLink>
        &nbsp;
        <NavLink to="/GetTip">Tips</NavLink>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <p>{loggedIn}</p>
        <NavLink to="/">
          <button id="signOutButton" onClick={signOut}>
            Sign Out
          </button>
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
