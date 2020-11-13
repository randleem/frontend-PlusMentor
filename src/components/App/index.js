import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// ----------------------------------------

///// COMPONENTS

// Homepage
import Homepage from "./01_Homepage";

// Get Tip / Create Tip
import GetTip from "./GetTip/Display/";
import Input from "./CreateTip";

// FORM - Resister
import Register from "../Form-Register";

// FORM - Login
import Login from "../Form-Login";

// Introduction
import Introduction from "../Introduction";

// Interaction
import Interaction from "../Interaction";

// Icebreakers
import Icebreakers from "./Icebreakers";

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
  const [loggedIn, setLoggedIn] = useState("");

  function getEmailFromLogin(input) {
    setLoggedIn(input);
  }

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/intro">
            <Introduction getEmailFromLogin={getEmailFromLogin} />
          </Route>
          <Route path="/createTip">
            <Input getEmailFromLogin={getEmailFromLogin} />
          </Route>
          <Route path="/scheduleSession"></Route>
          <Route path="/login">
            <Login getEmailFromLogin={getEmailFromLogin} />
          </Route>
          <Route path="/getTip">
            <GetTip getEmailFromLogin={getEmailFromLogin} />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/interaction">
            <Interaction getEmailFromLogin={getEmailFromLogin} />
          </Route>
          <Route path="/icebreaker">
            <Icebreakers getEmailFromLogin={getEmailFromLogin} />
          </Route>
          <Route path="/getTip">
            <GetTip getEmailFromLogin={getEmailFromLogin} />
          </Route>
          <Route path="/">
            <Homepage getEmailFromLogin={getEmailFromLogin} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
