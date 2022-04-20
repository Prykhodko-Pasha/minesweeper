import { useEffect } from "react";
import openCell from "../helpers/openCell";
import fillNumbers from "../helpers/fillNumbers";
import fillBombs from "../helpers/fillBombs";

export default function Field() {
  const cellsArr = Array(9)
    .fill()
    .map(() => Array(9).fill(0));

  for (let i = 0; i < 10; i++) {
    fillBombs(cellsArr);
  }

  fillNumbers(cellsArr);

  useEffect(() => {
    openCell(cellsArr);
  }, [cellsArr]);

  return (
    <div className="field_wrapper" id="field">
      {cellsArr.map((row, row_index) => {
        return row.map((cell, col_index) => {
          if (cell === "b") {
            return (
              <div
                className="cell_bomb"
                key={`${row_index}-${col_index}`}
                id={`${row_index}-${col_index}`}
              ></div>
            );
          } else {
            return (
              <div
                className="cell"
                key={`${row_index}-${col_index}`}
                id={`${row_index}-${col_index}`}
              >
                {cell ? cell : ""}
              </div>
            );
          }
        });
      })}
    </div>
  );
}
