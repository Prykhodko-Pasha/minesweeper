import win_img from "../images/win.jpg";

export default function win() {
  const field = document.querySelector("#field");
  field?.addEventListener("click", () => {
    const openCellsCount = document.querySelectorAll(".isOpen").length;
    // console.log("openCellsCount :>> ", openCellsCount);
    if (openCellsCount === 9 * 9 - 10) {
      field.classList.add("isClose");
      field.innerHTML = `<img src=${win_img} class="win_img" alt="win" />`;
    }
  });
}
