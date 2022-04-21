import { useEffect, useState } from "react";
import logo from "./images/logo.png";
import "./App.css";
import Field from "./components/Field";
// import fillBombs from "./helpers/fillBombs";
// import fillNumbers from "./helpers/fillNumbers";
import openCell from "./helpers/openCell";
import putFlag from "./helpers/putFlag";
import startGame from "./helpers/startGame";

function App() {
  const [cellsArr, setCellsArr] = useState(null);

  useEffect(() => {
    setCellsArr(startGame());
    // const logoEl = document.querySelector("#logo");
    // logoEl.addEventListener("click", restartGame);
  }, []);

  // function restartGame() {
  // const fieldEl = document.querySelector("#field");
  // console.log("restart :>> ");
  // fieldEl?.classList.remove("isClose");
  // setCellsArr(null, () => {
  //   return setCellsArr(startGame());
  // });
  //   setCellsArr(startGame());
  // }

  useEffect(() => {
    openCell(cellsArr);
    putFlag();
  }, [cellsArr]);

  return (
    <div className="App">
      <header className="App-header">
        <div id="logo">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p>Minesweeper</p>
        {cellsArr && <Field cellsArr={cellsArr} />}
      </header>
    </div>
  );
}

export default App;
