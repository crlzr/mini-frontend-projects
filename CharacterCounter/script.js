let input = document.querySelector(".textarea");

input.addEventListener("input", (event) => {
  let length = event.target.value.length;
  let chars = document.querySelector(".character");
  chars.textContent = "Characters typed: " + length;
});
