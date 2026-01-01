// https://pokeapi.co/api/v2/pokemon/pikachu

const button = document.querySelector(".button");
const ulList = document.querySelector(".ulList");
const input = document.querySelector(".input");

button.addEventListener("click", fetchPokemon);

async function fetchPokemon() {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${input.value}`
    );

    if (!response.ok) {
      throw new Error(`An error occurred: ${response.status}`);
    }

    const data = await response.json();

    ulList.innerHTML = "";

    let html = `
        Name: ${data.name} <br>
        Weight: ${data.weight} <br>
        Height: ${data.height} <br>
        <br>
        `;

    for (const ability of data.abilities) {
      html += `Abilities: ${ability.ability.name}`;
    }

    html += `<img src="${data.sprites.front_default}">`;

    ulList.innerHTML = html;

    console.log(data);
  } catch (error) {
    console.error("Fetch error:", error.message);
  }
}
