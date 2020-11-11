import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="App-header">
      <img
        src="/images/plusMentor/plusMentor_gradient_resized.png"
        alt="plusMentor Logo"
        width="350"
      />
      <nav>
        {/* FIXME: Uncomment these when we figure out how to implement them */}
        {/* <NavLink to="/">Home</NavLink>
      &nbsp;
      <NavLink to="/createTip">Create tip</NavLink>
      &nbsp;
      <NavLink to="/scheduleSession">Schedule a session</NavLink> */}
        <NavLink to="/login">Sign In</NavLink>
        <NavLink to="/register">Register</NavLink>
        &nbsp;&nbsp;&nbsp;
        <NavLink to="/intro">Introduction</NavLink>
      </nav>
    </header>
  );
}

export default Header;
