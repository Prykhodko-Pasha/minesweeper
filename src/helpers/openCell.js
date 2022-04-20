export default function openCell(cellsArr) {
  const field = document.querySelector("#field");
  field?.addEventListener("click", (e) => {
    const [row, col] = e.target.id.split("-");
    onCellClick(cellsArr, Number(row), Number(col));
  });
}

function onCellClick(cellsArr, row, col) {
  const cell = document.getElementById(`${row}-${col}`);

  if (!cell.classList.contains("isOpen")) {
    cell.classList.add("isOpen");

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
