export default function fillNumbers(cellsArr) {
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
