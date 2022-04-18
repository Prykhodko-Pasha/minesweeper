import s from "./Field.module.css";

export default function Field() {
  const cellsArr = Array(9)
    .fill()
    .map(() => Array(9).fill());
  cellsArr.map((item) => 0);
  //   console.log("cellsArr :>> ", cellsArr);

  function fillBombs() {
    const randomRow = Math.floor(Math.random() * 8);
    const randomCol = Math.floor(Math.random() * 8);
    if (!cellsArr[randomRow][randomCol]) cellsArr[randomRow][randomCol] = "b";
    else fillBombs();
  }

  for (let i = 0; i < 10; i++) {
    fillBombs();
  }

  function fillNumbers() {
    cellsArr.map();
  }

  return (
    <div className={s.field_wrapper}>
      {cellsArr.map((row, row_index) => {
        return row.map((cell, col_index) => (
          <div className={s.cell} key={`${row_index}-${col_index}`}>
            {cell}
          </div>
        ));
      })}
    </div>
  );
}
