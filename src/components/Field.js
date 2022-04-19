import s from "./Field.module.css";

export default function Field() {
  const cellsArr = Array(9)
    .fill()
    .map(() => Array(9).fill(0));

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
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (cellsArr[i][j] === "b") {
          if (j > 0 && cellsArr[i][j - 1] !== "b") cellsArr[i][j - 1] += 1;
          if (j < 8 && cellsArr[i][j + 1] !== "b") cellsArr[i][j + 1] += 1;
          if (i > 0 && j > 0 && cellsArr[i - 1][j - 1] !== "b")
            cellsArr[i - 1][j - 1] += 1;
          if (i > 0 && cellsArr[i - 1][j] !== "b") cellsArr[i - 1][j] += 1;
          if (i > 0 && j < 8 && cellsArr[i - 1][j + 1] !== "b")
            cellsArr[i - 1][j + 1] += 1;
          if (i < 8 && j > 0 && cellsArr[i + 1][j - 1] !== "b")
            cellsArr[i + 1][j - 1] += 1;
          if (i < 8 && cellsArr[i + 1][j] !== "b") cellsArr[i + 1][j] += 1;
          if (i < 8 && j < 8 && cellsArr[i + 1][j + 1] !== "b")
            cellsArr[i + 1][j + 1] += 1;
        }
      }
    }
  }

  fillNumbers();

  return (
    <div className={s.field_wrapper}>
      {cellsArr.map((row, row_index) => {
        return row.map((cell, col_index) => {
          if (cell === "b") {
            return (
              <div
                className={s.cell_bomb}
                key={`${row_index}-${col_index}`}
              ></div>
            );
          } else {
            return (
              <div className={s.cell} key={`${row_index}-${col_index}`}>
                {cell}
              </div>
            );
          }
        });
      })}
    </div>
  );
}
