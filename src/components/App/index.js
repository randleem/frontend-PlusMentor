import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
            src="/images/plusMentor/plusMentor_gradient.png"
            alt="plusMentor Logo"
            width="350"
          />
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/createTip">Create Tip</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route path="/createTip">
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
