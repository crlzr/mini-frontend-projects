let button = document.querySelector(".btn1");

button.addEventListener("click", changeColour);

function changeColour() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const randomColour = `rgb(${r},${g},${b})`;

  button.style.backgroundColor = randomColour;
}
