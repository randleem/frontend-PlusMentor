import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

// ----------------------------------------

///// COMPONENTS
// Get Tip / Create Tip
import GetTip from "./GetTip/Display/";
import Input from "./CreateTip";

// FORM - Resister
import Register from "../Form-Register";

// FORM - Login
// TODO: Add it here

// Introduction
import Introduction from "../Introduction";

// ----------------------------------------

// Main CSS
import "./App.css";
// CSS Framework
import "./Bulma.css";
import "./Bulma_Extensions.css";
// CSS Animations
import "./Animations.css";

// ----------------------------------------

function App() {
  return (
    <Router>
      <div className="App">
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

        <main>
          <Switch>
            <Route path="/login"></Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/intro">
              <Introduction />
            </Route>
            <Route path="/createTip">
              <Input />
            </Route>
            <Route path="/scheduleSession"></Route>
            <Route path="/">
              <GetTip />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
