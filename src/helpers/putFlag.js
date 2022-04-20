export default function putFlag() {
  const field = document.querySelector("#field");
  field.addEventListener("contextmenu", onPutFlag);
}

function onPutFlag(e) {
  e.preventDefault();
  e.target.classList.toggle("flag");
}
