const names = ["Alex", "Maria", "John", "Sofia"];
const namelist = document.querySelector(".namelist");

for (let name of names) {
  const li = document.createElement("li");
  li.innerText = name;
  namelist.append(li);
}
