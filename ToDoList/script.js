// 3. Todo List
//    Create an input field and a button. When the button is clicked, add the input text as a new list item. Bonus: add a delete button next to each item.

document.querySelector(".button").addEventListener("click", addListItem);

function addListItem() {
  let input = document.querySelector(".input");
  if (input.value === "") return;

  let listItem = document.createElement("li");
  listItem.textContent = input.value;

  let textSpan = document.createElement("span");
  listItem.append(textSpan);

  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => listItem.remove());

  listItem.append(deleteButton);

  let list = document.querySelector(".ul");
  list.append(listItem);

  input.value = "";
}
