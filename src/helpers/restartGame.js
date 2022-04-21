// import fillNumbers from "./fillNumbers";
// import fillBombs from "./fillBombs";
import startGame from "./startGame";

export default function restartGame() {
  const logoEl = document.querySelector("#logo");
  const fieldEl = document.querySelector("#field");
  console.log("logoEl :>> ", logoEl);
  logoEl.addEventListener("click", () => onLogoClick(fieldEl));
}

function onLogoClick(fieldEl) {
  fieldEl.classList.remove("isClose");
  console.log("restart :>> ");
  return startGame();
}
