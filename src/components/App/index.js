import MainTipComponentDiv from "./MainTipComponentDiv/Display";
import Input from "./MainTipComponentDiv/Submit/Input"
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Happy Project Week</p>
        <Input />
        <MainTipComponentDiv />
      </header>
    </div>
  );
}

export default App;
