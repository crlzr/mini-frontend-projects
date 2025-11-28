let menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
  let toggleMenu = document.querySelectorAll(".menu-section");

  for (section of toggleMenu) {
    if (section.classList.contains("hidden")) {
      section.classList.remove("hidden");
    } else {
      section.classList.add("hidden");
    }
  }
});
