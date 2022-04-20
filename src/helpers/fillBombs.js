export default function fillBombs(cellsArr) {
  const randomRow = Math.floor(Math.random() * 8);
  const randomCol = Math.floor(Math.random() * 8);
  if (!cellsArr[randomRow][randomCol]) cellsArr[randomRow][randomCol] = "b";
  else fillBombs(cellsArr);
}
