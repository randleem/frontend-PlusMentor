import React from "react";
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
        <Switch>
          <Route path="/intro">
            <Introduction />
          </Route>
          <Route path="/createTip">
            <Input />
          </Route>
          <Route path="/scheduleSession"></Route>
          <Route path="/login"></Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
