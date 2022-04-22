import { useEffect, useState } from "react";
import logo from "./images/logo.png";
import "./App.css";
import Field from "./components/Field";
import openCell from "./helpers/openCell";
import putFlag from "./helpers/putFlag";
import startGame from "./helpers/startGame";
import win from "./helpers/win";

function App() {
  const [cellsArr, setCellsArr] = useState(null);

  useEffect(() => {
    setCellsArr(startGame());
  }, []);

  useEffect(() => {
    openCell(cellsArr);
    putFlag();
    win();
  }, [cellsArr]);

  return (
    <div className="App">
      <header className="App-header">
        <div
          id="logo"
          onClick={async () => {
            await setCellsArr(null);
            await setCellsArr(startGame());
          }}
        >
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </header>
      <p>Minesweeper</p>
      {cellsArr && <Field cellsArr={cellsArr} />}
    </div>
  );
}

export default App;
