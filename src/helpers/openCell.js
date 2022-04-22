export default function openCell(cellsArr) {
  const field = document.querySelector("#field");
  field?.addEventListener("click", (e) => {
    if (e.target.classList.contains("flag")) return;
    const [row, col] = e.target.id.split("-");
    if (cellsArr[row][col] === "b") {
      // console.log("bomb :>> ");
      onBombClick(cellsArr);
      field.classList.add("isClose");
    } else {
      // console.log("object :>> ");
      onCellClick(cellsArr, Number(row), Number(col));
    }
  });
}

function onBombClick(cellsArr) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (cellsArr[i][j] === "b") {
        const bomb = document.getElementById(`${i}-${j}`);
        bomb.classList.remove("flag");
        bomb.classList.add("cell_bomb");
      }
    }
  }
}

function onCellClick(cellsArr, row, col) {
  const cell = document.getElementById(`${row}-${col}`);

  if (!cell.classList.contains("isOpen")) {
    cell.classList.add("isOpen");
    cell.innerHTML = cellsArr[row][col] === 0 ? "" : cellsArr[row][col];

    if (!cell.textContent) {
      const neighborCells = [
        row > 0 && col > 0
          ? { value: cellsArr[row - 1][col - 1], r: row - 1, c: col - 1 }
          : null,
        row > 0 ? { value: cellsArr[row - 1][col], r: row - 1, c: col } : null,
        row > 0 && col < 8
          ? { value: cellsArr[row - 1][col + 1], r: row - 1, c: col + 1 }
          : null,
        col < 8 ? { value: cellsArr[row][col + 1], r: row, c: col + 1 } : null,
        row < 8 && col < 8
          ? { value: cellsArr[row + 1][col + 1], r: row + 1, c: col + 1 }
          : null,
        row < 8 ? { value: cellsArr[row + 1][col], r: row + 1, c: col } : null,
        row < 8 && col > 0
          ? { value: cellsArr[row + 1][col - 1], r: row + 1, c: col - 1 }
          : null,
        col > 0 ? { value: cellsArr[row][col - 1], r: row, c: col - 1 } : null,
      ];

      neighborCells.map((cell) => {
        return cell !== null && onCellClick(cellsArr, cell.r, cell.c);
      });
    }
  }
}
