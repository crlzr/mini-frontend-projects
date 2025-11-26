// Build a simple counter with three buttons: increment (+1), decrement (-1), and reset (back to 0). Display the current count on the page.

const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const reset = document.querySelector(".reset");
const display = document.querySelector(".count");

increment.addEventListener("click", increaseCount);
decrement.addEventListener("click", decreaseCount);
reset.addEventListener("click", resetCount);

let count = 0;

function increaseCount() {
  count = count + 1;
  display.textContent = count;
  return count;
}

function decreaseCount() {
  count = count - 1;
  display.textContent = count;
  return count;
}

function resetCount() {
  count = 0;
  display.textContent = count;
  return count;
}
