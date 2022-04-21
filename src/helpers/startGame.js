import fillBombs from "./fillBombs";
import fillNumbers from "./fillNumbers";

export default function startGame() {
  const cellsArr = Array(9)
    .fill()
    .map(() => Array(9).fill(0));

  for (let i = 0; i < 10; i++) {
    fillBombs(cellsArr);
  }

  fillNumbers(cellsArr);
  return cellsArr;
}
