let button = document.querySelector(".btn1");

const quotes = [
  "Stay curious.",
  "Progress, not perfection.",
  "Keep moving forward.",
  "Small steps matter.",
  "Create something today.",
];

button.addEventListener("click", () => {
  // random number between 0 - 1, multiply by array's length
  let randomNumber = Math.random() * quotes.length;
  // Gives an integer index
  let index = Math.floor(randomNumber);

  let updateP = document.querySelector(".randomquote");
  updateP.textContent = quotes[index];
});
