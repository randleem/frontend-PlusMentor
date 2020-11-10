import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import MainTipComponentDiv from "./MainTipComponentDiv/Display";
import Input from "./MainTipComponentDiv/Submit/Input";
// Main CSS
import "./App.css";

// CSS Framework
import "./Bulma.css";
// CSS Animations
import "./Animations.css";

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
            <NavLink to="/">Home</NavLink>
            &nbsp;
            <NavLink to="/createTip">Create tip</NavLink>
            &nbsp;
            <NavLink to="/scheduleSession">Schedule a session</NavLink>
          </nav>
        </header>

        <Switch>
          <Route path="/createTip">
            <Input />
          </Route>
          <Route path="/scheduleSession">
            <Input />
          </Route>
          <Route path="/">
            <MainTipComponentDiv />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
