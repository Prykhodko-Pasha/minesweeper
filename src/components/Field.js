import { useEffect } from "react";

export default function Field({ cellsArr }) {
  //   console.log("START :>> ");
  function win() {
    const flagsCount = document.querySelectorAll("flag").length;
    console.log("flagsCount :>> ", flagsCount);
    const openCellsCount = document.querySelectorAll("isOpen").length;
    console.log("openCellsCount :>> ", openCellsCount);
    if (flagsCount === 10 && openCellsCount === 9 * 9 - 10) alert("WIN");
  }

  useEffect(() => {
    win();
  }, []);

  return (
    <div className="field_wrapper" id="field">
      {/* {console.log("cellsArr START :>> ", cellsArr)} */}
      {cellsArr.map((row, row_index) => {
        return row.map((_, col_index) => (
          <div
            className="cell"
            key={`${row_index}-${col_index}`}
            id={`${row_index}-${col_index}`}
          ></div>
        ));
      })}
    </div>
  );
}
