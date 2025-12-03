// When the user clicks a button,
//create a new <div> element with a message
//(e.g., “Hello from createElement!”) and add it to the page. -->

let button = document.querySelector(".btn1");

button.addEventListener("click", () => {
  let paragraph = document.createElement("p");
  paragraph.innerHTML = "Hello I come from createElement";
  document.body.append(paragraph);
});
