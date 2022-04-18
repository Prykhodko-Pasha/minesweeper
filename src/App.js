import logo from "./logo.svg";
import "./App.css";
import Field from "./components/Field";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Minesweeper</p>
        <Field />
      </header>
    </div>
  );
}

export default App;
