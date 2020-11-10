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
    <div className="App">
      <header className="App-header">
        <img
          src="/images/plusMentor/plusMentor_gradient.png"
          alt="plusMentor Logo"
          width="350"
        />
        <br />
        <Input />
        <br />
        <MainTipComponentDiv />
      </header>
    </div>
  );
}

export default App;
